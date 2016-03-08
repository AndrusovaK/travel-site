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
sr.reveal('.section-title');

sr.reveal('.sr-delay-015', {delay: 150});
sr.reveal('.sr-delay-03', {delay: 300});
sr.reveal('.sr-delay-045', {delay: 450});

//Пагинация: AJAX - подгрузка и нарезка

	(function() {

			var prev = {
					start: 0,
					stop: 0
			};


			var content = $.ajax({
				url: 'all-blog-posts.html',
				async: false,
				dataType: 'html',
				error: function(){
					console.log('loading error');
				},
				success: function(data){
					console.log('load was performed');
				}
			}).responseText.split('<br/>');

			console.log(content.length);
			console.log(content);

			var Paging = $("#pagination").paging(content.length, {
					onSelect: function() {

							var data = this.slice;
							// content.slice(prev[0], prev[1]).html(data);
							var singlePage = content.slice(data[0], data[1]);

							console.log(singlePage);

							$('.blog-items').html(singlePage).css("display", "none").fadeIn(1000);
							prev = data;

							var currentPosition = $(document).scrollTop();
							var scrollTime = currentPosition / 4;

							$('body, html').animate({
								scrollTop: 0
							}, scrollTime);

							return true; // locate!


							// $('.pagination__link').on("click", function())
					},
					onFormat: function(type) {

							switch (type) {

									case 'block':

											if (!this.active)
													return '<span class="disabled">' + this.value + '</span>';
											else if (this.value != this.page)
													return '<a class="pagination__link" href="#' + this.value + '">' + this.value + '</a>';
											return '<span class="pagination__link pagination__link--active">' + this.value + '</span>';

									case 'right':
									case 'left':

											if (!this.active) {
													return '';
											}
											return '<a href="#' + this.value + '">' + this.value + '</a>';

									case 'next':

											if (this.active) {
													return '<a href="#' + this.value + '" class="pagination__link">Next</a>';
											}
											return '<span style="display:none">Next</span>';

									case 'prev':

											if (this.active) {
													return '<a href="#' + this.value + '" class="pagination__link">Previous</a>';
											}
											return '<span style="display:none">Previous</span>';

									case 'first':

											if (this.active) {
													return '<a href="#' + this.value + '" class="pagination__link">First</a>';
											}
											return '<span style="display:none">First</span>';

									case 'last':

											if (this.active) {
													return '<a href="#' + this.value + '" class="pagination__link">Last</a>';
											}
											return '<span style="display:none">Last</span>';

									case 'fill':
											if (this.active) {
													return "...";
											}
							}
							return ""; // return nothing for missing branches
					},
					format: '[ < ncn! > ]',
					perpage: 3,
					lapping: 0,
					page: null // we await hashchange() event
			});


			$(window).hashchange(function() {

					if (window.location.hash)
							Paging.setPage(window.location.hash.substr(1));
					else
							Paging.setPage(1); // we dropped "page" support and need to run it by hand
			});

			$(window).hashchange();
	})();



//Табы и пагинация страницы галереи

$(function (){

	var url = 'gallery-europe.html';
	var Paging;

		//Собственно пагинация

	function pagination() {

		var prev = {
			start: 0,
			stop: 0
		};

		var content = $.ajax({
			url: url,
			async: false,
			dataType: 'html',
			error: function(){
				console.log('loading error');
			},
			success: function(data){
				console.log('load was performed');
				console.log(url);
			}
		}).responseText.split('<br/>');

		console.log(content);

		Paging = $("#gallery-pagination").paging(content.length, {
			onSelect: function() {

					var data = this.slice;
					// content.slice(prev[0], prev[1]).html(data);
					var singlePage = content.slice(data[0], data[1]);

					console.log(singlePage);

					$('#gallery-content__wrapper').html(singlePage).css("display", "none").fadeIn(1000);
					prev = data;

					var currentPosition = $(document).scrollTop();
					var scrollTime = currentPosition / 4;

					$('body, html').animate({
						scrollTop: 0
					}, scrollTime);

					// вызываем функцию галереи в модальном окне
					galleryZoom();

					return true; // locate!
			},
			onFormat: function(type) {

					switch (type) {

							case 'block':

									if (!this.active)
											return '<span class="pagination__link--disabled">' + this.value + '</span>';
									else if (this.value != this.page)
											return '<a class="pagination__link" href="#' + this.value + '">' + this.value + '</a>';
									return '<span class="pagination__link pagination__link--active">' + this.value + '</span>';

							case 'right':
							case 'left':

									if (!this.active) {
											return '';
									}
									return '<a href="#' + this.value + '">' + this.value + '</a>';

							case 'next':

									if (this.active) {
											return '<a href="#' + this.value + '" class="pagination__link">Next</a>';
									}
									return '<span style="display:none">Next</span>';

							case 'prev':

									if (this.active) {
											return '<a href="#' + this.value + '" class="pagination__link">Previous</a>';
									}
									return '<span style="display:none">Previous</span>';

							case 'first':

									if (this.active) {
											return '<a href="#' + this.value + '" class="pagination__link">First</a>';
									}
									return '<span style="display:none">First</span>';

							case 'last':

									if (this.active) {
											return '<a href="#' + this.value + '" class="pagination__link">Last</a>';
									}
									return '<span style="display:none">Last</span>';

							case 'fill':
									if (this.active) {
											return "...";
									}
							}
							return ""; // return nothing for missing branches
					},
					format: '[ < ncn! > ]',
					perpage: 3,
					lapping: 0,
					page: null // we await hashchange() event
			});

		$(window).hashchange(function() {

					if (window.location.hash)
							Paging.setPage(window.location.hash.substr(1));
					else
							Paging.setPage(1); // we dropped "page" support and need to run it by hand
			});

			$(window).hashchange();

	}
	// Вызываем функцию пагинации при загрузке страницы
	pagination();

	var navItem = $(".gallery-nav__link");

	navItem.on("click", function(e){
		e.preventDefault();
		//переставляем класс активной ссылки
		navItem.removeClass('gallery-nav__link--active');
		$(this).addClass('gallery-nav__link--active');

		//генерируем по клику url для запроса AJAX
		var tabUrl = $(this).data("tab");
		url = 'gallery-' + tabUrl + '.html';
		console.log(url);

		//очищаем хэш, чтобы загружалась первая вкладка
		history.pushState('', document.title, window.location.pathname);

		// Вызываем функцию пагинации при клике на любой таб
		pagination();

		// вызываем функцию галереи в модальном окне
		galleryZoom();
	});

});



