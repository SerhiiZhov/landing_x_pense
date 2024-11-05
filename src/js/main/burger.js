const menuBtn = document.querySelector(".menu__button");
const menu = document.querySelector(".header__menu_wrapper");
const menuItem = document.querySelectorAll(".menu__item");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

menuItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  });
});

function handleScreenWidthChange(e) {
  if (e.matches) {
      menu.classList.remove("open");
      menuBtn.classList.remove("open");
  }
}
const mediaQuery2 = window.matchMedia("(min-width: 1024px)");
handleScreenWidthChange(mediaQuery2);
mediaQuery2.addEventListener('change', handleScreenWidthChange);
