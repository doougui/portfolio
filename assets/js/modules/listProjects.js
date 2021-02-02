import { $ } from '../utils/selectors.js';
import { projectsJson } from '../data/projectsJson.js';

export default function initProjectList() {
  const projectsContainer = $('.projects__container');
  
  if (projectsContainer) {
    projectsJson.map((item, index) => {
      const projectItem = $('.models .project').cloneNode(true);
    
      projectItem.setAttribute('data-key', index);
      projectItem.setAttribute('data-category', item.categoryKey);
      projectItem.style.backgroundImage = `url(${item.image})`;
        
      projectsContainer.append(projectItem);
    });
  }
}