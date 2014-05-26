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
		],
		[
			{
				imgName: 'product-13.jpg',
				url: 'product-13',
				title: '欧林净水器设计方案'
			},
			{
				imgName: 'product-14.jpg',
				url: 'product-14',
				title: '路由器设计方案'
			},
			{
				imgName: 'product-15.jpg',
				url: 'product-15',
				title: '松下概念空调设计方案'
			},
			{
				imgName: 'product-16.jpg',
				url: 'product-16',
				title: '格力空调遥控器设计'
			},
			{
				imgName: 'product-17.jpg',
				url: 'product-17',
				title: '利仁电饼铛设计方案'
			},
			{
				imgName: 'product-18.jpg',
				url: 'product-18',
				title: 'Mobile Air Conditioning'
			}
		]
	];

	var $caseList = $('#case-list');
	var $tplCaseList = $('#tpl-case-list');

	var $reduceCaseBtn = $('.reduce-case');
	var $increaseCase = $('.increase-case');

	var offset = 6;
	var addedImgEls = [];

	$increaseCase.on('click', function () {
		if (addedImgEls.length >= caseList.length) {
			return;
		}

		var partData = caseList[addedImgEls.length];

		var $part = $(tmpl($tplCaseList.html(), { 'caseList': partData, offset: offset }));
		addedImgEls.push($part);
		$caseList.append($part);

		offset += partData.length;
	});

	$reduceCaseBtn.on('click', function () {
		if (addedImgEls.length === 0) {
			return;
		}

		addedImgEls.pop().remove();
	});
});