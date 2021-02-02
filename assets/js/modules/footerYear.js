import { $ } from '../utils/selectors.js';

export default function initFooterYear() {
  const year = $('.footer__year');
  year.textContent = new Date().getFullYear();
}