$(function () {
	var caseList = [
		[
			{
				imgName: 'product-7.jpg',
				url: 'product-7',
				title: '奥普壁挂式浴霸'
			},
			{
				imgName: 'product-8.jpg',
				url: 'product-8',
				title: '美的静饮水机'
			},
			{
				imgName: 'product-9.jpg',
				url: 'product-9',
				title: 'Headset 耳机'
			},
			{
				imgName: 'product-10.jpg',
				url: 'product-10',
				title: '格力变频空调'
			},
			{
				imgName: 'product-11.jpg',
				url: 'product-11',
				title: '正克即热式热水器'
			},
			{
				imgName: 'product-12.jpg',
				url: 'product-12',
				title: '中信锅具设计'
			}
		]
	];

	var $caseList = $('#case-list');
	var $tplCaseList = $('#tpl-case-list');

	var $reduceCaseBtn = $('.reduce-case');
	var $increaseCase = $('.increase-case');

	var offset = 0;
	var addedImgEls = [];

	$increaseCase.on('click', function () {
		if (addedImgEls.length >= caseList.length) {
			return;
		}

		var $part = $(tmpl($tplCaseList.html(), { 'caseList': caseList[addedImgEls.length] }));
		addedImgEls.push($part);
		$caseList.append($part);
	});

	$reduceCaseBtn.on('click', function () {
		if (addedImgEls.length === 0) {
			return;
		}

		addedImgEls.pop().remove();
	});
});