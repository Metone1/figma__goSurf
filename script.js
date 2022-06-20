const swiper_travel = new Swiper(
   '.travel__swiper', {

   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.surf__swiper-pagination',
      clickable: 'true',
   },
   navigation: {
      nextEl: '.swiper__button-right',
      prevEl: '.swiper__button-left',
   },
   slideToClickedSlide: 'true',
   slidesPerView: '1',
   spaceBetween: 1,
   centeredSlides: 'true',
   slideToClickedSlide: false,
   allowTouchMove: false,

   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
}
);

const swiper = new Swiper(
   '.surf__swiper', {

   direction: 'horizontal',
   loop: true,

   pagination: {
      el: '.surf__swiper-pagination',
      clickable: 'true',
   },
   navigation: {
      nextEl: '.swiper__button-right',
      prevEl: '.swiper__button-left',
   },
   slideToClickedSlide: false,
   slidesPerView: '4',
   spaceBetween: 0,
   centeredSlides: 'true',
   allowTouchMove: false,
});

const OnClickBulletsActive = (() => {
   let bullets = document.querySelectorAll('.swiper-pagination-bullet');
   for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.add(`surf__background-oval_${[i]}`);
   }
})();



