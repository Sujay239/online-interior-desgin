const fs = require('fs');
const path = require('path');

const files = [
  'src/app/routes/routeUtils.tsx',
  'src/app/pages/public/StyleQuizStart.tsx',
  'src/app/pages/public/PricingPage.tsx',
  'src/app/pages/public/PortfolioCategoryPage.tsx',
  'src/app/pages/public/Portfolio.tsx',
  'src/app/pages/public/Landing.tsx',
  'src/app/layouts/MainLayout.tsx',
];

const basePath = path.join(__dirname, '..');

files.forEach(relPath => {
  const filePath = path.join(basePath, relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add ClientOnly import if not exists
    if (!content.includes('ClientOnly')) {
      // Find the last import statement and add the new import after it
      const imports = content.match(/^import .* from ".*";?\r?\n/gm);
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        content = content.replace(lastImport, lastImport + 'import { ClientOnly } from "@/components/shared/ClientOnly";\n');
      } else {
        // Just put it at the top
        content = 'import { ClientOnly } from "@/components/shared/ClientOnly";\n' + content;
      }
    }

    // Replace <Suspense> with <ClientOnly>
    content = content.replace(/<Suspense/g, '<ClientOnly');
    content = content.replace(/<\/Suspense>/g, '</ClientOnly>');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${relPath}`);
  } else {
    console.log(`File not found: ${relPath}`);
  }
});
