(function () {
	var $carouselContainer = $('.carousel');
	var $carouselListContainer = $('.carousel .carousel-list');
	var $carouselList = $('.carousel .carousel-item')

	var $prevBtn = $('.carousel .prev-item');
	var $nextBtn = $('.carousel .next-item');

	var len = $carouselList.length;
	var currentItemIndex = 0;

	setTimeout(function () {
		$carouselContainer.height($carouselList.eq(0).outerHeight());
	}, 1000);

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
			return;
		}
		
		currentItemIndex++;

		$carouselListContainer.css({
			left: -currentItemIndex * 1000
		});

		$carouselContainer.height($carouselList.eq(currentItemIndex).height());
		$(window).scrollTop(0)
	});

	$prevBtn.on('click', function () {
		if (currentItemIndex <= 0) {
			return;
		}
		
		currentItemIndex--;

		$carouselListContainer.css({
			left: -currentItemIndex * 1000
		});

		$carouselContainer.height($carouselList.eq(currentItemIndex).height());
		$(window).scrollTop(0)
	});

	$(window).scroll(function () {
		var top = $(window).scrollTop() - 200;

		$prevBtn.css({
			top: top
		});
		$nextBtn.css({
			top: top
		})
	})
})();