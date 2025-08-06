// 主要 JavaScript 功能
document.addEventListener('DOMContentLoaded', function() {
  // 初始化所有功能
  initNavigation();
  initScrollEffects();
  initSearchFunctionality();
  initProgressBars();
  initAnimations();
  initMobileMenu();
});

// 導航功能
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // 滾動時改變導航欄樣式
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 平滑滾動到錨點
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// 滾動效果
function initScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // 觀察所有需要動畫的元素
  const animatedElements = document.querySelectorAll('.card, .feature-card, .stat-card, .update-item');
  animatedElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
}

// 搜尋功能
function initSearchFunctionality() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const links = Array.from(card.querySelectorAll('a')).map(a => a.textContent.toLowerCase());
      
      const matches = title.includes(query) || 
                     description.includes(query) || 
                     links.some(link => link.includes(query));
      
      if (matches || query === '') {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.opacity = '0.3';
        card.style.transform = 'translateY(10px)';
      }
    });
  });

  // 搜尋框焦點效果
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.02)';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
  });
}

// 進度條動畫
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.getAttribute('data-progress');
        entry.target.style.width = progress + '%';
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
}

// 動畫效果
function initAnimations() {
  // 數字計數動畫
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(number => {
    numberObserver.observe(number);
  });

  // 卡片懸停效果
  const cards = document.querySelectorAll('.card, .feature-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// 數字動畫函數
function animateNumber(element) {
  const finalNumber = parseInt(element.textContent.replace(/\D/g, ''));
  const suffix = element.textContent.replace(/\d/g, '');
  let currentNumber = 0;
  const increment = finalNumber / 50;
  
  const timer = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= finalNumber) {
      currentNumber = finalNumber;
      clearInterval(timer);
    }
    element.textContent = Math.floor(currentNumber) + suffix;
  }, 30);
}

// 行動裝置選單
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // 點擊選單項目時關閉選單
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// 工具函數
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 滾動到頂部按鈕
function createScrollToTopButton() {
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = 'scroll-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
  `;

  document.body.appendChild(button);

  // 滾動時顯示/隱藏按鈕
  window.addEventListener('scroll', debounce(() => {
    if (window.scrollY > 500) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  }, 100));

  // 點擊滾動到頂部
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 載入完成後創建滾動到頂部按鈕
window.addEventListener('load', createScrollToTopButton);

// 主題切換功能（可選）
function initThemeToggle() {
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  themeToggle.className = 'theme-toggle';
  themeToggle.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--border-light);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-md);
  `;

  document.body.appendChild(themeToggle);

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }
  });
}

// 可選：初始化主題切換
// initThemeToggle();
