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

  // Prefer IntersectionObserver for efficient reveals
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -100px 0px' });
    sections.forEach(section => observer.observe(section));
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
    if (e.target.matches('a[href^="#"]')) {
      navbar.classList.remove('show');
      menuButton.classList.remove('fa-close');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  toggleHeaderActive();
  highlightActiveNav();

  if (toTopButton) {
    toTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1500;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    });
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      statsObserver.observe(statsSection);
    }
  }
});
