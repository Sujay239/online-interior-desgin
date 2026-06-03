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

  if (content.includes('import { m } from "framer-motion"')) {
    content = content.replace(/import \{ m \} from "framer-motion"/g, 'import { motion } from "framer-motion"');
    changed = true;
  }

  if (content.includes('<m.')) {
    content = content.replace(/<m\./g, '<motion.');
    changed = true;
  }

  if (content.includes('</m.')) {
    content = content.replace(/<\/m\./g, '</motion.');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Reverted: ' + f);
    count++;
  }
});

console.log('Total files reverted: ' + count);
