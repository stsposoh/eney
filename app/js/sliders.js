const sliderThumbs = jQuery('.js-slider-thumbs');
const sliderMain = jQuery('.js-main-slider');
const filters = jQuery('.js-filter');

// main slider
sliderMain.slick({
  swipe: false,
  touchMove: false,
  centerMode: true,
  variableWidth: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  arrows: false,
  fade: true,
  autoplay: false,
  asNavFor: '.js-slider-thumbs'
});

// slider previews
sliderThumbs.slick({
  asNavFor: '.js-main-slider',
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  dots: false,
  accessibility: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: jQuery('.js-slider-arrow-prev'),
  nextArrow: jQuery('.js-slider-arrow-next'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 576,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 6
      }
    }, {
      breakpoint: 500,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 5
      }
    }, {
      breakpoint: 400,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 4
      }
    }
  ]
});

// lightbox
sliderMain.slickLightbox({
  src: 'src',
  itemSelector: '.product-page__slider-item img'
});

// filtering
filters.on('click', function () {
  let chosenColor = jQuery(this).data('slider-color');

  if (jQuery(this).hasClass('--active')) {
    jQuery(this).removeClass('--active');
    jQuery('.js-slider-thumbs, .js-main-slider').slick('slickUnfilter').slick('refresh');

  } else {
    filters.each((i, el) => jQuery(el).removeClass('--active'));
    jQuery(this).addClass('--active');

    switch (chosenColor) {
      case 'black':
        doFiltering('black');
        break;
      case 'green':
        doFiltering('green');
        break;
      case 'red':
        doFiltering('red');
        break;
      case 'white':
        doFiltering('white');
        break;
    }
  }

  function doFiltering (color) {
    jQuery('.js-slider-thumbs, .js-main-slider').slick('slickUnfilter');
    jQuery('.js-slider-thumbs, .js-main-slider').slick('slickFilter', `[data-product-color="${color}"]`).slick('refresh');
    jQuery('.js-slider-thumbs, .js-main-slider').slick('slickGoTo', 0);
  }
});
