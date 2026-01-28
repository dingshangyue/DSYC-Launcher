const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure TypeScript files are processed correctly
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx'];

// Add additional configurations if needed
config.resolver.assetExts = [...config.resolver.assetExts, 'bin'];

module.exports = config;