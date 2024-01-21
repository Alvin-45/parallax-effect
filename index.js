// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);
  
//2ns fn

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   var mustang1 = document.querySelector(".mustang");

//   for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;

//       if (elementTop < windowHeight - elementVisible) {
//           reveals[i].classList.add("active");
//           // Move the mustang element to the right by adjusting margin-left
//           mustang1.style.marginLeft = (window.scrollY / 2) + 'px';
//       } else {
//           reveals[i].classList.remove("active");
//       }
//   }
// }

// window.addEventListener("scroll", reveal);


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var mustang = document.querySelector(".mustang");

  // Check if the mustang element is in the viewport
  var mustangTop = mustang.getBoundingClientRect().top;
  var mustangVisible = window.innerHeight - 150;

  if (mustangTop < mustangVisible) {
      // Show the reveal elements immediately
      for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.add("active");
      }

      // Move the mustang element to the right based on scroll position
      mustang.style.marginLeft = (window.scrollY*1.2) + 'px';
  } else {
      // Hide the reveal elements
      for (var i = 0; i < reveals.length; i++) {
          reveals[i].classList.remove("active");
      }
  }
}

// Call the reveal function initially to check if mustang is in the viewport
reveal();

// Add a scroll event listener to handle the movement and reveal on scroll
window.addEventListener("scroll", reveal);



//part2
// Your JavaScript file (script.js)

document.addEventListener('DOMContentLoaded', function () {
  var frontImage = document.querySelector('.front');
  var secPart = document.querySelector('.secpart');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function revealImage() {
      if (isElementInViewport(secPart)) {
          frontImage.style.opacity = '1';
      }
  }

  // Initial check in case the page is already scrolled
  revealImage();

  // Add scroll event listener
  window.addEventListener('scroll', revealImage);
});



