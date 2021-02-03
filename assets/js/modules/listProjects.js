import { $ } from '../utils/selectors.js';
import { projectsJson } from '../data/projectsJson.js';

export default function initProjectList() {
  const projectsContainer = $('.projects__container');
  
  if (projectsContainer) {
    projectsJson.map((item, index) => {
      const projectItem = $('.models .project').cloneNode(true);
    
      projectItem.setAttribute('data-key', index);
      projectItem.setAttribute('data-category', item.categoryKey);

      const supportsWebp = document.documentElement.classList.contains('webp');
      const image = supportsWebp ? item.image : item.fallback;

      projectItem.style.backgroundImage = `url(${image})`;

      projectsContainer.append(projectItem);
    });
  }
}