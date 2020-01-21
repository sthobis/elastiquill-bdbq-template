$(function() {
  var stickyNav = function() {
    if ($(window).scrollTop()) {
      $(".navbar-container").addClass("fixed-top");
    } else {
      $(".navbar-container").removeClass("fixed-top");
    }
  };

  stickyNav();
  $(window).on("resize", stickyNav);
  $(window).scroll(stickyNav);
})();
