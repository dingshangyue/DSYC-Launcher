const { getDefaultConfig } = require('@react-native/metro-config');

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

// Add Expo-specific resolver for expo module
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'expo') {
    const expoPath = path.resolve(projectRoot, 'node_modules/expo');
    return context.resolveRequest(context, expoPath, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

// Export the modified config
module.exports = config;