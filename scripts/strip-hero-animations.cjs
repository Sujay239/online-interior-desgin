const fs = require('fs');
const path = require('path');

const filesToStrip = [
  'src/app/pages/public/Portfolio/PortfolioHero.tsx',
  'src/app/pages/public/StyleQuiz/StyleQuizHero.tsx',
  'src/app/pages/public/PortfolioCategory/PortfolioCategoryHero.tsx',
  'src/app/pages/public/Blog/BlogHero.tsx',
  'src/app/pages/public/Landing/HeroSection.tsx',
  'src/app/pages/public/HowItWorks/HowItWorksHero.tsx',
  'src/app/pages/public/BlogPost.tsx',
];

const basePath = path.join(__dirname, '..');

filesToStrip.forEach(relPath => {
  const filePath = path.join(basePath, relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('animate-fade-in-up')) {
      content = content.replace(/animate-fade-in-up /g, ''); // strip the class and the trailing space
      content = content.replace(/ animate-fade-in-up/g, ''); // strip the class and the leading space
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Stripped animation from ${relPath}`);
    }
  } else {
    console.log(`File not found: ${relPath}`);
  }
});
