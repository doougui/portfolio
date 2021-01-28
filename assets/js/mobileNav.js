const menuButton = $('.burger__wrapper');
const menuList = $('.navigation__items');

function openMenu(e) {
  menuButton.classList.toggle('burger__wrapper--active');
  menuList.classList.toggle('navigation__items--active');
}

menuButton.addEventListener('click', openMenu);

outsideClick(menuList, _ => {
  menuButton.classList.remove('burger__wrapper--active');
  menuList.classList.remove('navigation__items--active');
});

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);

  function handleOutsideClick(e) {
    if (
      (
        !element.contains(e.target)  // Se o elemento clicado não for filho do nav items
        && !menuButton.contains(e.target) // Se o elemento clicado não for filho do hamburger
      ) 
    ) {
      callback();
    }
  }
}