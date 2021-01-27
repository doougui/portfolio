/**
 * Helpers
 */
const $ = element => document.querySelector(element);
const $l = element => document.querySelectorAll(element);

const varToString = varObj => Object.keys(varObj)[0];

function changeElementDisplay(element, display) {
  const transitionDuration = parseFloat(getComputedStyle(element)['transitionDuration']) * 1000;

  setTimeout(function () {
    element.style.display = display;
  }, transitionDuration);
}

function toggleElementVisibility(element, name) {
  element.classList.toggle(`${name}--hidden`);
}