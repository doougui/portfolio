/**
 * Helpers
 */
const $ = element => document.querySelector(element);
const $l = element => document.querySelectorAll(element);

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

/**
 * Projects section
 */
const projectFilters = $l('button[data-filter]');

function addOutlineClass() {
  projectFilters.forEach(item => {
    const child = item.querySelector('.button__aesthetic');

    if (!child.classList.contains('button__aesthetic--outline')) {
      child.classList.add('button__aesthetic--outline');
    }
  });
}

function removeOutlineClass(el) {
  if (el.classList.contains('button__aesthetic--outline')) {
    el.classList.remove('button__aesthetic--outline');
  }
}

function selectProjectFilter(e) {
  e.preventDefault();

  addOutlineClass();
  removeOutlineClass(e.target);
}

setMenuPosition();

projectFilters.forEach(item => {
  item.addEventListener('click', selectProjectFilter);
});
