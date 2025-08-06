---
layout: page
title: 部落格
description: CISSP 和 CCSP 認證學習心得、考試技巧和最新資訊
permalink: /blog/
---

# 部落格

歡迎來到 CISSP Mindset 部落格！這裡我們分享最新的資訊安全趨勢、考試技巧、學習心得和實戰經驗。

## 最新文章

{% for post in site.posts limit:10 %}

<div class="blog-post-preview">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <div class="post-meta">
        <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
        {% if post.author %}
        <span class="post-author">作者：{{ post.author }}</span>
        {% endif %}
        {% if post.categories %}
        <span class="post-categories">
            分類：{% for category in post.categories %}{{ category }}{% unless forloop.last %}, {% endunless %}{% endfor %}
        </span>
        {% endif %}
    </div>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt }}</p>
    {% endif %}
    <a href="{{ post.url }}" class="read-more">閱讀更多 →</a>
</div>
{% endfor %}

## 熱門分類

<div class="categories-grid">
    <div class="category-card">
        <h3><i class="fas fa-cloud"></i> CCSP</h3>
        <p>雲端安全認證相關文章</p>
        <a href="/blog/category/ccsp/" class="btn">查看文章</a>
    </div>
    
    <div class="category-card">
        <h3><i class="fas fa-shield-alt"></i> CISSP</h3>
        <p>資訊安全認證相關文章</p>
        <a href="/blog/category/cissp/" class="btn">查看文章</a>
    </div>
    
    <div class="category-card">
        <h3><i class="fas fa-graduation-cap"></i> 考試技巧</h3>
        <p>備考策略和考試技巧分享</p>
        <a href="/blog/category/exam-tips/" class="btn">查看文章</a>
    </div>
    
    <div class="category-card">
        <h3><i class="fas fa-tools"></i> 實戰案例</h3>
        <p>真實世界的安全案例分析</p>
        <a href="/blog/category/case-studies/" class="btn">查看文章</a>
    </div>
</div>

## 訂閱更新

<div class="newsletter-signup">
    <h3>訂閱我們的更新</h3>
    <p>獲取最新的學習資源、考試技巧和行業動態</p>
    <form class="newsletter-form">
        <input type="email" placeholder="輸入您的 Email 地址" required>
        <button type="submit" class="btn">訂閱</button>
    </form>
</div>

<style>
/* 部落格文章預覽樣式 */
.blog-post-preview {
    background: var(--card-bg);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
}

.blog-post-preview h3 {
    margin-bottom: 1rem;
}

.blog-post-preview h3 a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s;
}

.blog-post-preview h3 a:hover {
    color: var(--secondary-color);
}

.post-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: #666;
    flex-wrap: wrap;
}

.post-excerpt {
    margin-bottom: 1rem;
    line-height: 1.6;
}

.read-more {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.read-more:hover {
    color: var(--secondary-color);
}

/* 分類網格樣式 */
.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.category-card {
    background: var(--card-bg);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    transition: transform 0.3s;
}

.category-card:hover {
    transform: translateY(-5px);
}

.category-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.category-card i {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.category-card p {
    margin-bottom: 1.5rem;
    color: #666;
}

/* 訂閱表單樣式 */
.newsletter-signup {
    background: var(--gradient);
    color: var(--light-text);
    padding: 3rem;
    border-radius: 15px;
    text-align: center;
    margin: 3rem 0;
}

.newsletter-signup h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.newsletter-signup p {
    margin-bottom: 2rem;
    opacity: 0.9;
}

.newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.newsletter-form input[type="email"] {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    min-width: 200px;
}

.newsletter-form .btn {
    background: var(--light-text);
    color: var(--primary-color);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: transform 0.3s;
}

.newsletter-form .btn:hover {
    transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 768px) {
    .post-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
    
    .newsletter-form input[type="email"] {
        min-width: auto;
    }
}
</style>
