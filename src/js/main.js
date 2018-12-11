let button = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.site-list');

button.addEventListener('click', function(evt) {
	evt.preventDefault();
	menu.classList.toggle('site-list--active');
});

$(document).ready(function(){
		$('#carousel-consist').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 10,
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: true
				}
			}
		});
		$('#carousel-size').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 10,
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: true
				}
			}
		});
		$('#carousel-decor').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 10,
			responsive: {
				0: {
					nav: false
				},
				768: {
					nav: true
				}
			}
		});
});