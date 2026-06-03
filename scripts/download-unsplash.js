const fs = require('fs');
const path = require('path');
const https = require('https');

const SRC_DIR = path.join(__dirname, '../src');
const PUBLIC_IMG_DIR = path.join(__dirname, '../public/images/unsplash');

// Create the target directory if it doesn't exist
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

// Map to store downloaded URLs and their local filenames to avoid re-downloading
const downloadedImages = new Map();

// Helper to sanitize filename
function getFilenameFromUrl(url) {
  // Try to extract a photo ID
  const match = url.match(/photo-([\w-]+)/);
  if (match) {
    return `${match[1]}.jpg`;
  }
  // Fallback if no photo ID found
  return `image-${Date.now()}-${Math.floor(Math.random() * 1000)}.jpg`;
}

// Function to download image
function downloadImage(url, filename) {
  const filepath = path.join(PUBLIC_IMG_DIR, filename);
  
  if (fs.existsSync(filepath)) {
    console.log(`Skipping existing file: ${filename}`);
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file async
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to recursively read all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      // Only process typical source files
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

async function processFiles() {
  const files = getAllFiles(SRC_DIR);
  let totalReplaced = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Regex to find Unsplash URLs
    // Using a non-greedy match to find the URL up to the closing quote or query param if any.
    // Assuming urls are in strings: "https://images.unsplash.com/..."
    const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^"'\s`]+(\?[^"'\s`]*)?/g;

    const matches = content.match(unsplashRegex);

    if (matches) {
      for (const url of matches) {
        let filename;
        if (downloadedImages.has(url)) {
          filename = downloadedImages.get(url);
        } else {
          filename = getFilenameFromUrl(url);
          downloadedImages.set(url, filename);
          
          try {
            await downloadImage(url, filename);
          } catch (err) {
            console.error(`Error downloading ${url}:`, err.message);
            continue; // Skip replacement if download fails
          }
        }

        const localPath = `/images/unsplash/${filename}`;
        
        // Escape regex special chars in url for replacement
        const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        content = content.replace(new RegExp(escapedUrl, 'g'), localPath);
        hasChanges = true;
        totalReplaced++;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }

  console.log(`Finished processing. Replaced ${totalReplaced} URLs in total.`);
}

processFiles().catch(console.error);
