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

// Add expo-specific configurations
const { withExpoMetroConfig } = require('expo/metro-config');

// Export the modified config
module.exports = withExpoMetroConfig(config);