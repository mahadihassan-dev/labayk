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
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
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

  // Our Recipies slides
  $('.recipiesSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<img src="./assets/images/arrows/slide-right-arrow.svg" alt="" class="img-fluid ProductsSlideArrow ProductsSlideRightarrow">',
    prevArrow: '<img src="./assets/images/arrows/slide-left-arrow.svg" alt="" class="img-fluid ProductsSlideArrow ProductsSlideLeftarrow">',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
