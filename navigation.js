window.onload = function () {
  const sandwichButton = document.querySelector('.sandwich-button');
  const sandwichButtonClose = document.querySelector('.sandwich-button__close');
  const dropdown = document.querySelector('.dropdown-menu');
  const navContainer = document.querySelector('.nav-container');
  const nav = document.querySelector('.nav');
  const navTitle = document.querySelector('.nav__title');
  let isOpen = false;

  sandwichButton.addEventListener('click', function () {
    dropdown.classList.toggle('active');
    navTitle.classList.toggle('hidden');
    sandwichButton.classList.toggle('hidden');
    sandwichButtonClose.classList.toggle('hidden');
    navContainer.classList.toggle('margin-right');
    nav.classList.toggle('show');
    nav.style.alignItems = 'normal';
    sandwichButton.style.opacity = 0;
  });

  sandwichButtonClose.addEventListener('click', function () {
    dropdown.classList.toggle('active');
    navTitle.classList.toggle('hidden');
    sandwichButtonClose.classList.toggle('hidden');
    sandwichButton.classList.toggle('hidden');
    navContainer.classList.toggle('margin-right');
    nav.classList.toggle('show');
    nav.style.alignItems = 'center';
    sandwichButton.style.opacity = 1;
  });
};
