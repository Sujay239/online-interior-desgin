const fs = require('fs');
const path = require('path');
const https = require('https');

const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Helper to download file
const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const fontConfig = [
  {
    family: 'Lato',
    weights: ['300', '400', '700'],
    url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
  },
  {
    family: 'Playfair Display',
    weights: ['400', '700', '400italic'],
    url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap'
  }
];

// We must use a modern User-Agent to ensure Google Fonts returns .woff2 formats
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';

async function processFonts() {
  let cssContent = '';

  for (const font of fontConfig) {
    console.log(`Fetching CSS for ${font.family}...`);
    const css = await new Promise((resolve, reject) => {
      https.get(font.url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });

    // The CSS contains blocks like:
    // @font-face {
    //   font-family: 'Lato';
    //   font-style: normal;
    //   font-weight: 400;
    //   src: url(https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTFMjT9T672G.woff2) format('woff2');
    //   unicode-range: U+0000-00FF...
    // }
    
    // We only care about latin subset for this optimization (simplest)
    // Actually, we'll just download whatever URLs are in the CSS, but to avoid 50 files (cyrillic, etc), 
    // let's parse the CSS and only grab the ones under /* latin */ comments, or just grab all and rename them.
    
    const blocks = css.split('@font-face {');
    for (let i = 1; i < blocks.length; i++) {
      const block = blocks[i];
      // simplistic parsing
      const isLatin = block.includes('U+0000-00FF'); 
      if (!isLatin) continue; // Only keep latin to save size/complexity

      const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);
      const weightMatch = block.match(/font-weight:\s*(\d+);/);
      const styleMatch = block.match(/font-style:\s*([^;]+);/);

      if (urlMatch && weightMatch && styleMatch) {
        const url = urlMatch[1];
        const weight = weightMatch[1];
        const style = styleMatch[1].trim() === 'italic' ? 'italic' : 'normal';
        const filename = `${font.family.replace(/\s+/g, '-').toLowerCase()}-${weight}-${style}.woff2`;
        const destPath = path.join(fontsDir, filename);
        
        console.log(`Downloading ${filename}...`);
        await downloadFile(url, destPath);
        
        // Build the local @font-face css
        cssContent += `
@font-face {
  font-family: '${font.family}';
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url('/fonts/${filename}') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;
      }
    }
  }

  // Write out the CSS file so we can manually copy/paste it or include it
  fs.writeFileSync(path.join(__dirname, 'fonts.css'), cssContent.trim());
  console.log('Done! Check scripts/fonts.css for the @font-face rules.');
}

processFonts().catch(console.error);
