const navBtn = document.querySelector(".hamburger-menu");
const showMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const chip = document.querySelector(".chip");

function hasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}

navBtn.addEventListener("click", function () {
  if (hasClass(showMenu, "hide-menu")) {
    showMenu.classList.remove("hide-menu");
    body.style.paddingLeft = "272px";
    chip.style.left = "250px";
  } else {
    showMenu.classList.add("hide-menu");
    body.style.paddingLeft = "96px";
    chip.style.left = "72px";
  }
});
