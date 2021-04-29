import { $, $l } from '../utils/selectors.js';
import { toggleElementClass } from '../utils/elementHelpers.js';

export default function initProjectFilters() {
  const projectFilters = $l('button[data-filter]');
  const projects = $l('.projects__container .project');
  const projectsContainer = $('.projects__container');
  const noProjectsFound = $('.projects__notfound');
  
  function toggleNoProjectsFoundMessage(hiddenProjects) {    
    if (hiddenProjects.length === projects.length) {
      return toggleElementClass(noProjectsFound, ['none'], ['block']);
    }

    return toggleElementClass(noProjectsFound, ['block'], ['none']);
  }

  function showRelatedProjectsOnly(el) {
    const filter = el.getAttribute('data-filter') || 'all';
  
    projects.forEach(item => {
      if (filter !== 'all' && item.getAttribute('data-category') !== filter) {
        return item.classList.add('project--hidden');
      }
  
      return item.classList.remove('project--hidden');
    });

    const hiddenProjects = $l('.projects__container .project--hidden');

    toggleNoProjectsFoundMessage(hiddenProjects);
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
}
