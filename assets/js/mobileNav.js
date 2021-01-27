const menuButton = $('.burger__wrapper');
const menuList = $('.navigation__items');

function openMenu(e) {
  menuButton.classList.toggle('burger__wrapper--active');
  menuList.classList.toggle('navigation__items--active');
}

menuButton.addEventListener('click', openMenu);