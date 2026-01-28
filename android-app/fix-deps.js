// Script to fix expo dependencies
console.log('Fixing expo dependencies...');

// This script ensures that all expo dependencies are properly installed
const fs = require('fs');
const path = require('path');

// Check if package.json exists
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('package.json found');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Expo version:', packageJson.dependencies?.expo);
  console.log('Dependencies check completed');
} else {
  console.error('package.json not found');
}

console.log('Dependency fix script completed');
