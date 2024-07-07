/// <reference types="../@types/jquery"/>

// left menu

$(".iconbar").on("click", function () {
  $("aside .sidebar-box").animate({ width: "250px" }, 50);
  $("aside .sidebar").removeClass("d-none");
  $(".home-content, .iconbar").animate({ marginLeft: "250" }, 50);
});

$(".closebtn").on("click", function () {
  $("aside .sidebar-box").animate({ width: "0px" }, 50);
  $(".home-content,.iconbar").animate({ marginLeft: "0" }, 50);
});

$(".sidebar a").on("click", function (e) {
  let section_href = $(e.target).attr("href");
  let section_offset = $(section_href).offset().top;
  $("body , html").animate({ scrollTop: section_offset }, 2000);
});

// sliderDown
$("#sliderDown .toggel").on("click", function () {
  $(".slider-innner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

//counter
$(function () {
  count_down("2023-10-25");
});
function count_down(count_untill) {
  let date = new Date(count_untill);
  date = date.getTime() / 1000;
  let now_date = new Date();
  now_date = now_date.getTime() / 1000;
  the_diffrence_Time = date - now_date;

  let days = Math.floor(the_diffrence_Time / (24 * 60 * 60));
  let hours = Math.floor((the_diffrence_Time - days * (24 * 60 * 60)) / 3600);
  let minutes = Math.floor(
    (the_diffrence_Time - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let seconds = Math.floor(
    the_diffrence_Time - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minute").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);

}
let counter = 0;
let x = setInterval(function () {
  count_down("2023-10-25");
  counter++;
  if (counter == 150) {
    clearInterval(x);
  }
}, 1000);

//textarea

$("textarea").on("keyup", function () {
  let maxlenght = 100;
  let lenght = $("textarea").val().length;
  let number_of_chars = maxlenght - lenght;
  if (number_of_chars <= 0) {
    $(".charcter").text("your available character finished");
  } else {
    $(".charcter").text(number_of_chars);
  }
});
