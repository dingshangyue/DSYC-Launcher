#!/bin/bash

# 设置错误时退出
set -e

# 显示当前工作目录
echo "Current directory: $(pwd)"

# 检查 android-app 目录是否存在
if [ -d "android-app" ]; then
    echo "Found android-app directory, renaming..."
    # 临时重命名 android-app 目录，避免 Next.js 构建时解析 React Native 依赖
    mv android-app android-app-temp
    echo "Renamed android-app to android-app-temp"
else
    echo "No android-app directory found, skipping rename"
fi

# 运行 Next.js 构建（直接运行 next build 而不是 npm run build）
echo "Running Next.js build..."
./node_modules/.bin/next build

echo "Next.js build completed successfully!"

# 恢复 android-app 目录名称
if [ -d "android-app-temp" ]; then
    echo "Restoring android-app directory..."
    mv android-app-temp android-app
    echo "Restored android-app directory"
else
    echo "No android-app-temp directory found, skipping restore"
fi

echo "Build process completed!"
exit 0
