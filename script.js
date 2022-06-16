
const swiper = new Swiper('.surf__swiper', {

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
   grabCursor: 'true',
   slideToClickedSlide: 'true',
   slidesPerView: '4',
   spaceBetween: 0,
   centeredSlides: 'true',
});

const addClassName = (() => {
   let bullets = document.querySelectorAll('.swiper-pagination-bullet');
   for (let i = 0; i < bullets.length; i++) {
      console.log(i);
      console.log(bullets[i]);
      bullets[i].classList.add(`surf__background-oval_${[i]}`);
   }
})();
