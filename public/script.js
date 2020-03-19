$(function() {
  var stickyNav = function() {
    if ($(window).scrollTop()) {
      $(".navbar-container").addClass("sticky-navbar");
    } else {
      $(".navbar-container").removeClass("sticky-navbar");
    }
  };

  stickyNav();
  $(window).on("resize", stickyNav);
  $(window).scroll(stickyNav);
});

function copyText(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
