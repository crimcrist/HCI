// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // Toggle the active class to show or hide the menu
  });
});