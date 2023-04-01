$( document ).ready(function() {
    $('.new-car_slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
      ]
    });
});