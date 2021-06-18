$(document).ready(function() {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header__menu-active');
        })
    })

    $('ul.works__tabs').on('click', 'li:not(.works__tab-active)', function () {
        $(this)
            .addClass('works__tab-active').siblings().removeClass('works__tab-active')
            .closest('div.container').find('div.works__items').removeClass('works__items-active')
            .eq($(this).index()).addClass('works__items-active');
    });

    $('.carousel__inner').slick({
        speed: 500,
        autoPlay: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
