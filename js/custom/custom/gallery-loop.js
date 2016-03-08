// Функция открытия изображения в модальном окне

function galleryLoop() {
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
		$("#gallery-modal__controls").fadeOut(400);
		$overlay.animate({'opacity': 0}, 400, function() {
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