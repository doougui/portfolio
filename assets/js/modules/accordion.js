import { $, $l } from '../utils/selectors.js';

export default function initAccordion() {
  const accordionOpeners = $l('.accordion__opener');

  if (accordionOpeners.length) {
    function toggleAccordion() {
      const visibleClass = 'accordion__content--visible';
      const hidingClass = 'accordion__content--hiding';

      if (this.nextElementSibling.classList.contains(visibleClass)) {
        this.nextElementSibling.classList.remove(visibleClass);
        this.nextElementSibling.classList.add(hidingClass);

        const animationDuration = parseFloat(
          getComputedStyle($(`.${hidingClass}`))['animationDuration']
        ) * 1000;

        setTimeout(() => {
          this.nextElementSibling.classList.remove(hidingClass);
        }, animationDuration);

        return;
      }

      this.nextElementSibling.classList.add(visibleClass);
      return;
    }

    accordionOpeners.forEach(opener => {
      opener.addEventListener('click', toggleAccordion);
    });
  }
}