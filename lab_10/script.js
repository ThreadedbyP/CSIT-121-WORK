document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const overlayNav = document.querySelector('.overlay-nav');
  
    navToggle.addEventListener('click', () => {
      overlayNav.classList.toggle('active');
    });
  });
  