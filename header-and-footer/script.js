
window.onscroll = function() {myFunction()};
        
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function scrollToSection() {
var section = document.getElementById('section-to-scroll');
section.scrollIntoView({ behavior: 'smooth' });
}

