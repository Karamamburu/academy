const toggleProfileButton = document.querySelector('.toggle-profile');
const headerRight = document.querySelector('.header__right');
const headerSearch = document.querySelector('.header__search');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');

toggleProfileButton.addEventListener('click', () => {
  headerRight.classList.toggle('hidden');
  headerSearch.classList.toggle('hidden');
  main.classList.toggle('hidden');
  footer.classList.toggle('hidden');
});
