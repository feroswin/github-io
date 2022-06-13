$(document).ready(function () {
  $('#mobile__menu').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('btn__nav__mobile__active');
    if($(this).hasClass('btn__nav__mobile__active')) {
      $('#nav').toggleClass('nav__active')
      $('#container__header').toggleClass('container__mobile__nav')
      $('#body').css({"overflow":"hidden"})
      $('#header__logo').css({'margin-left':'9.5%'});
    } else {
      $('#nav').removeClass('nav__active');
      $('#container__header').removeClass('container__mobile__nav')
      $('#body').css({"overflow":"visible"})
      $('#header__logo').css({'margin-left':'0'});
    }
  });
})