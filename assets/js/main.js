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

    if (hero && !hero.querySelector('.hero-title-stack')) {
      const titleStack = document.createElement('div');
      titleStack.className = 'hero-title-stack';
      titleStack.setAttribute('aria-label', 'Completed professional titles');
      hero.appendChild(titleStack);
    }

    if (hero && !document.querySelector('#hero-stack-styles')) {
      const heroStackStyles = document.createElement('style');
      heroStackStyles.id = 'hero-stack-styles';
      heroStackStyles.textContent = `
        .hero-title-stack {
          position: absolute;
          right: 4vw;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
          width: min(300px, 25vw);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 9px;
          text-align: right;
          pointer-events: none;
        }

        .hero-title-stack .hero-title-stack-item {
          margin: 0;
          font-family: var(--heading-font);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.68);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
          white-space: pre;
        }

        .hero-title-stack .hero-title-stack-char {
          opacity: 0;
          transition: opacity 0.12s ease;
        }

        .hero-title-stack .hero-title-stack-char.is-visible {
          opacity: 1;
        }

        .hero-title-stack.is-clearing .hero-title-stack-item {
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        #hero .typed-cursor.hero-custom-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 300;
          animation: heroCursorBlink 0.75s step-end infinite;
        }

        @keyframes heroCursorBlink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @media (max-width: 991px) {
          .hero-title-stack {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            width: 100%;
            align-items: center;
            text-align: center;
            margin-top: 24px;
            min-height: 84px;
          }
        }
      `;
      document.head.appendChild(heroStackStyles);
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
   * Type each hero title, then transfer its characters into the right-side stack while deleting.
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    const typedStrings = selectTyped
      .getAttribute('data-typed-items')
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
    const titleStack = document.querySelector('.hero-title-stack');

    if (document.body.classList.contains('index-page') && titleStack && typedStrings.length) {
      const typeSpeed = 100;
      const backSpeed = 50;
      const holdTime = 2200;
      const betweenTitles = 250;
      const completeStackHold = 2200;
      const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

      selectTyped.textContent = '';

      const cursor = document.createElement('span');
      cursor.className = 'typed-cursor hero-custom-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      cursor.textContent = '|';
      selectTyped.insertAdjacentElement('afterend', cursor);

      function createStackItem(title) {
        const stackItem = document.createElement('div');
        stackItem.className = 'hero-title-stack-item';

        Array.from(title).forEach(character => {
          const characterSpan = document.createElement('span');
          characterSpan.className = 'hero-title-stack-char';
          characterSpan.textContent = character;
          stackItem.appendChild(characterSpan);
        });

        titleStack.appendChild(stackItem);
        return Array.from(stackItem.children);
      }

      async function typeTitle(title) {
        selectTyped.textContent = '';
        for (let index = 1; index <= title.length; index += 1) {
          selectTyped.textContent = title.slice(0, index);
          await sleep(typeSpeed);
        }
      }

      async function transferTitleToStack(title) {
        const stackCharacters = createStackItem(title);

        for (let index = title.length - 1; index >= 0; index -= 1) {
          selectTyped.textContent = title.slice(0, index);
          stackCharacters[index].classList.add('is-visible');
          await sleep(backSpeed);
        }
      }

      async function clearCompletedStack() {
        titleStack.classList.add('is-clearing');
        await sleep(320);
        titleStack.replaceChildren();
        titleStack.classList.remove('is-clearing');
      }

      async function runHeroTitleCycle() {
        while (true) {
          for (const title of typedStrings) {
            await typeTitle(title);
            await sleep(holdTime);
            await transferTitleToStack(title);
            await sleep(betweenTitles);
          }

          await sleep(completeStackHold);
          await clearCompletedStack();
        }
      }

      runHeroTitleCycle();
    } else {
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2200
      });
    }
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
