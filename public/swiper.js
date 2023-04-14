const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
      slideToClickedSlide: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    }
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
