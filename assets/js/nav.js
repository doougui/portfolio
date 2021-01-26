/**
 * Navigation menu
 */
const navElement = $('.navigation');

function setMenuPosition() {
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;

    if (scrollPos <= 25) {
      return navElement.classList.remove('navigation--small');
    }

    return navElement.classList.add('navigation--small');
  });
}

setMenuPosition();