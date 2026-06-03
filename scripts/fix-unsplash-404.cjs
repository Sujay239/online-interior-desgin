const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
  });
  return results;
}

const files = walk(path.join(__dirname, '..', 'src'));
let count = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  if (content.includes('1616486338812-3dadae4b4f9d')) {
    content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1616486338812-3dadae4b4f9d[^"'`\s]*/g, '/images/unsplash/1618221195710-dd6b41faaea6.webp');
    content = content.replace(/\/images\/unsplash\/1616486338812-3dadae4b4f9d\.webp/g, '/images/unsplash/1618221195710-dd6b41faaea6.webp');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Replaced in ' + f);
    count++;
  }
});

console.log('Total files replaced: ' + count);
