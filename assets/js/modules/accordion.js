import { $l } from '../utils/selectors.js';

export default function initAccordion() {
  const accordionOpeners = $l('.accordion__opener');

  if (accordionOpeners.length) {
    function activeAccordion() {
      this.nextElementSibling.classList.toggle('accordion__content--visible');
    }

    accordionOpeners.forEach(opener => {
      opener.addEventListener('click', activeAccordion);
    });
  }
}