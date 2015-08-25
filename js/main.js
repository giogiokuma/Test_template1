
$(function() {
  $('.navigation').on('click', function(event){
    if($(event.target).is('.navigation')) $(this).children('ul').toggleClass('is-visible');
  });
  


});