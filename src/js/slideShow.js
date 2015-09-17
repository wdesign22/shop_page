$(document).ready(function() {
    (function () {

        $('.b-slider__li').on('click', function (e) {

            var
                $this = $(this),
                container = $this.closest('.b-slider__big-picture'),
                path = $this.find('img').attr('src'),
                item = $this.closest('li');

            if (!item.hasClass('active')) {

                item.addClass('active').siblings().removeClass('active');

                container.find('.b-slider__big-picture img').fadeOut(function () {
                    $(this).attr('src', path).fadeIn();
                });
            }
        });
    }());
});