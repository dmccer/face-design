(function () {
	var $carouselContainer = $('.carousel');
	var $carouselListContainer = $('.carousel .carousel-list');
	var $carouselList = $('.carousel .carousel-item')

	var $prevBtn = $('.carousel .prev-item');
	var $nextBtn = $('.carousel .next-item');

	var len = $carouselList.length;
	var currentItemIndex = 0;

	$carouselContainer.on({
		'mouseenter': function () {
			$prevBtn.fadeIn();
			$nextBtn.fadeIn();
		},
		'mouseleave': function () {
			$prevBtn.fadeOut();
			$nextBtn.fadeOut();
		}
	});

	$nextBtn.on('click', function () {
		if (currentItemIndex >= len - 1) {
			currentItemIndex = 0;
		} else {
			currentItemIndex++;
		}

		$carouselListContainer.animate({
			left: -currentItemIndex * 1000
		}, 800);
	});

	$prevBtn.on('click', function () {
		if (currentItemIndex <= 0) {
			currentItemIndex = len - 1;
		} else {
			currentItemIndex--;
		}

		$carouselListContainer.animate({
			left: -currentItemIndex * 1000
		}, 800);
	});

	$carouselContainer.scroll(function () {
		var top = $carouselContainer.scrollTop() + 200;

		$prevBtn.css({
			top: top
		});
		$nextBtn.css({
			top: top
		})
	})
})();