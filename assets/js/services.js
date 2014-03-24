(function() {
    var debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = Date.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        };

        return function() {
            context = this;
            args = arguments;
            timestamp = Date.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }

            return result;
        };
    };

    var $banner = $('.banner');
    var $mask = $('.banner .mask');
    var $baseDesc = $('.base-description');
    var $tabs = $('.hover-switch .tabs');

    $tabs.on('mouseenter', 'li', debounce(function() {
    	var bgImgSrc = $(this).attr('data-imgsrc');

        $baseDesc.addClass('hide');

        $mask.removeClass('hide');

        $banner.css({
            backgroundColor: '#fff',
            backgroundImage: 'url(' + bgImgSrc + ')'
        });
    }, 200));

    $tabs.on('mouseleave', 'li', function() {
        $banner.css({
            background: 'none'
        });

        $baseDesc.removeClass('hide');

        $mask.addClass('hide');
    });

})()
