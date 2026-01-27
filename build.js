#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 显示当前工作目录
console.log('Current directory:', process.cwd());

const androidAppPath = path.join(process.cwd(), 'android-app');
const androidAppTempPath = path.join(process.cwd(), 'android-app-temp');

// 检查 android-app 目录是否存在
if (fs.existsSync(androidAppPath)) {
    console.log('Found android-app directory, renaming to temporary name...');
    // 重命名 android-app 目录为 android-app-temp
    fs.renameSync(androidAppPath, androidAppTempPath);
    console.log('Renamed android-app to android-app-temp');
} else {
    console.log('No android-app directory found, skipping rename');
}

// 运行 Next.js 构建
try {
    console.log('Running Next.js build...');
    execSync('npx next build', { stdio: 'inherit' });
    console.log('Next.js build completed successfully!');
} catch (error) {
    console.error('Next.js build failed:', error.message);
    // 恢复 android-app 目录
    if (fs.existsSync(androidAppTempPath)) {
        console.log('Restoring android-app directory...');
        fs.renameSync(androidAppTempPath, androidAppPath);
        console.log('Restored android-app directory');
    }
    process.exit(1);
}

// 恢复 android-app 目录
if (fs.existsSync(androidAppTempPath)) {
    console.log('Restoring android-app directory...');
    fs.renameSync(androidAppTempPath, androidAppPath);
    console.log('Restored android-app directory');
}

console.log('Build process completed!');
process.exit(0);
