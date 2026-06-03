const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '../src'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace import { motion } from "framer-motion" or import { motion, ... }
  // with import { m } or import { m, ... }
  if (content.includes('from "framer-motion"')) {
    // A bit hacky but works for standard imports
    if (content.includes('import { motion }')) {
      content = content.replace(/import\s*\{\s*motion\s*\}\s*from\s*"framer-motion"/g, 'import { m } from "framer-motion"');
      changed = true;
    } else if (content.includes('motion,')) {
      content = content.replace(/\bmotion\b/g, 'm');
      changed = true;
    } else if (content.includes(', motion')) {
      content = content.replace(/\bmotion\b/g, 'm');
      changed = true;
    }
    
    // Also replace component usage
    if (content.includes('<motion.')) {
      content = content.replace(/<motion\./g, '<m.');
      changed = true;
    }
    if (content.includes('</motion.')) {
      content = content.replace(/<\/motion\./g, '</m.');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated ' + f);
  }
});
