$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

$(".menu-btn").click(function () {
  $("header nav").toggleClass("active");
  $(".menu-btn").toggleClass("active");
});
