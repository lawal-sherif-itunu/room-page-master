const nav = document.querySelector(".top-left");
const navLogo = document.querySelector(".nav-default");
const navBar = document.querySelector(".nav-bar");
const close = document.querySelector(".close-div");

nav.addEventListener("click", () => {
  navBar.style.display = "block"; // Show the navigation bar
  navLogo.style.display = "none"; // Hide the navigation logo
});

close.addEventListener("click", () => {
    navBar.style.display = "none"; // Show the navigation bar
    navLogo.style.display = "block"; // Hide the navigation logo
  });

const nextDom = document.querySelector(".next-desktop");
const prevDom = document.querySelector(".previous-desktop");
const secOne = document.querySelector(".section-one");
