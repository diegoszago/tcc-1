window.onload = function() {

  var nav = document.getElementById("nav");
  var hamburgerIcon = document.getElementById("hamburger-menu");
  var closeIcon = document.getElementById("close-icon");

  hamburgerIcon.onclick = function() {
    nav.classList.add('c-nav--show');
  }

  closeIcon.onclick = function() {
    nav.classList.remove('c-nav--show');
  };

  console.log('1');
};
