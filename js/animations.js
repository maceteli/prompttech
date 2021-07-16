//Navbar scroll effect
window.onscroll = function() {scrollFunction()};
//to show navbar on mobile view
var btn2 = document.getElementById('menu-btn');

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


function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'flex') {
    e.style.display = 'none';
  }
  else {
    e.style.display = 'flex';
  }
  console.log('clicked');
  return;
}