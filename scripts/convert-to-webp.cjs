const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '../src');
const PUBLIC_IMG_DIR = path.join(__dirname, '../public/images/unsplash');

async function convertImages() {
  if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    console.log(`Directory not found: ${PUBLIC_IMG_DIR}`);
    return;
  }

  const files = fs.readdirSync(PUBLIC_IMG_DIR);
  
  console.log('Converting images to WebP...');
  
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(PUBLIC_IMG_DIR, file);
      const parsed = path.parse(file);
      const outputPath = path.join(PUBLIC_IMG_DIR, `${parsed.name}.webp`);
      
      // Convert and heavily compress to get close to 10kb
      // Using a low quality and a max width if the image is too large
      try {
        await sharp(inputPath)
          .resize({ width: 800, withoutEnlargement: true }) // Resize to reasonable max width
          .webp({ quality: 20, effort: 6 }) // Very aggressive compression
          .toFile(outputPath);
          
        console.log(`Converted: ${file} -> ${parsed.name}.webp`);
        
        // Optionally delete the original file
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

// Function to recursively read all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

async function updateSourceCode() {
  console.log('Updating source code references...');
  const files = getAllFiles(SRC_DIR);
  let filesUpdated = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Replace .jpg, .jpeg, .png with .webp for files in /images/unsplash/
    const imgRegex = /(\/images\/unsplash\/[^"'\s`]+)\.(jpg|jpeg|png)/g;
    
    if (content.match(imgRegex)) {
      content = content.replace(imgRegex, '$1.webp');
      hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in: ${file}`);
      filesUpdated++;
    }
  }
  
  console.log(`Updated references in ${filesUpdated} files.`);
}

async function run() {
  await convertImages();
  await updateSourceCode();
  console.log('All done!');
}

run().catch(console.error);
