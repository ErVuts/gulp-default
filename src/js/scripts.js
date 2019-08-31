$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		swipe: true,
    	touchMove: true,
    	adaptiveHeight: true,
    	speed: 500,
    	touchThreshold: 1
	});

	addWheelEvent();

	// $('.slider').on('beforeChange', function() {
	// 	$('body').off('wheel', '.slider');
	// })

	$('.slider').on('afterChange', function() {
		setTimeout(function(){
			console.log('s;dks;ldk');
			addWheelEvent();
		}, 500);
	});

	// let wheel;
	// let oldDate = new Date();

	function addWheelEvent() {
		$('body').one('mousewheel', '.slider', function(e) {

				let $slider = e.currentTarget.slick.$slider;

				if(e.deltaY > 0) {
					$slider.slick('slickPrev');
				} else {
					$slider.slick('slickNext');
				}
		});
	}
});