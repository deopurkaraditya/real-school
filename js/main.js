function openNav() {
  if (screen.width < 700) {
    document.getElementById('6').style.width = '100%'
  } else {
    document.getElementById('realSidepanel').style.width = '30%'
  }
}

function closeNav() {
  document.getElementById('realSidepanel').style.width = '0'
}

function toggleIcon(e) {
  $(e.target)
    .prev('.card-header')
    .find('.more-less')
    .toggleClass('fa-angle-right fa-angle-down')
}

$('.skill-slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 980, // tablet breakpoint
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 480, // mobile breakpoint
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
})

$(document).ready(function () {
  if ($('.creative-thinking').hasClass('slick-current')) {
    $('.slick-prev').hide()
  }
})

$(document).on('click', 'body *', function () {
  if ($('.creative-thinking').hasClass('slick-current')) {
    $('.slick-prev').hide()
  } else {
    $('.slick-prev').show()
  }
})

// $('.badges-slider-mobile').slick({
//   responsive: [
//     {
//       lazyLoad: 'ondemand',
//       breakpoint: 480, // mobile breakpoint
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         dots: true,
//       },
//     },
//   ],
// })

if (window.matchMedia('(max-width: 768px)').matches) {
  /* the viewport is less than 768 pixels wide */
  $('.badges-slider-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  })

  $('.card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  })
  $('.card-deck-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  })
}
