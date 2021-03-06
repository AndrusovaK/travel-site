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


