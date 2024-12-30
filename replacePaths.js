const fs = require('fs');
const path = require('path');

// Path to your exported "out" directory
const outDir = path.join(__dirname, 'out');

// Function to recursively walk through all files in a directory
function walkDir(dir, fileCallback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath, fileCallback);
    } else if (stat.isFile() && filePath.endsWith('.html')) {
      fileCallback(filePath);
    }
  });
}

// Function to replace '/_next/' with './_next/' in HTML files
function replacePathsInFile(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Replace '/_next/' with './_next/' to make paths relative
  fileContent = fileContent.replace(/\/_next\//g, './_next/');
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Updated paths in: ${filePath}`);
}

// Walk through the out directory and process HTML files
walkDir(outDir, replacePathsInFile);

console.log('Path replacement complete!');
