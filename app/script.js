const hamburgerBtn = document.getElementById("hamburger-btn");
const closeMenu = document.getElementById("close-menu");
const menuSection = document.getElementById("menu-section");

hamburgerBtn.addEventListener('click', () => {
  menuSection.classList.remove("hidden");
})

closeMenu.addEventListener('click', () => {
  menuSection.classList.add("hidden");
})