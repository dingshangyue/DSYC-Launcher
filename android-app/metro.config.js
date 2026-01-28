const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom configurations if needed
config.resolver.sourceExts = [...config.resolver.sourceExts, 'ts', 'tsx'];

module.exports = config;