// Функция открытия изображения в модальном окне

function galleryZoom() {
	var imageSelector = '.gallery-item__image img',
			totalImages,
			activeImage,
			activeImageIndex,
			newImage,
			newImageIndex,
			imageTitle,
			$controls = $('.control-btn'),
			$galleryImages = $(imageSelector),
			$overlay = $('#gallery-modal__overlay'),
			$closeBtn = $('#gallery-modal__close'),
			$titleContainer = $('#gallery-modal__image-title'),
			$numberContainer = $('#gallery-modal__image-number'),
			$imageContainer = $('#gallery-modal__image');

	totalImages = $galleryImages.length;
	console.log($galleryImages);

//   функция которая подставляет имя и номер картинки
	function addImgInfo() {
		$titleContainer.text(imageTitle);
		$numberContainer.text(activeImageIndex+1 + ' of ' + $galleryImages.length);
	}

	// функция получения и вставки на страницу нового изображения
	function cloneImage() {
		newImage = $galleryImages.eq(newImageIndex);
		$imageContainer.html(newImage.clone());
	}

	// Обработчик смены изображений по клику на next/prev
	function changeImage(target) {
		if(target == "next") {
			newImageIndex = activeImageIndex + 1;
		// Вызываем функцию которая клонирует и вставляет изображение
			cloneImage();

		// Перезаписываем значение индекса активного изображения
			activeImageIndex++;

		// Проверяем не дошли ли мы до конца набора, и если да,
		// то возвращаемся на начало цикла
			if(newImageIndex > totalImages - 1) {
				newImageIndex = 0;
				activeImageIndex = 0;
				cloneImage();
			}
		} else {
			newImageIndex = activeImageIndex - 1;
			cloneImage();
			activeImageIndex--;

			if(newImageIndex < 0) {
				newImageIndex = totalImages - 1;
				activeImageIndex = totalImages - 1;
				cloneImage();
			}
		}
	}

	//Функция-обработчик закрытия модального окна
	function closeModal() {
		$('body').removeClass('lock');
		$("#gallery-modal__controls").fadeOut(200);
		$overlay.animate({'opacity': 0}, 200, function() {
			$(this).css('display', 'none');
		});
	}

// Вызов модального окна по клику на изображение
	$galleryImages.on("click", function (e) {
		// Блокируем прокрутку основного контента страницы
		$('body').addClass('lock');
		// Считываем из атрибута data имя картинки
		imageTitle = $(this).data("item__title");
		// Считываем порядковый номер
		activeImageIndex = $galleryImages.index(this);
		// Вызываем функцию, вставляющую номер и имя картинки
		addImgInfo();

		// Копируем картинку и вставляем ее в модальное окно
		activeImage = $(this);
		$imageContainer.html(activeImage.clone());

		// анимируем появление
	$overlay
		.css('display', 'flex')
		.animate({
			'opacity':1}, 400);

		$("#gallery-modal__controls").fadeIn(400);
	});

// Смена изображений по клику на next/prev
	$controls.on("click", function(){
		var target = $(this).data('target');
		changeImage(target);
		imageTitle = newImage.data("item__title");
		addImgInfo();
	});

//   Закрытие модального окна
	// По клику за пределами модального окна
	$overlay.click(function(e) {
		if ($(e.target).closest("#gallery-modal").length) return;
		closeModal();
		e.stopPropagation();
	});
	// По клику на кнопке "закрыть"
	$closeBtn.on('click', closeModal);

};