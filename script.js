// ========== HEADER SCROLL EFFECT ==========
(function () {
  var header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ========== MOBILE MENU ==========
(function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var isOpen = false;

  function open() {
    menu.classList.add('open');
    toggle.setAttribute('aria-label', 'Close menu');
    toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }

  function close() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    document.body.style.overflow = '';
    isOpen = false;
  }

  toggle.addEventListener('click', function () {
    if (isOpen) { close(); } else { open(); }
  });

  // Close menu when a link is clicked
  var links = menu.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', close);
  });
})();

// ========== FLOATING BUTTONS ==========
(function () {
  var container = document.getElementById('floating-buttons');
  var toggle = document.getElementById('floating-toggle');
  var panel = document.getElementById('floating-panel');
  var waIcon = document.getElementById('float-wa-icon');
  var closeIcon = document.getElementById('float-close-icon');
  var expanded = false;

  function onScroll() {
    if (window.scrollY > 300) {
      container.classList.add('show');
    } else {
      container.classList.remove('show');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', function () {
    expanded = !expanded;
    if (expanded) {
      panel.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-label', 'Close contact buttons');
      waIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      panel.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-label', 'Open contact buttons');
      waIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
})();
