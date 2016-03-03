//Табы и пагинация страницы галереи

(function(){

	var navItem = $(".gallery-nav__link");

	navItem.on("click", function(e){
		e.preventDefault();
		//переставляем класс активной ссылки
		navItem.removeClass('gallery-nav__link--active');
		$(this).addClass('gallery-nav__link--active');

		//генерируем по клику url для запроса AJAX
		var tabUrl = $(this).data("tab");
		var url = 'gallery-' + tabUrl + '.html';
		// console.log(url);

		//Собственно пагинация

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

	});
})();