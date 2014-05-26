(function () {
	var getQSParam = function (name) {
		var searchStr = location.search;
		searchStr = searchStr.substr(1);

		var sa = searchStr.split('&');

		var o = {};
		var kvArr;

		for (var i = 0; i < sa.length; i++) {
			kvArr = sa[i].split('=');

			o[kvArr[0]] = (kvArr.length === 2 ? kvArr[1] : '');
		}

		return o[name];
	}

	var $carouselContainer = $('.carousel');
	var $carouselListContainer = $('.carousel .carousel-list');
	var $carouselList = $('.carousel .carousel-item')

	var $prevBtn = $('.carousel .prev-item');
	var $nextBtn = $('.carousel .next-item');

	var len = $carouselList.length;

	var currentItemIndex = parseInt(getQSParam('i'), 10) - 1;

	var animate = function (currentItemIndex) {
		$carouselListContainer.css({
			left: -currentItemIndex * 1000
		});

		$carouselContainer.height($carouselList.eq(currentItemIndex).height());
		$(window).scrollTop(569);
	}

	setTimeout(function () {
		// $carouselContainer.height($carouselList.eq(currentItemIndex).outerHeight());
		animate(currentItemIndex);
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

		animate(currentItemIndex);
	});

	$prevBtn.on('click', function () {
		if (currentItemIndex <= 0) {
			return;
		}
		
		currentItemIndex--;

		animate(currentItemIndex);
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