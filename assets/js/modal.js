const modalContainer = $('.modal');
const modalClose = $('.modal__close');
const body = $('body');

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

  function openModal(e) {
    e.preventDefault();

    const key = e.target.getAttribute('data-key');

    setModalData(key);

    modalContainer.classList.add('modal--visible');
    body.classList.add('noscroll');
  }

  function closeModal(e) {
    e.preventDefault();

    modalContainer.classList.remove('modal--visible');
    body.classList.remove('noscroll');
  }

  function outsideModalClick(e) {
    if (e.target === this) closeModal(e);
  }

  modalClose.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', outsideModalClick);
}
