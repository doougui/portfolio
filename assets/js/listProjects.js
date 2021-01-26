projectsJson.map((item, index) => {
  const projectItem = $('.models .project').cloneNode(true);

  projectItem.setAttribute('data-category', item.categoryKey);
  projectItem.style.backgroundImage = `url(${item.image})`;

  projectItem.addEventListener('click', openModal);

  $('.projects__container').append(projectItem);
});