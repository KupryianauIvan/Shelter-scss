const HAMBURGER_TOGGLE = document.querySelector('.hamburger');
const BURGER_MENU = document.querySelector('.burger-menu');
const OVERLAY = document.querySelector('.overlay');
const NAV_LINKS = document.querySelectorAll('.burger-menu__link');

HAMBURGER_TOGGLE.addEventListener('click', () => {
  BURGER_MENU.classList.add('burger-menu_active');
  OVERLAY.classList.add('overlay_active');
  HAMBURGER_TOGGLE.classList.add('hamburger_active');
})