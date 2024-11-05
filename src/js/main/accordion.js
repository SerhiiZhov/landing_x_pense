function accordion(accordionBlockSelector) {
  const accordionTitleAll = document.querySelectorAll(
    accordionBlockSelector + " [data-accordion-title]"
  );

  accordionTitleAll.forEach(item=> {
    item.addEventListener("click", function () {
      if (item.classList.contains("actives")) {
        item.classList.remove("actives");
        return;
      } else {
        accordionTitleAll.forEach(function (i) {
          i.classList.remove("actives");
        });
        item.classList.add("actives");
      }
    });
  });
}

accordion(".links__accordion");
accordion(".legal__accordion");
