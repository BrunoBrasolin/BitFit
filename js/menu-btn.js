let menuOpen = false;

$(".menu-btn").click(() => {
  if (!$(".menu-btn")) {
    $(".menu-btn").toggleClass("open");
    $(".navbar-links-mobile").toggleClass("show");
    menuOpen = true;
  } else {
    $(".menu-btn").toggleClass("open");
    $(".navbar-links-mobile").toggleClass("show");
    menuOpen = false;
  }
});
