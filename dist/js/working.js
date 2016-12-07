$(document).ready(function() {
  $('.slider').slick({
    prevArrow: '<button type="button" class="button-slide  button-slide-prev">Previous</button>',
    nextArrow: '<button type="button" class="button-slide  button-slide-next">Next</button>'
  });
  
  $('.quote-item__description').css({
    height: $(window).height() / 2,
    paddingTop: $(this).height() / 5
  });
  
  $('.quote-item__person').css({
    height: $(window).height() / 2,
    paddingTop: $(this).height() / 7
  });
  if($(window).height() < 313) {
    $('.quote-item__person').css('padding-top','20px');
  };
});
$(window).resize(function() {
  $('.quote-item__description').css({
    height: $(window).height() / 2,
    paddingTop: $(this).height() / 5
  });
  $('.quote-item__person').css({
    height: $(window).height() / 2,
    paddingTop: $(this).height() / 7 
  });
  if($(window).height() < 313) {
    $('.quote-item__person').css('padding-top', '20px');
  };
});
