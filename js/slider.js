$(document).ready(function () {
    //$('.single-item').slick();

    $('.single-item').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.slider-inner').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});

