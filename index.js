$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrolly > 20) {
      $("header").addClass("sticky");
    } else {
      $("header").remove("sticky");
    }
  });
});
