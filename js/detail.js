$( document ).ready(function() {
    $('.car-big_slider').slick({
        arrows: true,
        fade: true,
        asNavFor: ".car-small_slider",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                arrows: false,
              }
          }
      ]
    });
  
    $('.car-small_slider').slick({
        asNavFor: ".car-big_slider",
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '50px',
        infinity: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});