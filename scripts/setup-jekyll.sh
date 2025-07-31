#!/bin/bash

# 創建 Jekyll 目錄結構
echo "創建 Jekyll 目錄結構..."

# 創建必要的目錄
mkdir -p _ccsp
mkdir -p _domain3
mkdir -p _domain5
mkdir -p _posts
mkdir -p _pages
mkdir -p assets/css
mkdir -p assets/js
mkdir -p assets/images

# 移動 CCSP 文件
echo "移動 CCSP 文件..."
if [ -f "CCSP/Domain4-FAQ.MD" ]; then
    cp "CCSP/Domain4-FAQ.MD" "_ccsp/domain4-faq.md"
fi

if [ -f "CCSP/Domain5-FAQ.MD" ]; then
    cp "CCSP/Domain5-FAQ.MD" "_ccsp/domain5-faq.md"
fi

# 移動 Domain3 文件
echo "移動 Domain3 文件..."
for file in Domain3/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        # 移除文件名中的空格和特殊字符
        newname=$(echo "$filename" | sed 's/[[:space:]]//g' | sed 's/[^a-zA-Z0-9.-]//g')
        cp "$file" "_domain3/$newname"
    fi
done

# 移動 Domain5 文件
echo "移動 Domain5 文件..."
if [ -f "Domain5/FAQ.md" ]; then
    cp "Domain5/FAQ.md" "_domain5/faq.md"
fi

# 創建集合索引頁面
echo "創建集合索引頁面..."

# CCSP 索引頁面
cat > "_ccsp/index.md" << 'EOF'
---
layout: page
title: "CCSP 雲端安全"
description: "CCSP 雲端安全認證學習資源"
permalink: /ccsp/
---

# CCSP 雲端安全

歡迎來到 CCSP 雲端安全學習資源區。這裡包含了 CCSP 認證考試的核心內容和複習指南。

## 可用內容

{% for page in site.ccsp %}
- [{{ page.title | default: page.name }}]({{ page.url }})
{% endfor %}
EOF

# Domain3 索引頁面
cat > "_domain3/index.md" << 'EOF'
---
layout: page
title: "Domain 3 - 安全架構"
description: "雲端平台與基礎設施安全設計與實施"
permalink: /domain3/
---

# Domain 3 - 安全架構

雲端平台與基礎設施安全設計與實施的學習資源。

## 可用內容

{% for page in site.domain3 %}
- [{{ page.title | default: page.name }}]({{ page.url }})
{% endfor %}
EOF

# Domain5 索引頁面
cat > "_domain5/index.md" << 'EOF'
---
layout: page
title: "Domain 5 - 營運管理"
description: "雲端營運、IT 服務管理與調查"
permalink: /domain5/
---

# Domain 5 - 營運管理

雲端營運、IT 服務管理與調查的學習資源。

## 可用內容

{% for page in site.domain5 %}
- [{{ page.title | default: page.name }}]({{ page.url }})
{% endfor %}
EOF

echo "Jekyll 目錄結構設置完成！"
echo "請運行以下命令來測試網站："
echo "bundle install"
echo "bundle exec jekyll serve" 