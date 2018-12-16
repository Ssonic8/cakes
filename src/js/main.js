let button = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.site-list');


$(document).ready(function(){

		button.addEventListener('click', function(evt) {
		evt.preventDefault();
		menu.classList.toggle('site-list--active');
		});

		$('#carousel-consist').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 10,
			navText: ["",""],
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
			navText: ["",""],
			responsive: {
				0: {
					items: 1,
					mouseDrag: true,
					touchDrag: true,
					nav: false
				},
				768: {
					items: 4,
					mouseDrag: false,
					touchDrag: false,
					center: false,
					nav: true
				}
			}
		});
		$('#carousel-decor').owlCarousel({
			loop: true,
			center: true,
			margin: 10,
			navText: ["",""],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				768: {
					items: 2,
					center: false,
					nav: true
				}
			}
		});
		$('#carousel-reviews').owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 10,
			navText: ["",""],
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