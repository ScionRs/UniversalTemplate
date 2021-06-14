$(document).ready(function() {
    $('ul.works__tabs').on('click', 'li:not(.works__tab-active)', function () {
        $(this)
            .addClass('works__tab-active').siblings().removeClass('works__tab-active')
            .closest('div.container').find('div.works__items').removeClass('works__items-active')
            .eq($(this).index()).addClass('works__items-active');
    });
});