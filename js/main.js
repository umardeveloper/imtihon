const elHeader = document.querySelector('.header');
const elHamburger =document.querySelector('.humburger-button');

elHamburger.addEventListener('click', () => {
   elHeader.classList.toggle('header--open');
});