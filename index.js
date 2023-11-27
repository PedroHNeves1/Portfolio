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

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 250) {
      $(".seta").addClass("sticky");
    } else {
      $(".seta").removeClass("sticky");
    }
  });
});
