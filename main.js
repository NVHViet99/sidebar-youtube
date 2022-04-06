const openBtn = document.querySelector('.menu-bar');
const showMenu = document.querySelector('.nav-menu');

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

document.querySelector('.content').style.marginLeft = '4.5rem';

openBtn.addEventListener('click', function () {
  if (hasClass(showMenu, 'hide-menu')) {
    showMenu.classList.remove('hide-menu');
    document.querySelector('.content').style.marginLeft = '17rem';
  } else {
    showMenu.classList.add('hide-menu');
    document.querySelector('.content').style.marginLeft = '4.5rem';
  }
});
