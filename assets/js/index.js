$(function () {
	var caseList = [
		[
			{
				imgName: 'product-1',
				url: 'product-1'
			},
			{
				imgName: 'product-2',
				url: 'product-2'
			},
			{
				imgName: 'product-3',
				url: 'product-3'
			},
			{
				imgName: 'product-4',
				url: 'product-4'
			},
			{
				imgName: 'product-5',
				url: 'product-5'
			},
			{
				imgName: 'product-6',
				url: 'product-6'
			}
		],
		[
			{
				imgName: 'product-1',
				url: 'product-1'
			},
			{
				imgName: 'product-2',
				url: 'product-2'
			},
			{
				imgName: 'product-3',
				url: 'product-3'
			},
			{
				imgName: 'product-4',
				url: 'product-4'
			},
			{
				imgName: 'product-5',
				url: 'product-5'
			},
			{
				imgName: 'product-6',
				url: 'product-6'
			}
		],
		[
			{
				imgName: 'product-1',
				url: 'product-1'
			},
			{
				imgName: 'product-2',
				url: 'product-2'
			},
			{
				imgName: 'product-3',
				url: 'product-3'
			},
			{
				imgName: 'product-4',
				url: 'product-4'
			},
			{
				imgName: 'product-5',
				url: 'product-5'
			},
			{
				imgName: 'product-6',
				url: 'product-6'
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