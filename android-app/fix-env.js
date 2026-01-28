// Fix environment variables for Metro bundler
const path = require('path');
const fs = require('fs');

// Set the correct project root
const projectRoot = path.resolve(__dirname);
const nodeModulesPath = path.join(projectRoot, 'node_modules');
const expoPath = path.join(nodeModulesPath, 'expo');

console.log('=== Fixing environment for Metro bundler ===');
console.log('Project root:', projectRoot);
console.log('Node modules path:', nodeModulesPath);
console.log('Expo path:', expoPath);

// Set NODE_PATH environment variable
process.env.NODE_PATH = nodeModulesPath;
console.log('NODE_PATH set to:', process.env.NODE_PATH);

// Change to project root directory
process.chdir(projectRoot);
console.log('Current working directory:', process.cwd());

// Verify expo exists
if (!fs.existsSync(expoPath)) {
  console.error('❌ Expo not found in node_modules');
  console.error('Node modules contents:', fs.readdirSync(nodeModulesPath).slice(0, 20));
  process.exit(1);
} else {
  console.log('✅ Expo found in node_modules');
}

// Verify we can require expo
try {
  const expo = require('expo');
  console.log('✅ Successfully required expo module');
  console.log('Expo version:', expo?.version || 'Version not available');
} catch (error) {
  console.error('❌ Failed to require expo:', error.message);
  process.exit(1);
}

console.log('=== Environment fix completed ===');

// Export the fixed environment
module.exports = {
  projectRoot,
  nodeModulesPath,
  expoPath
};
