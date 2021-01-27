
/**
 * Projects section
 */
const projectFilters = $l('button[data-filter]');
const projects = $l('.project');

function hideProject(project) {
  if (!project.classList.contains('project--hidden')) {
    toggleElementVisibility(project, 'project');
    changeElementDisplay(project, 'none');
  }
}

function showProject(project) {
  if (project.classList.contains('project--hidden')) {
    toggleElementVisibility(project, 'project');
    changeElementDisplay(project, 'block');
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

projectFilters.forEach(item => {
  item.addEventListener('click', selectProjectFilter);
});
