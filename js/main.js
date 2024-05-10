var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menuButton');
const menuButtonRect = menuButton.getBoundingClientRect();
var menuButtonOnClick = () => {
  menu.classList.toggle('menuActive');
  menuButton.classList.toggle('menuActive');
}