# DSYC Launcher Android

这是 DSYC Launcher 的 Android 版本，使用 React Native (Expo) 构建。

## 功能特性

- 账户管理（Microsoft、离线、第三方认证）
- 实例管理（创建、删除、配置游戏实例）
- 模组管理（浏览、安装、卸载模组）
- 资源管理（资源包、光影包、皮肤等）
- 设置管理（游戏设置、启动器设置）

## 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn
- Expo CLI
- Android Studio（用于本地构建）
- Expo Go（用于开发测试）

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
# 启动 Expo 开发服务器
npm start

# 在 Android 设备上运行
npm run android

# 在 iOS 设备上运行（仅限 macOS）
npm run ios
```

## 构建 APK

### 使用 EAS Build（推荐）

1. 安装 EAS CLI：
```bash
npm install -g eas-cli
```

2. 登录 Expo：
```bash
eas login
```

3. 构建生产版本 APK：
```bash
eas build --platform android --profile production
```

### 本地构建

1. 配置构建环境：
```bash
eas build --platform android --profile production --local
```

## 项目结构

```
android-app/
├── app/              # 应用页面
│   ├── account/      # 账户管理页面
│   ├── instance/     # 实例管理页面
│   ├── mod/          # 模组管理页面
│   ├── resource/     # 资源管理页面
│   ├── settings/     # 设置页面
│   ├── _layout.tsx   # 导航布局
│   └── index.tsx     # 主页
├── assets/           # 应用资源（图标、启动画面等）
├── App.tsx           # 应用入口
├── app.json          # Expo 配置
├── eas.json          # EAS Build 配置
└── package.json      # 项目依赖
```

## 技术栈

- React Native 0.81
- Expo 54
- React Navigation 7
- React Native Paper 5
- TypeScript 5

## 注意事项

- Android 版本目前仅支持基本功能，与桌面版功能保持一致
- 需要配置 EXPO_TOKEN 环境变量以使用 EAS Build
- 生产构建需要在 GitHub Actions 中配置 EXPO_TOKEN secret

## 许可证

版权所有 © 2024-2026 DSYCLauncher 团队。
