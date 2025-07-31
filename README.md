# CISSP-Mindset

CCSP 雲端安全認證學習資源與複習指南

## 📚 專案概述

這是一個專門為 CCSP (Certified Cloud Security Professional) 認證考試準備的學習資源網站。網站包含了 Domain 3 和 Domain 5 的詳細內容，以及 CCSP 相關的 FAQ 和複習指南。

## 🚀 快速開始

### 本地開發

1. **克隆專案**

   ```bash
   git clone https://github.com/your-username/cissp-mindset.git
   cd cissp-mindset
   ```

2. **安裝依賴**

   ```bash
   # 安裝 Ruby 依賴
   bundle install

   # 安裝 Node.js 依賴
   npm install
   ```

3. **設置 Jekyll 目錄結構**

   ```bash
   npm run setup
   ```

4. **啟動本地伺服器**

   ```bash
   npm run serve
   ```

5. **訪問網站**
   打開瀏覽器訪問 `http://localhost:4000`

### 構建生產版本

```bash
npm run build
```

## 📁 專案結構

```
cissp-mindset/
├── _ccsp/                 # CCSP 相關內容
├── _domain3/              # Domain 3 內容
├── _domain5/              # Domain 5 內容
├── _layouts/              # Jekyll 布局文件
├── _posts/                # 部落格文章
├── assets/                # 靜態資源
├── .github/workflows/     # GitHub Actions
├── scripts/               # 腳本文件
├── _config.yml           # Jekyll 配置
├── Gemfile               # Ruby 依賴
└── package.json          # Node.js 依賴
```

## 🔧 CI/CD 管道

### GitHub Actions

專案使用 GitHub Actions 自動化部署流程：

1. **觸發條件**: 推送到 `main` 或 `master` 分支
2. **構建環境**: Ubuntu 最新版本
3. **部署目標**: GitHub Pages

### 工作流程

1. **檢查代碼**: 從 GitHub 倉庫檢出代碼
2. **設置環境**: 安裝 Ruby 3.2 和 Node.js 18
3. **安裝依賴**: 安裝 Jekyll 和相關依賴
4. **構建網站**: 使用 Jekyll 構建靜態網站
5. **部署**: 自動部署到 GitHub Pages

## 🌐 部署

### GitHub Pages

網站會自動部署到 GitHub Pages，URL 格式為：

```
https://your-username.github.io/cissp-mindset
```

### 手動部署

```bash
npm run deploy
```

## 📖 內容管理

### 添加新內容

1. **CCSP 內容**: 將文件放在 `_ccsp/` 目錄
2. **Domain 3 內容**: 將文件放在 `_domain3/` 目錄
3. **Domain 5 內容**: 將文件放在 `_domain5/` 目錄
4. **部落格文章**: 將文件放在 `_posts/` 目錄

### 文件格式

所有內容文件應使用 Markdown 格式，並包含適當的 front matter：

```yaml
---
layout: page
title: "頁面標題"
description: "頁面描述"
---
```

## 🎨 主題特色

- **響應式設計**: 支援桌面、平板和手機設備
- **Mermaid 圖表**: 支援複雜的流程圖和思維導圖
- **語法高亮**: 支援程式碼語法高亮
- **搜尋功能**: 內建搜尋功能
- **導航**: 清晰的側邊欄導航

## 🔍 搜尋引擎優化

- 自動生成 sitemap.xml
- 結構化數據標記
- 優化的 meta 標籤
- 友好的 URL 結構

## 🤝 貢獻

歡迎提交 Pull Request 來改善這個專案！

### 貢獻指南

1. Fork 這個專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權條款 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 📞 聯絡我們

- 專案連結: [https://github.com/your-username/cissp-mindset](https://github.com/your-username/cissp-mindset)
- 問題回報: [https://github.com/your-username/cissp-mindset/issues](https://github.com/your-username/cissp-mindset/issues)

## 🙏 致謝

感謝所有為 CCSP 認證準備學習資源的貢獻者！
