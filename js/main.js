$( document ).ready(function() {
    $(".burger-menu ").on("click",".bar",function(e){
        $(".bar").toggleClass('change');
        $('.right-header').toggleClass('show');
        e.preventDefault();
    });

    $(".header-link_block").on("click",function(){
      $('.header_submenu_box').removeClass('show');
      $(this).children('.header_submenu_box').toggleClass('show');
    });

    $(".filter").on("click",function(){
      $('.settings-box').slideToggle();
    });
});