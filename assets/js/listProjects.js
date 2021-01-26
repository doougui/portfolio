projectsJson.map((item, index) => {
  const projectItem = $('.models .project').cloneNode(true);

  projectItem.setAttribute('data-key', index);
  projectItem.setAttribute('data-category', item.categoryKey);
  projectItem.style.backgroundImage = `url(${item.image})`;

  projectItem.addEventListener('click', openModal);

  $('.projects__container').append(projectItem);
});

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

  const modal = $('.modal');
  const key = e.target.getAttribute('data-key');

  setModalData(key);

  if (modal.classList.contains('modal--hidden')) {
    return showItem(modal, 'modal', 'flex');
  }
}