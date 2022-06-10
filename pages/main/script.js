const HAMBURGER_TOGGLE = document.querySelector('.hamburger');
const BURGER_MENU = document.querySelector('.burger-menu');
const OVERLAY = document.querySelector('.overlay');
const NAV_LINKS = document.querySelectorAll('.burger-menu__link');

HAMBURGER_TOGGLE.addEventListener('click', () => {
  BURGER_MENU.classList.toggle('burger-menu_active');
  OVERLAY.classList.toggle('overlay_hidden');
  HAMBURGER_TOGGLE.classList.toggle('hamburger_active');
  document.body.classList.toggle('overflow');
});

OVERLAY.addEventListener('click', () => {
  OVERLAY.classList.add('overlay_hidden');
  BURGER_MENU.classList.remove('burger-menu_active');
  HAMBURGER_TOGGLE.classList.remove('hamburger_active');
  document.body.classList.remove('overflow');
})


const screenResize = function() {
  if (window.screen.width >= 769 && BURGER_MENU.classList.contains('burger-menu_active')) {
    BURGER_MENU.classList.remove('burger-menu_active');
    OVERLAY.classList.add('overlay_hidden');
    HAMBURGER_TOGGLE.classList.remove('hamburger_active');
    document.body.classList.remove('overflow');
  }
}
const closeMenu = function(event) {
  if (event.target.classList.contains('burger-menu__link')) {
    BURGER_MENU.classList.remove('burger-menu_active');
    OVERLAY.classList.add('overlay_hidden');
    HAMBURGER_TOGGLE.classList.remove('hamburger_active');
    document.body.classList.remove('overflow');
  }
}
NAV_LINKS.forEach((e) => e.addEventListener('click', closeMenu));


