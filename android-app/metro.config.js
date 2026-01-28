const { getDefaultConfig } = require('expo/metro-config');

// Ensure we're using the correct directory path
const path = require('path');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Ensure TypeScript files are processed correctly
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx'];

// Add additional configurations if needed
config.resolver.assetExts = [...config.resolver.assetExts, 'bin'];

// Ensure node_modules is properly resolved
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  ...config.resolver.nodeModulesPaths
];

// Add custom resolver to ensure expo is found
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'expo') {
    const expoPath = path.resolve(projectRoot, 'node_modules/expo');
    console.log(`Resolving expo module to: ${expoPath}`);
  }
  return context.resolveRequest(context, moduleName, platform);
};

console.log('Metro config loaded with project root:', projectRoot);
console.log('Node modules paths:', config.resolver.nodeModulesPaths);

module.exports = config;