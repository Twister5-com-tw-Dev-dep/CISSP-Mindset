# 部署指南

## 🚀 GitHub Pages 自動部署

### 1. 啟用 GitHub Pages

1. 前往您的 GitHub 倉庫
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 部分選擇 "GitHub Actions"

### 2. 推送代碼觸發部署

```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "Initial setup for GitHub Pages"

# 推送到 GitHub
git push origin main
```

### 3. 檢查部署狀態

1. 前往 GitHub 倉庫的 "Actions" 標籤
2. 查看 "Deploy to GitHub Pages" 工作流程的執行狀態
3. 部署成功後，網站將在以下 URL 可用：
   ```
   https://your-username.github.io/cissp-mindset
   ```

## 🔧 本地開發

### 安裝依賴

```bash
# 安裝 Ruby 依賴
bundle install

# 安裝 Node.js 依賴
npm install
```

### 啟動開發伺服器

```bash
# 啟動 Jekyll 開發伺服器
bundle exec jekyll serve

# 或者使用 npm 腳本
npm run serve
```

### 訪問本地網站

打開瀏覽器訪問 `http://localhost:4000`

## 📝 內容更新

### 添加新內容

1. **CCSP 內容**: 將 Markdown 文件放在 `_ccsp/` 目錄
2. **Domain 3 內容**: 將 Markdown 文件放在 `_domain3/` 目錄
3. **Domain 5 內容**: 將 Markdown 文件放在 `_domain5/` 目錄

### 文件格式

每個 Markdown 文件應包含適當的 front matter：

```yaml
---
layout: page
title: "頁面標題"
description: "頁面描述"
---
```

### 推送更新

```bash
git add .
git commit -m "Add new content"
git push origin main
```

## 🐛 故障排除

### 常見問題

1. **構建失敗**

   - 檢查 `_config.yml` 語法是否正確
   - 確認所有 Markdown 文件的 front matter 格式正確
   - 查看 GitHub Actions 日誌獲取詳細錯誤信息

2. **Mermaid 圖表不顯示**

   - 確認圖表語法正確
   - 檢查瀏覽器控制台是否有 JavaScript 錯誤

3. **樣式問題**
   - 清除瀏覽器快取
   - 確認 CSS 文件正確載入

### 本地測試

```bash
# 構建生產版本
bundle exec jekyll build

# 檢查構建輸出
ls _site/
```

## 📊 監控

### 網站分析

- 使用 Google Analytics 追蹤訪問量
- 監控 GitHub Pages 的可用性
- 定期檢查網站載入速度

### 性能優化

- 壓縮圖片
- 最小化 CSS 和 JavaScript
- 使用 CDN 加速靜態資源載入

## 🔒 安全

### 最佳實踐

- 定期更新依賴包
- 使用 HTTPS
- 實施內容安全策略 (CSP)
- 定期備份內容

### 安全檢查

```bash
# 檢查依賴漏洞
bundle audit

# 更新依賴
bundle update
```

## 📞 支援

如果遇到問題，請：

1. 檢查 GitHub Actions 日誌
2. 查看 Jekyll 官方文檔
3. 在 GitHub Issues 中報告問題
