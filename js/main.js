var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('slides')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

function openNav() {
  if (screen.width < 700) {
    document.getElementById('mySidepanel').style.width = '100%'
  } else {
    document.getElementById('mySidepanel').style.width = '30%'
  }
}

function closeNav() {
  document.getElementById('mySidepanel').style.width = '0'
}

function toggleIcon(e) {
  $(e.target)
    .prev('.card-header')
    .find('.more-less')
    .toggleClass('fa-angle-right fa-angle-down')
}
$('.accordion').on('hidden.bs.collapse', toggleIcon)
$('.accordion').on('shown.bs.collapse', toggleIcon)
