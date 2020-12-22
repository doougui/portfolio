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
const projects = $l('.project');

function changeProjectDisplay(project, display) {
  const transitionDuration = parseFloat(getComputedStyle(project)['transitionDuration']) * 1000;

  setTimeout(function () {
    project.style.display = display;
  }, transitionDuration);
}

function toggleProjectVisibility(project) {
  project.classList.toggle('project--hidden');
}

function hideProject(project) {
  if (!project.classList.contains('project--hidden')) {
    toggleProjectVisibility(project);
    changeProjectDisplay(project, 'none');
  }
}

function showProject(project) {
  if (project.classList.contains('project--hidden')) {
    toggleProjectVisibility(project);
    changeProjectDisplay(project, 'block');
  }
}

function showRelatedProjectsOnly(el) {
  const filter = el.getAttribute('data-filter') || 'all';

  projects.forEach(item => {
    if (filter !== 'all' && item.getAttribute('data-category') !== filter) {
      return hideProject(item);
    }

    return showProject(item);
  });
}

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

  showRelatedProjectsOnly(e.target.closest('.button'));
  addOutlineClass();
  removeOutlineClass(e.target);
}

setMenuPosition();

projectFilters.forEach(item => {
  item.addEventListener('click', selectProjectFilter);
});
