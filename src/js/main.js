/*window.onload = function(){

    *
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     *
     *  TODO: незабыть в мануал написать про использование

    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original" // original-set
    });
};*/

//Промо-слайдер на главной странице

$(function () {
    $('#promo-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.promo-slider__prev'),
      nextArrow: $('.promo-slider__next'),
    });
});


//Адаптивное меню

$(document).ready(function(){
    var toggler = $('#toggler');
    var menu = $('.main-nav');
    var wid = $(window).width();

    $(toggler).on('click', function(e) {
      e.preventDefault();
      toggler.toggleClass('toggler--close');
      menu.slideToggle();
    });

    $(window).resize(function(){

      if(wid > 768 && menu.is(':hidden')) {
           menu.removeAttr('style');
      }

    });

    var hasChildren = $('.main-nav__item--has-children');
    var nestedNav = $('.main-nav__nested-list');


    $(hasChildren).hover(function (){
      if(wid > 768) {
        $(this).find(nestedNav).slideToggle();
      }
  });
});


;( function( window, document )
{
    'use strict';

    var file     = 'svg/sprite.svg',
        revision = 1;

    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
    }

    try
    {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                    localStorage.setItem( 'inlineSVGdata',  data );
                    localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
    }
    catch( e ){}

}( window, document ) );


// Scrollreveal

window.sr = ScrollReveal({ reset: true });

sr.reveal('.service-item');
sr.reveal('.services__title');
sr.reveal('.services__text');
sr.reveal('.promo__title');
sr.reveal('.promo__text');
sr.reveal('.sr-btn');
sr.reveal('.promo-line__text', {scale: 0.2});
sr.reveal('.subscription');
sr.reveal('.section-title', {viewFactor: 1});

sr.reveal('.sr-delay-015', {delay: 150});
sr.reveal('.sr-delay-03', {delay: 300});
sr.reveal('.sr-delay-045', {delay: 450});
