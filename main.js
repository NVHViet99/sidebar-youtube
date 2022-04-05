const openBtn = document.querySelector('.menu-bar');
const openBtnInside = document.querySelector('.menu-bar-inside');
const showMenu = document.querySelector('.nav-menu');
const content = document.querySelector('.content');
const sideBar = document.querySelector('.container');
const navContent = document.querySelectorAll('.nav-content');
const navBar = document.querySelector('.nav-bar');

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
document.querySelector('.content').style.marginLeft = '5rem';

openBtn.addEventListener('click', function () {
  if (hasClass(showMenu, 'hide-menu')) {
    showMenu.classList.remove('hide-menu');
    document.querySelector('.content').style.marginLeft = '15rem';
  } else {
    showMenu.classList.add('hide-menu');
    document.querySelector('.content').style.marginLeft = '5rem';
  }
});
// const closeSieBar = function () {
//   // sideBar.classList.remove('overlay');
//   document.querySelector('.content').style.marginLeft = '23px';
//   navBar.classList.remove('hide');
//   showMenu.classList.add('hide-menu');
// };

// openBtnInside.addEventListener('click', closeSieBar);
