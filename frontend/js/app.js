const menuNav = document.getElementById("menu");
const iconHamburger = document.getElementById("menu__icon");
const iconClose = document.getElementById("close__icon");

iconHamburger.addEventListener("click", () => {
  menuNav.classList.add("show");
  iconClose.classList.add("show");
  iconHamburger.classList.add("hide");
});

iconClose.addEventListener("click", () => {
  menuNav.classList.remove("show");
  iconClose.classList.remove("show");
  iconHamburger.classList.remove("hide");
});
