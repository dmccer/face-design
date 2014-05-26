(function() {
    var debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;

        var later = function() {
            var last = new Date().getTime() - timestamp;
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
            timestamp = new Date().getTime();
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

    var $bannerBg = $('.banner .bgcontainer');
    var $mask = $('.banner .mask');
    var $baseDesc = $('.base-description');
    var $tabs = $('.hover-switch .tabs');

    var enterItem = function() {
        $baseDesc.stop();
        $mask.stop();
        $bannerBg.stop();

        var bgImgSrc = $(this).attr('data-imgsrc');

        $baseDesc.animate({
            opacity: 0
        }, {duration: 500, queue: true});

        $mask.removeClass('hide').animate({
            opacity: 0.6
        }, {duration: 1000, queue: true});

        $bannerBg.css({
            backgroundImage: 'url(' + bgImgSrc + ')'
        }).animate({
            opacity: 1
        }, {
            duration: 1000,
            queue: true
        });
    };

    var leaveItem = function () {
        $baseDesc.stop();
        $mask.stop();
        $bannerBg.stop();

        $bannerBg.animate({
            opacity: 0
        }, {
            duration: 500,
            queue: true,
            complete: function () {
                $bannerBg.css({
                    background: 'none'
                });
            }
        });

        $baseDesc.animate({
            opacity: 1
        }, 500);

        $mask.animate({
            opacity: 0
        }, {
            duration: 500,
            queue: true,
            complete: function () {
                $mask.addClass('hide')
            }
        });
    };

    $tabs.on('mouseenter', '.icon-view', debounce(enterItem, 500));

    $tabs.on('mouseleave', 'li', leaveItem);

    $tabs.on('mouseleave', debounce(leaveItem, 500))
})()
