document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.header .navbar a[href^="#"]');
  const toTopButton = document.querySelector('.to-top');

  menuButton.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('show');
    menuButton.classList.toggle('fa-close', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  function toggleHeaderActive() {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  function fadeInOnScroll() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('fade-in');
      }
    });
  }

  function highlightActiveNav() {
    let currentId = 'home';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = section.id || currentId;
      }
    });
    navLinks.forEach(link => {
      const hrefId = link.getAttribute('href').replace('#', '');
      if (hrefId === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    navbar.classList.remove('show');
    menuButton.classList.remove('fa-close');
    menuButton.setAttribute('aria-expanded', 'false');
    toggleHeaderActive();
    fadeInOnScroll();
    highlightActiveNav();
    if (toTopButton) {
      if (window.scrollY > 400) {
        toTopButton.classList.add('show');
      } else {
        toTopButton.classList.remove('show');
      }
    }
  });

  // Close menu when a nav link is clicked (mobile UX)
  navbar.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('a[href^="#"]')) {
      navbar.classList.remove('show');
      menuButton.classList.remove('fa-close');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  toggleHeaderActive();
  fadeInOnScroll();
  highlightActiveNav();

  if (toTopButton) {
    toTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});