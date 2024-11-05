function accordion(accordionBlockSelector) {
  const accordionTitleAll = document.querySelectorAll(
    accordionBlockSelector + " [data-accordion-title]"
  );

  accordionTitleAll.forEach(item=> {
    item.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      } else {
        accordionTitleAll.forEach(function (i) {
          i.classList.remove("active");
        });
        item.classList.add("active");
      }
    });
  });
}

accordion(".links__accordion");
accordion(".legal__accordion");
