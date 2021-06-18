$( document ).ready(function() {
    // Our Products Slider
$('.ProductSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<img src="./assets/images/arrows/slide-right-arrow.svg" alt="" class="img-fluid ProductsSlideArrow ProductsSlideRightarrow">',
    prevArrow: '<img src="./assets/images/arrows/slide-left-arrow.svg" alt="" class="img-fluid ProductsSlideArrow ProductsSlideLeftarrow">',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
