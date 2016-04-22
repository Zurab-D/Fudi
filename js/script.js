$(function() {
  function menuIconListener(iconId){
    $(iconId).click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('.top-menu-header').toggleClass('open');
    });
  };

  // When user clicks a link in menu item
  $('.top-menu-header li a').click(function(event) {
    event.preventDefault();
    $('#navicon').removeClass('active');
    $('#menu-320-benefits').removeClass('active');
    $('#menu-320-cuisines').removeClass('active');
    $('.top-menu-header').removeClass('open');
  });

  menuIconListener('#navicon');
  menuIconListener('#menu-320-benefits');
  menuIconListener('#menu-320-cuisines');
});

/* click menu item */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
