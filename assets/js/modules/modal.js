import { $, $l } from '../utils/selectors.js';
import { projectsJson } from '../data/projectsJson.js';

export default function initModal() {
  const modalContainer = $('.modal');
  const modalClose = $('.modal__close');
  const modalGoBack = $('.modal__go-back');
  const body = $('body');
  const projectItems = $l('.projects__container .project');
  
  if (modalContainer && modalClose) {
    function setModalData(key) {
      $('.modal__image img').src = projectsJson[key].image;
      $('.modal__image img').alt = projectsJson[key].name;
      $('.modal__text h1').innerHTML = projectsJson[key].name;
      $('.modal__description').innerHTML = projectsJson[key].description;
      $('.modal__category').innerHTML = projectsJson[key].category;
      $('.modal__code').href = projectsJson[key].code;
      $('.modal__demo').href = projectsJson[key].demo;
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
