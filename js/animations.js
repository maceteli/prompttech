//Navbar scroll effect
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("sticky");
  } else {
    document.getElementById("header").classList.remove("sticky");
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("content").classList.add("hero-fix");
  } else {
    document.getElementById("content").classList.remove("hero-fix");
  }
}