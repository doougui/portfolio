import { $, $l } from '../utils/selectors.js';

export default function initScroll() {
  const sections = $l('.js-scroll');
  
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;
    
    function animateScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;
    
        if (isSectionVisible) {
          return section.classList.add('active');
        }
      });
    }
    
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}