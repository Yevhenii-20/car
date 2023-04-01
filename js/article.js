$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(e){
        $(".bar").toggleClass('change');
        $('.right-header').toggleClass('show');
        e.preventDefault();
    });

    $(".header-link_block").on("click",function(){
      $('.header_submenu').removeClass('show');
      $(this).children('.header_submenu').toggleClass('show');
    });

    $(".filter").on("click",function(){
      $('.settings-box').slideToggle();
    });
    
    /* Simulate defer loading slick */

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

  $('.new-car_flex').slick({
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
  })
});