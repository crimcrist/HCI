document.addEventListener("DOMContentLoaded", function () {
    // Burger menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burgerMenu.classList.toggle('toggle');
    });
  
    // Report form submission
    const form = document.getElementById("reportForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const matchDate = document.getElementById("match-date").value;
      const reason = document.getElementById("reason").value;
      const details = document.getElementById("details").value.trim();
  
      if (!username || !matchDate || !reason || !details) {
        alert("Please fill out all required fields.");
        return;
      }
  
      // Simulasi kirim data
      const reportData = {
        username,
        matchDate,
        reason,
        details
      };
  
      console.log("Report Sent:", reportData);
  
      form.reset();
      successMessage.style.display = "block";
  
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 4000);
    });
  });
  