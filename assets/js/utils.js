/**
 * Helpers
 */
const $ = element => document.querySelector(element);
const $l = element => document.querySelectorAll(element);

function changeItemDisplay(item, display) {
  const transitionDuration = parseFloat(getComputedStyle(item)['transitionDuration']) * 1000;

  setTimeout(function () {
    item.style.display = display;
  }, transitionDuration);
}

function toggleItemVisibility(item, component) {
  item.classList.toggle(`${component}--hidden`);
}

function hideItem(item, component, display = 'none') {
  if (!item.classList.contains(`${component}--hidden`)) {
    toggleItemVisibility(item, component);
    changeItemDisplay(item, display);
  }
}

function showItem(item, component, display = 'block') {
  if (item.classList.contains(`${component}--hidden`)) {
    toggleItemVisibility(item, component);
    changeItemDisplay(item, display);
  }
}