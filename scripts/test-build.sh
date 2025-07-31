#!/bin/bash

echo "🧪 測試 Jekyll 網站結構..."

# 檢查必要的目錄和文件
echo "📁 檢查目錄結構..."

required_dirs=("_ccsp" "_domain3" "_domain5" "_layouts" "assets")
for dir in "${required_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir 目錄存在"
    else
        echo "❌ $dir 目錄不存在"
        exit 1
    fi
done

# 檢查必要的文件
echo "📄 檢查必要文件..."

required_files=("_config.yml" "Gemfile" "index.html" "_layouts/default.html")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file 文件存在"
    else
        echo "❌ $file 文件不存在"
        exit 1
    fi
done

# 檢查內容文件
echo "📚 檢查內容文件..."

ccsp_files=$(ls _ccsp/*.md 2>/dev/null | wc -l)
domain3_files=$(ls _domain3/*.md 2>/dev/null | wc -l)
domain5_files=$(ls _domain5/*.md 2>/dev/null | wc -l)

echo "📊 內容文件統計："
echo "   CCSP: $ccsp_files 個文件"
echo "   Domain3: $domain3_files 個文件"
echo "   Domain5: $domain5_files 個文件"

# 檢查 Mermaid 圖表
echo "📊 檢查 Mermaid 圖表..."

mermaid_count=$(grep -r "```mermaid" . --include="*.md" | wc -l)
echo "   發現 $mermaid_count 個 Mermaid 圖表"

# 檢查 GitHub Actions
echo "🔧 檢查 CI/CD 配置..."

if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ GitHub Actions 工作流程存在"
else
    echo "❌ GitHub Actions 工作流程不存在"
fi

echo ""
echo "🎉 結構檢查完成！"
echo ""
echo "📋 下一步："
echo "1. 推送代碼到 GitHub: git push origin main"
echo "2. 在 GitHub 倉庫設置中啟用 GitHub Pages"
echo "3. 檢查 Actions 標籤中的部署狀態"
echo ""
echo "🌐 網站將在以下 URL 可用："
echo "   https://your-username.github.io/cissp-mindset" 