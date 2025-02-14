(function ($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	// Product Page jump to comments
	$("#jump_to_review").click(function () {
		$('#description-tab').removeClass('active')
		$('#description').removeClass('show active')

		$('#comments-tab').addClass('active')
		$('#comments').addClass('show active')
		$("html").animate(
			{
				scrollTop: $("#product-tab").offset().top
			},
			800 //speed
		);
	});

	$(document).scroll(function () {
		// console.log($(document).scrollTop());
		if ($(document).scrollTop() > 800) {
			$('#Quick_add_to_cart').addClass('quick-add-to-cart-visible')
		}
		if ($(document).scrollTop() < 800) {
			$('#Quick_add_to_cart').removeClass('quick-add-to-cart-visible')
		}
	})

	$('[data-dismiss="Quick_add_to_cart"]').on('click', function () {
		$('#Quick_add_to_cart').addClass('quick-add-to-cart-hidden');
	})

	/******  nav submenu  ******** */
	$(document).ready(function () {


		$('.main-nav li:first-child').on('mouseover', function () {
			console.log($(".main-nav").width())
			$(".sub-menu").css({
				'width': ($(".main-nav").width() + 'px'),
			});
			$('.wrap-content').addClass('blur');
		});
		$('.main-nav li:first-child').on('mouseleave', function () {
			$('.wrap-content').removeClass('blur');
		});


	})
	$('.sub-menu .nav-pills button').on('click', function () {
		$(".sub-menu .nav-pills").css({
			"height": 50 + $(".sub-menu .tab-content ").height() + 'px',
		});
	});


	var dropdownIcon = '<i class="text-white fa-sharp fa-solid fa-caret-down"></i>';
	$('ul.submenu').before('<span class="drop-mobile-menu-icon">' + dropdownIcon + '</span>')
	$('.drop-mobile-menu-icon').on('click', function () {
		$(this).toggleClass('drop-mobile-menu-icon-rotate')
		$(this).next('ul').slideToggle()
	});

	/////////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function () {
		var $this = $(this),
			$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function () {
		var $this = $(this),
			$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
		swipe: true,
		infinite: true,
		speed: 300,
		dots: false,
		arrows: true,
		fade: true,
		asNavFor: '#product-imgs',
	});

	// Product imgs Slick
	$('#product-imgs').slick({
		swipe: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
		asNavFor: '#product-main-img',
		responsive: [{
			breakpoint: 991,
			settings: {
				vertical: false,
				arrows: false,
				dots: true,
			}
		},
		]
	});


	const myModalEl = document.getElementById('staticBackdrop')
	myModalEl.addEventListener('shown.bs.modal', event => {
		// do something...

		// Quick View Modal Product Main img Slick 
		$('#quick-view-product-main-img').slick({
			swipe: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			fade: true,
			asNavFor: '#quick-view-product-imgs',
		});

		// Quick View Modal Product imgs Slick 
		$('#quick-view-product-imgs').slick({
			swipe: true,
			touchMove: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: 0,
			vertical: true,
			asNavFor: '#quick-view-product-main-img',
			responsive: [{
				breakpoint: 991,
				settings: {
					vertical: false,
					arrows: false,
					dots: true,
				}
			},
			]
		});
	})

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	$('.input-number').each(function () {
		var $this = $(this),
			$input = $this.find('input[type="number"]'),
			up = $this.find('.qty-up'),
			down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this, value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this, value)
		})
	});
	$('#input-number-cart').each(function () {
		var $this = $(this),
			$input = $this.find('input[type="number"]'),
			up = $this.find('.qty-up'),
			down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
		
		})
	});

	// var priceInputMax = document.getElementById('price-max'),
	// 	priceInputMin = document.getElementById('price-min');

	// priceInputMax.addEventListener('change', function () {
	// 	updatePriceSlider($(this).parent(), this.value)
	// });

	// priceInputMin.addEventListener('change', function () {
	// 	updatePriceSlider($(this).parent(), this.value)
	// });

	function updatePriceSlider(elem, value) {
		if (elem.hasClass('price-min')) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if (elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	// var priceSlider = document.getElementById('price-slider');
	// if (priceSlider) {
	// 	var sliderRange = noUiSlider.create(priceSlider, {
	// 		start: [0, 1000000],
	// 		connect: true,
	// 		step: 100,
	// 		range: {
	// 			'min': 0,
	// 			'max': 1000000
	// 		},
	// 		format: wNumb({
	// 			decimals: 0,
	// 			thousand: ',',
	// 		})
	// 	});
	// 	priceSlider.noUiSlider.on('update', function (values, handle) {
	// 		var value = values[handle];
	// 		handle ? priceInputMax.value = value : priceInputMin.value = value
	// 	});
	// }

	// PRICE RANGE
	let priceRanges = document.querySelectorAll('.js-price-range');

	priceRanges.forEach(el => {
	   let downPriceInput = el.closest('.filter-price').querySelector('.js-price-down'),
			 upPriceInput   = el.closest('.filter-price').querySelector('.js-price-up'),
			 inputs         = [downPriceInput, upPriceInput];
 
 
		 //get maxPrice for slider price
		 const maxPrice = +upPriceInput.getAttribute('data-max');
		 upPriceInput.value = maxPrice.toLocaleString() + 'تومان';
 
		 //Init price range slider
		 noUiSlider.create(el, {
			 range: {
				 'min': 0,
				 'max': maxPrice
			 },
			 connect  : true,
			 start    : [0, maxPrice],
			 step     : 1
		 });
 
		 //Update value after scroll pointer in slider
		 el.noUiSlider.on('update', values => {
			 let [downPrice, upPrice] = values;
 
			 downPrice = Number(downPrice).toLocaleString();
			 upPrice   = Number(upPrice).toLocaleString();
 
			 downPriceInput.value = downPrice;
			 upPriceInput.value   = upPrice;
		 });
 
	 });
 

})(jQuery);