// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animated Typed Text
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Palorant!";
  let index = 0;
  const animatedText = document.getElementById('animated-text');

  function typeText() {
    if (index < text.length) {
      animatedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 100);
    }
  }

  typeText();
});

// Burger Menu toggle (masih tetap sama)
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
  });
});
