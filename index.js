// THIS IS THE REVEAL SCRIPT FOR MAIN ON INDEX.HTML

function reveal() {
    var reveals = document.querySelectorAll(".main");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("main-animation");
      } else {
        reveals[i].classList.remove("main-animation");
      }
    }
  }

// THIS IS THE REVEAL SCRIPT FOR ABOUT.HTML

// function reveal() {
//     var reveals = document.querySelectorAll(".");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 10;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("main-animation");
//       } else {
//         reveals[i].classList.remove("main-animation");
//       }
//     }
//   }

// THIS IS THE SLIDESHOW ON THE INDEX PAGE

  window.addEventListener("scroll", reveal);

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}