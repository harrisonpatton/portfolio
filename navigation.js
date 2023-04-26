var sandwichButton = document.querySelector('.sandwich-button');
var dropdown = document.querySelector('.dropdown-menu');
var navTitle = document.querySelector('.nav__title');

sandwichButton.addEventListener('click', function () {
  dropdown.classList.toggle('active');
  navTitle.classList.toggle('active');
});
