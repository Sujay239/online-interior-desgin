const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/pages/public/StyleQuiz/StyleQuizHero.tsx',
  'src/app/pages/public/Portfolio/PortfolioHero.tsx',
  'src/app/pages/public/HowItWorks/HowItWorksHero.tsx',
  'src/app/pages/public/Blog/BlogHero.tsx',
];

const basePath = path.join(__dirname, '..');

filesToUpdate.forEach(relPath => {
  const filePath = path.join(basePath, relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has fetchPriority to avoid duplicates
    if (!content.includes('fetchPriority="high"')) {
      // Replace the first <img with <img fetchPriority="high" loading="eager"
      content = content.replace(/<img/, '<img\n          fetchPriority="high"\n          loading="eager"');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${relPath}`);
    } else {
      console.log(`Already has fetchPriority: ${relPath}`);
    }
  } else {
    console.log(`File not found: ${relPath}`);
  }
});
