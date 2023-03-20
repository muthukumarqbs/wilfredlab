$(window).scroll(function(){
  if($(this).scrollTop() > 50 ){
      $('#topscroll').fadeIn();
  }
  else{
      $('#topscroll').fadeOut();
  }
});

$('#topscroll').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },1000);
    return false;
});

$(window).on('resize load', function(){
    var windowSize = $(window).width();
    var dropdownHover = $('.mydropdown.hover');
    if(windowSize > 1023){
        $('.drop-btn').removeClass('mobile-clicks');  
        dropdownHover.hover(function(e){
            e.preventDefault();
            $(this).children('.drop-menu').slideToggle(500);
        }); 
    }
    else if(windowSize <= 1023){
        $('.drop-btn').addClass('mobile-clicks');
        dropdownHover.off();
    }
});

$(document).on('click','.mobile-clicks',function(){
    $(this).siblings('.drop-menu').slideToggle(500);
});

$('.testi-slider').slick({
    infinite:true,
    arrows:false,
    dots:true,
    speed: 1000,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            }
        }        
        ]
});

$('.industry-slider').slick({
    infinite:true,
    arrows:false,
    dots:true,
    speed: 1000,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
            {
                breakpoint: 1023,
                settings: {
                slidesToShow: 2,
                }
            },        
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                }
            }        
        ]
});

$(function(){
    $('.read').each(function(){
      
        var read = $(this).text();
        if(read.length > 190){
            var first = read.substr(0,190);
            var second = read.substr(190,read.length);
            var alterTag = `<span>${first}</span><span class="hidepara">${second}</span><a class="readmorebtn text-primary">..read more</a>`;
            $(this).html(alterTag);
        }
    });
});

$(document).on('click', '.readmorebtn', function(){
    $(this).siblings('.hidepara').fadeToggle();
    $(this).text($(this).text() == '..read more' ? 'read less' : "..read more")
});

$(window).scroll(function() {
    var scrollToped = $(window).scrollTop();
    $('section').each(function(){
        var x = $(this).offset().top;
        x-=250;
        if(scrollToped >= x){     
            $(this).find('.animated').each(function(){
                $(this).addClass($(this).attr('data-animated')).removeClass('fade');
            });           
        }
    });
});