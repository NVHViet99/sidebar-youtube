const navBtn = document.querySelector(".hamburger-menu");
const showMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

function hasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}

navBtn.addEventListener("click", function () {
  if (hasClass(showMenu, "hide-menu")) {
    showMenu.classList.remove("hide-menu");
    body.style.paddingLeft = "272px";
  } else {
    showMenu.classList.add("hide-menu");
    body.style.paddingLeft = "96px";
  }
});
