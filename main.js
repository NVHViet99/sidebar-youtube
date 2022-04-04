const openBtn = document.querySelector('.menu-bar');
const openBtnInside = document.querySelector('.menu-bar-inside');
const showMenu = document.querySelector('.nav-menu');
const content = document.querySelector('.content');
const sideBar = document.querySelector('.container');
const navContent = document.querySelectorAll('.nav-content');
const navBar = document.querySelector('.nav-bar');

openBtn.addEventListener('click', function () {
  showMenu.classList.remove('hide-menu');
  document.querySelector('.content').style.marginLeft = '15rem';
  sideBar.classList.add('overlay');
  navBar.classList.add('hide');
});

const closeSieBar = function () {
  sideBar.classList.remove('overlay');
  document.querySelector('.content').style.marginLeft = '23px';
  navBar.classList.remove('hide');
  showMenu.classList.add('hide-menu');
};

openBtnInside.addEventListener('click', closeSieBar);
