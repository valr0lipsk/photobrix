window.onscroll = function () {
  let header = document.querySelector(".header");
  let headerBody = document.querySelector(".container--header");
  if (window.pageYOffset == 0) {
    header.classList.remove("fixed");
  } else {
    header.classList.add("fixed");
  }
};

$(document).ready(function () {
  $("#expand").click(function () {
    $(".menu--mobile__expand").addClass("block");
  });

  $("#close-menu").click(function () {
    $(".menu--mobile__expand").removeClass("block");
  });

  $("#settings").click(function () {
    $("#popup-settings").addClass("flex");
  });

  $("#close-popup").click(function () {
    $("#popup-settings").removeClass("flex");
  });

  $("#code").click(function () {
    $("#popup-code").addClass("flex");
  });

  $("#close-code").click(function () {
    $("#popup-code").removeClass("flex");
  });

  $("#more").click(function () {
    $("#popup-menu").toggleClass("block");
  });
});
