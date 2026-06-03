const fs = require('fs');
const path = require('path');

const filesToClean = [
  'src/app/layouts/MainLayout.tsx',
  'src/app/pages/public/Landing.tsx',
  'src/app/pages/public/Portfolio.tsx',
  'src/app/pages/public/PortfolioCategoryPage.tsx',
  'src/app/pages/public/PricingPage.tsx',
  'src/app/pages/public/StyleQuizStart.tsx',
  'src/app/routes/routeUtils.tsx',
];

const basePath = path.join(__dirname, '..');

// Remove Suspense from imports
filesToClean.forEach(relPath => {
  const filePath = path.join(basePath, relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Regex to remove `Suspense, ` or `, Suspense` or `Suspense` inside imports
    content = content.replace(/,\s*Suspense\b/g, '');
    content = content.replace(/\bSuspense\s*,\s*/g, '');
    // If it is the only thing: `import { Suspense } from "react";`
    content = content.replace(/import\s*\{\s*Suspense\s*\}\s*from\s*"react";?\r?\n/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned imports in ${relPath}`);
  }
});

// Fix verbatimModuleSyntax in ClientOnly.tsx
const clientOnlyPath = path.join(basePath, 'src/components/shared/ClientOnly.tsx');
if (fs.existsSync(clientOnlyPath)) {
  let content = fs.readFileSync(clientOnlyPath, 'utf8');
  content = content.replace(/import \{ useState, useEffect, Suspense, ReactNode \} from "react";/, 
                            'import { useState, useEffect, Suspense } from "react";\nimport type { ReactNode } from "react";');
  fs.writeFileSync(clientOnlyPath, content, 'utf8');
  console.log('Fixed ClientOnly.tsx imports');
}
