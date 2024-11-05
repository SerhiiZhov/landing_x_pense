const popupButtonAll = document.querySelectorAll("[data-popup-button]");
const popupAll = document.querySelectorAll("[data-popup]");

popupButtonAll.forEach(function (element) {
  element.addEventListener("mouseup", function (event) {
    document
      .querySelector("#" + event.target.dataset.popupButton)
      .classList.add("active");
      document.querySelector('.popup__close').focus()
  });
});
popupButtonAll.forEach(function (element) {
  element.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document
      .querySelector("#" + event.target.dataset.popupButton)
      .classList.add("active");
      document.querySelector('.popup__close').focus()
    }
});
});

popupAll.forEach(function (element) {
  element
    .querySelector("[data-popup-close]")
    .addEventListener("mouseup", function () {
      element.classList.remove("active");
    });
    element.addEventListener("keydown", function (event) {
      if (event.key === 'Enter' && document.activeElement === element.querySelector("[data-popup-close]")) {
      element.classList.remove("active");
      }
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        element.classList.remove("active");
      }
  });
  element
    .querySelector("[data-popup-window]")
    .addEventListener("mouseup", function (event) {
      event.stopPropagation();
    });
  element.addEventListener("mouseup", function () {
    element.classList.remove("active");
  });
});
