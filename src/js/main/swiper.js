let aboutCamp = new Swiper(".review__swiper", {
  initialSlide: 3,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper_pagination",
        renderBullet: function (a, className) {
          return '<span class="' + className + '">' + "</span>";
        },
        clickable: true,
      },
    },
    767.89: {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper_pagination",
        renderBullet: function (a, className) {
          return '<span class="' + className + '">' + "</span>";
        },
        clickable: true,
      },
    },
    599.98: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper_pagination",
        renderBullet: function (a, className) {
          return '<span class="' + className + '">' + "</span>";
        },
        clickable: true,
      },
    },
    479.89: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      pagination: {
        el: ".swiper_pagination",
        renderBullet: function (a, className) {
          return '<span class="' + className + '">' + "</span>";
        },
        clickable: true,
      },
    },
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper_pagination",
        renderBullet: function (a, className) {
          return '<span class="' + className + '">' + "</span>";
        },
        clickable: true,
      },
    },
  },
});
