$(".slider").slick({
    autoplay: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 1,
    },
      },
    ],
});

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
