function slowScroll(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 500);
  }
$(document).on("scroll", function () {
  if($(window).scrollTop() === 0){
    $("header").removeClass("fixed");
  }
  else
    $("header").addClass("fixed");
});
$(document).ready(function(){
  $("#hidden1").fadeTo(2000, 1);
  $("#hidden2").fadeTo(5000, 1);
});//почему не работает fadeIn? Блеят!

$(document).scroll(function () {
  if($(window).scrollTop() > 200){
    $("#main").fadeTo(1000, 1);
  }
});
