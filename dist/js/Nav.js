/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  $('.MenuMask').toggleClass("menu-active");
  $('menu-active').toggleClass(".MenuMask");
  
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  $('menu-active').toggleClass(".MenuMask");
  $('.MenuMask').toggleClass("menu-active");
}