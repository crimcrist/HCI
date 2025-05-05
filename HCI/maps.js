// Function to show map2 and hide map1
function showMap2() {
    document.getElementById("map1").style.display = "none"; // Hide the first map section
    document.getElementById("map2").style.display = "block"; // Show the second map section
}

// Function to show map1 and hide map2
function showMap1() {
    document.getElementById("map1").style.display = "block"; // Show the first map section
    document.getElementById("map2").style.display = "none"; // Hide the second map section
}

// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // Toggle show/hide nav menu
      burgerMenu.classList.toggle('toggle'); // Tambah animasi burger (optional)
    });
  });
  