const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  slidesPerView: 2,
  spaceBetween: 0,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: '.pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
