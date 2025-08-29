document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');

  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuButton.classList.toggle('fa-close');
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

  window.addEventListener('scroll', () => {
    navbar.classList.remove('show');
    menuButton.classList.remove('fa-close');
    toggleHeaderActive();
    fadeInOnScroll();
  });

  toggleHeaderActive();
  fadeInOnScroll();
});