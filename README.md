# CISSP Mindset

專業的 CISSP 和 CCSP 認證學習資源平台，提供完整的學習指南、模擬試題和實戰案例分析。

## 🌟 網站特色

### 現代化設計

- **響應式佈局**：完美支援桌面、平板和手機裝置
- **現代化 UI**：使用漸層色彩和卡片式設計
- **流暢動畫**：頁面載入和互動動畫效果
- **無障礙設計**：符合 WCAG 標準的無障礙性

### 完整學習資源

- **CCSP 雲端安全**：完整的 CCSP 認證學習指南
- **Domain 3 安全架構**：深入探討安全架構設計
- **Domain 5 安全運營**：實用的安全運營管理策略
- **模擬試題**：歷年試題分析和練習

### 互動功能

- **即時搜尋**：快速找到需要的學習資源
- **進度追蹤**：視覺化學習進度顯示
- **社群功能**：與其他學習者交流經驗
- **訂閱更新**：獲取最新學習資源和考試資訊

## 🚀 快速開始

### 本地開發

1. **克隆儲存庫**

   ```bash
   git clone https://github.com/twister5-com-tw-dev-dep/CISSP-Mindset.git
   cd CISSP-Mindset
   ```

2. **安裝依賴**

   ```bash
   bundle install
   ```

3. **啟動本地伺服器**

   ```bash
   bundle exec jekyll serve
   ```

4. **訪問網站**
   打開瀏覽器訪問 `http://localhost:4000`

### 部署

網站使用 GitHub Pages 自動部署：

1. 推送程式碼到 `main` 分支
2. GitHub Actions 自動構建和部署
3. 網站將在 `https://cissp.dennisleehappy.org` 上線

## 📁 專案結構

```
CISSP-Mindset/
├── _layouts/          # Jekyll 佈局檔案
├── _pages/            # 靜態頁面
├── _posts/            # 部落格文章
├── _ccsp/             # CCSP 學習資源
├── _domain3/          # Domain 3 學習資源
├── _domain5/          # Domain 5 學習資源
├── assets/            # 靜態資源
│   ├── css/          # 樣式表
│   ├── js/           # JavaScript 檔案
│   └── images/       # 圖片資源
├── .github/           # GitHub Actions 工作流程
└── _config.yml       # Jekyll 配置檔案
```

## 🎨 設計系統

### 色彩方案

- **主色調**：`#667eea` (藍紫色)
- **輔助色**：`#764ba2` (深紫色)
- **強調色**：`#ffd700` (金色)
- **背景色**：`#f8f9fa` (淺灰色)

### 字體

- **主要字體**：Inter (Google Fonts)
- **備用字體**：Segoe UI, Tahoma, Geneva, Verdana, sans-serif

### 組件

- **卡片**：圓角設計，陰影效果
- **按鈕**：漸層背景，懸停動畫
- **導航**：固定頂部，響應式選單
- **進度條**：動畫效果，視覺化進度

## 🔧 技術棧

- **靜態網站生成器**：Jekyll 4.2.2
- **CSS 框架**：自定義 CSS Grid 和 Flexbox
- **JavaScript**：原生 ES6+ JavaScript
- **圖示**：Font Awesome 6.0
- **字體**：Google Fonts (Inter)
- **部署**：GitHub Pages + GitHub Actions

## 📱 響應式設計

網站採用移動優先的響應式設計：

- **桌面** (1200px+)：完整功能，多欄佈局
- **平板** (768px - 1199px)：適配中等螢幕
- **手機** (< 768px)：單欄佈局，觸控優化

## 🚀 效能優化

- **圖片優化**：自動壓縮和 WebP 格式支援
- **CSS 優化**：關鍵 CSS 內聯，非關鍵 CSS 異步載入
- **JavaScript 優化**：代碼分割，延遲載入
- **快取策略**：瀏覽器快取和 CDN 快取

## 🔍 SEO 優化

- **結構化資料**：JSON-LD 標記
- **Meta 標籤**：完整的 Open Graph 和 Twitter Cards
- **Sitemap**：自動生成 XML sitemap
- **RSS Feed**：自動生成 RSS 訂閱源

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！

### 如何貢獻

1. **Fork 專案**
2. **創建功能分支** (`git checkout -b feature/AmazingFeature`)
3. **提交變更** (`git commit -m 'Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **開啟 Pull Request**

### 貢獻類型

- 🐛 **Bug 修復**：修復現有問題
- ✨ **新功能**：添加新功能或改進
- 📝 **文檔**：改善文檔和註釋
- 🎨 **設計**：改善用戶界面和體驗
- ⚡ **效能**：提升網站效能

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡我們

- **網站**：https://cissp.dennisleehappy.org
- **Email**：contact@cissp.dennisleehappy.org
- **GitHub**：https://github.com/twister5-com-tw-dev-dep
- **Twitter**：@cisspmindset

## 🙏 致謝

感謝所有為這個專案做出貢獻的開發者和學習者！

---

**注意**：本網站提供的學習資源僅供教育目的使用。我們不保證通過使用我們的資源就能通過認證考試。建議您同時參考官方考試指南和最新資料。
# 觸發重新部署 Wed Aug  6 12:19:53 CST 2025
