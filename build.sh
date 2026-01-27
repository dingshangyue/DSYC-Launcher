#!/bin/bash

# 设置错误时退出
set -e

# 显示当前工作目录
echo "Current directory: $(pwd)"

# 定义临时目录路径（在项目根目录之外）
TEMP_DIR="/tmp/android-app-backup-$(date +%s)"

# 检查 android-app 目录是否存在
if [ -d "android-app" ]; then
    echo "Found android-app directory, moving to temporary location..."
    # 创建临时目录
    mkdir -p "$TEMP_DIR"
    # 移动 android-app 目录到临时位置
    mv android-app "$TEMP_DIR/"
    echo "Moved android-app to $TEMP_DIR"
else
    echo "No android-app directory found, skipping move"
fi

# 运行 Next.js 构建
echo "Running Next.js build..."
./node_modules/.bin/next build

echo "Next.js build completed successfully!"

# 恢复 android-app 目录
if [ -d "$TEMP_DIR/android-app" ]; then
    echo "Restoring android-app directory..."
    mv "$TEMP_DIR/android-app" .
    # 清理临时目录
    rmdir "$TEMP_DIR"
    echo "Restored android-app directory and cleaned up temporary files"
else
    echo "No android-app directory found in temporary location, skipping restore"
fi

echo "Build process completed!"
exit 0
