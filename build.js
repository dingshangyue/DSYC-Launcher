#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 显示当前工作目录
console.log('Current directory:', process.cwd());

// 定义临时目录路径（在项目根目录之外）
const tempDir = path.join(require('os').tmpdir(), `android-app-backup-${Date.now()}`);
const androidAppPath = path.join(process.cwd(), 'android-app');
const tempAndroidAppPath = path.join(tempDir, 'android-app');

// 检查 android-app 目录是否存在
if (fs.existsSync(androidAppPath)) {
    console.log('Found android-app directory, moving to temporary location...');
    // 创建临时目录
    fs.mkdirSync(tempDir, { recursive: true });
    // 移动 android-app 目录到临时位置
    fs.renameSync(androidAppPath, tempAndroidAppPath);
    console.log(`Moved android-app to ${tempDir}`);
} else {
    console.log('No android-app directory found, skipping move');
}

// 运行 Next.js 构建
try {
    console.log('Running Next.js build...');
    execSync('npx next build', { stdio: 'inherit' });
    console.log('Next.js build completed successfully!');
} catch (error) {
    console.error('Next.js build failed:', error.message);
    // 恢复 android-app 目录
    if (fs.existsSync(tempAndroidAppPath)) {
        console.log('Restoring android-app directory...');
        fs.renameSync(tempAndroidAppPath, androidAppPath);
        // 清理临时目录
        fs.rmdirSync(tempDir, { recursive: true });
        console.log('Restored android-app directory and cleaned up temporary files');
    }
    process.exit(1);
}

// 恢复 android-app 目录
if (fs.existsSync(tempAndroidAppPath)) {
    console.log('Restoring android-app directory...');
    fs.renameSync(tempAndroidAppPath, androidAppPath);
    // 清理临时目录
    fs.rmdirSync(tempDir, { recursive: true });
    console.log('Restored android-app directory and cleaned up temporary files');
}

console.log('Build process completed!');
process.exit(0);
