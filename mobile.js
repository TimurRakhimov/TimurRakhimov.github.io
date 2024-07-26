document.addEventListener("DOMContentLoaded", function () {
    // Menu button on click event
    const mobileNavButton = document.querySelector(".mobile-nav-button");
    const menuLines = mobileNavButton.querySelectorAll(".mobile-nav-button__line");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    mobileNavButton.addEventListener("click", function () {
      // Toggle classes to transform the burger menu into a cross
      menuLines[0].classList.toggle("mobile-nav-button__line--1");
      menuLines[1].classList.toggle("mobile-nav-button__line--2");
      menuLines[2].classList.toggle("mobile-nav-button__line--3");
  
      // Toggle class that slides the menu into view
      mobileMenu.classList.toggle("mobile-menu--open");
      
      return false;
    });
  });
  