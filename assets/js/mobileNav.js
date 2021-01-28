const menuButton = $('.burger__wrapper');
const menuList = $('.navigation__items');
const menuItems = $l('.navigation__item');

function openMenu(e) {
  menuButton.classList.toggle('burger__wrapper--active');
  menuList.classList.toggle('navigation__items--active');
}

[menuButton, ...menuItems].forEach(item => {
  item.addEventListener('click', openMenu);
});

outsideClick(menuList, _ => {
  menuButton.classList.remove('burger__wrapper--active');
  menuList.classList.remove('navigation__items--active');
});

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);

  function handleOutsideClick(e) {
    if (!element.contains(e.target) && !menuButton.contains(e.target)) {
      callback();
    }
  }
}