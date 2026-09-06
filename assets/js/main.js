/**
* Template Name: DevFolio
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Portfolio identity + navbar personalization
   */
  const siteName = document.querySelector('#header .sitename');
  if (siteName) {
    const compactSiteName = document.createElement('h3');
    compactSiteName.className = 'sitename mb-0';
    compactSiteName.textContent = 'DBS.';
    compactSiteName.style.color = '#ffc107';
    siteName.replaceWith(compactSiteName);
  }

  // Keep the original dropdown markup available for future use, but hide it for now.
  const navbarDropdown = document.querySelector('#navmenu > ul > li.dropdown');
  if (navbarDropdown) {
    navbarDropdown.classList.add('d-none');
    navbarDropdown.setAttribute('aria-hidden', 'true');
  }

  // Detail pages should navigate back to the matching section on the homepage.
  if (!document.body.classList.contains('index-page')) {
    document.querySelectorAll('#navmenu > ul > li > a[href^="#"]').forEach(link => {
      link.setAttribute('href', `index.html${link.getAttribute('href')}`);
    });
  }

  /**
   * Home hero personalization
   */
  if (document.body.classList.contains('index-page')) {
    document.title = 'Danish Bin Sofwan | Data Engineering Leader & Data/AI Architect';

    const hero = document.querySelector('#hero');
    const heroTitle = hero?.querySelector('h2');
    const heroTyped = hero?.querySelector('.typed');
    const heroContainer = hero?.querySelector('.container');

    if (heroTitle) {
      heroTitle.textContent = 'Danish Bin Sofwan';
    }

    if (heroTyped) {
      heroTyped.setAttribute(
        'data-typed-items',
        'Data Engineering Leader, Systems Design Architect, Engineering Excellence, Lead Data & AI Architect'
      );
    }

    if (heroContainer && !heroContainer.querySelector('.hero-meta')) {
      const heroMeta = document.createElement('div');
      heroMeta.className = 'hero-meta d-flex flex-wrap justify-content-center align-items-center';
      heroMeta.style.gap = '12px 28px';
      heroMeta.style.marginTop = '18px';
      heroMeta.style.fontSize = '15px';
      heroMeta.style.fontWeight = '400';
      heroMeta.style.color = 'rgba(255, 255, 255, 0.82)';
      heroMeta.innerHTML = `
        <span><i class="bi bi-briefcase me-2"></i>10 Years Experience</span>
        <span><i class="bi bi-geo-alt me-2"></i>Austria</span>
      `;
      heroContainer.appendChild(heroMeta);
    }

    if (hero && !hero.querySelector('.hero-photo-credit')) {
      const photoCredit = document.createElement('small');
      photoCredit.className = 'hero-photo-credit';
      photoCredit.textContent = 'Photo by me. I occasionally architect light instead of data.';
      photoCredit.style.position = 'absolute';
      photoCredit.style.right = '22px';
      photoCredit.style.bottom = '16px';
      photoCredit.style.zIndex = '3';
      photoCredit.style.maxWidth = 'min(420px, calc(100% - 44px))';
      photoCredit.style.fontSize = '12px';
      photoCredit.style.fontStyle = 'italic';
      photoCredit.style.fontWeight = '300';
      photoCredit.style.lineHeight = '1.4';
      photoCredit.style.textAlign = 'right';
      photoCredit.style.color = 'rgba(255, 255, 255, 0.68)';
      photoCredit.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.45)';
      hero.appendChild(photoCredit);
    }
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2200
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
