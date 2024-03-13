  $(window).scroll(function (){
    $('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
    });
  });

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        992: {
          slidesPerView: 2,
        },
      },
    });