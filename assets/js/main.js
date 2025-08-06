// 主要 JavaScript 檔案
document.addEventListener("DOMContentLoaded", function () {
  // 初始化所有功能
  initAnimations();
  initProgressBars();
  initSearch();
  initThemeToggle();
  initMobileMenu();
  initNavbarScroll();
  initCounters();
  initSmoothScroll();
});

// 導航欄滾動效果
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// 動畫效果
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");

        // 如果是統計卡片，觸發計數動畫
        if (entry.target.classList.contains("stat-card")) {
          const numberElement = entry.target.querySelector(".stat-number");
          if (numberElement) {
            animateCounter(numberElement);
          }
        }
      }
    });
  }, observerOptions);

  // 觀察所有卡片和區塊
  document
    .querySelectorAll(".card, .section, .hero, .feature-card, .stat-card")
    .forEach((el) => {
      observer.observe(el);
    });
}

// 計數器動畫
function animateCounter(element) {
  const text = element.textContent;
  const number = parseInt(text.replace(/[^0-9]/g, ""));
  const suffix = text.replace(/[0-9]/g, "");

  let current = 0;
  const increment = number / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 30);
}

// 初始化計數器
function initCounters() {
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card) => {
    const numberElement = card.querySelector(".stat-number");
    if (numberElement) {
      // 設置初始值為 0
      const text = numberElement.textContent;
      const suffix = text.replace(/[0-9]/g, "");
      numberElement.textContent = "0" + suffix;
    }
  });
}

// 進度條動畫
function initProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const fill = bar.querySelector(".progress-fill");
    if (fill) {
      const progress = fill.getAttribute("data-progress") || 0;
      setTimeout(() => {
        fill.style.width = progress + "%";
      }, 500);
    }
  });
}

// 搜尋功能
function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = "block";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.opacity = "0.3";
        card.style.transform = "scale(0.95)";
      }
    });
  });

  // 搜尋框焦點效果
  searchInput.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
  });

  searchInput.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
}

// 主題切換
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // 檢查本地儲存的主題設定
  const currentTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", function () {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// 行動裝置選單
function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // 點擊外部關閉選單
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  // 點擊選單項目後關閉選單
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

// 平滑滾動
function initSmoothScroll() {
  // 為所有內部連結添加平滑滾動
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// 返回頂部按鈕
function initBackToTop() {
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className = "back-to-top";
  backToTopBtn.setAttribute("aria-label", "返回頂部");
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 18px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;

  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 懸停效果
  backToTopBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
    this.style.boxShadow = "var(--shadow-xl)";
  });

  backToTopBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "var(--shadow-lg)";
  });
}

// 載入動畫
function showLoading() {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `
    <div class="spinner"></div>
    <p>載入中...</p>
  `;
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(5px);
  `;

  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.remove();
    }, 300);
  }, 1000);
}

// 工具提示
function initTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function (e) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = this.getAttribute("data-tooltip");
      tooltip.style.cssText = `
        position: absolute;
        background: var(--text-primary);
        color: white;
        padding: 8px 12px;
        border-radius: var(--radius-md);
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        box-shadow: var(--shadow-lg);
        white-space: nowrap;
      `;

      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();
      tooltip.style.left =
        rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
      tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";
    });

    element.addEventListener("mouseleave", function () {
      const tooltip = document.querySelector(".tooltip");
      if (tooltip) tooltip.remove();
    });
  });
}

// 卡片懸停效果
function initCardHoverEffects() {
  const cards = document.querySelectorAll(".card, .feature-card, .stat-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// 初始化所有功能
initBackToTop();
initTooltips();
initCardHoverEffects();

// 頁面載入完成後的額外效果
window.addEventListener("load", function () {
  // 添加載入完成的動畫
  document.body.classList.add("loaded");

  // 觸發統計數據動畫
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card, index) => {
    setTimeout(() => {
      const numberElement = card.querySelector(".stat-number");
      if (numberElement) {
        animateCounter(numberElement);
      }
    }, index * 200);
  });
});
