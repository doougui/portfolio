import { $, $l } from '../utils/selectors.js';
import { projectsJson } from '../data/projectsJson.js';

export default function initModal() {
  const modalContainer = $('.modal');
  const modalClose = $('.modal__close');
  const modalGoBack = $('.modal__go-back');
  const body = $('body');
  const projectItems = $l('.projects__container .project');
  
  if (modalContainer && modalClose) {
    function setFunFact(key) {
      if (projectsJson[key].funFact) {
        $('.accordion').style.display = 'block';
        $('.accordion__content').innerHTML = projectsJson[key].funFact;
        return;
      }

      $('.accordion').style.display = 'none';
      return;
    }

    function setCodeVisibility(key) {
      const modalCodeBtn = $('.modal__code');
      const disabledClass = 'button__aesthetic--outline-disabled';
      const outlineBtn = modalCodeBtn.querySelector('.button__aesthetic--outline');

      if (projectsJson[key].privateCode) {
        modalCodeBtn.classList.add('disabled');
        outlineBtn.classList.add(disabledClass);
        outlineBtn.textContent = 'Código privado';
        return;
      }

      modalCodeBtn.classList.remove('disabled');
      outlineBtn.classList.remove(disabledClass);
      outlineBtn.textContent = 'Código';
      return;
    }

    function setModalData(key) {
      $('.modal__img-webp').srcset = url + projectsJson[key].image; // Optimized webp image
      $('.modal__fallback-jpg').srcset = url + projectsJson[key].fallback; // Fallback for old browsers
      $('.modal__fallback-img').src = url + projectsJson[key].fallback; // Fallback for old browsers
      $('.modal__fallback-img').alt = projectsJson[key].name; // Img alt attribute
      $('.modal__text h1').innerHTML = projectsJson[key].name;
      $('.modal__description').innerHTML = projectsJson[key].description;
      $('.modal__category').innerHTML = projectsJson[key].category;
      $('.modal__code').href = projectsJson[key].code;
      $('.modal__demo').href = projectsJson[key].demo;

      setFunFact(key);
      setCodeVisibility(key);
    }
  
    function toggleModal(e) {
      e.preventDefault();
  
      modalContainer.classList.toggle('modal--visible');
      body.classList.toggle('noscroll');
    }
  
    function openModal(e) {
      e.preventDefault();
  
      const key = e.target.getAttribute('data-key');
  
      setModalData(key);
      toggleModal(e);
    }
  
    function outsideModalClick(e) {
      if (e.target === this) toggleModal(e);
    }
  
    [modalClose, modalGoBack].forEach(item => {
      item.addEventListener('click', toggleModal);
    });

    modalContainer.addEventListener('click', outsideModalClick);
    if (projectItems) {
      projectItems.forEach(project => {
        project.addEventListener('click', openModal);
      });
    }
  }
}
