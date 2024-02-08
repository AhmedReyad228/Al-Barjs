/// <reference types="../Jquery/@types/jquery" />


// ? >>>>>>>>>>>>>>>>>> Purchase Increase-Decrease >>>>>>>>>>>>>>>>

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let expandable = document.getElementById("expandable");
let total = document.getElementById('total')

let expandableIncrease = 0;
let totalValue = 100;

minus.addEventListener("click", function () {
  if(expandableIncrease != 0){
    expandableIncrease--;
    expandable.innerHTML = expandableIncrease;
    total.innerHTML = expandableIncrease * totalValue;
  }
});

plus.addEventListener("click", function () {
  expandableIncrease++;
  expandable.innerHTML = expandableIncrease;
  total.innerHTML = expandableIncrease * totalValue;
});







// ? >>>>>>>>>>>>>>>>>> Mode >>>>>>>>>>>>>>>>

const mode = document.getElementById("mode");

if (localStorage.getItem("theme") != null) {
  const themeData = localStorage.getItem("theme");
  if (themeData === "light") {
    mode.classList.replace("fa-sun", "fa-moon");
  } else {
    mode.classList.replace("fa-moon", "fa-sun");
  }
  document.querySelector("html").setAttribute("data-theme", themeData);
}

function myMode() {
  if (mode.classList.contains("fa-sun")) {
    document.querySelector("html").setAttribute("data-theme", "light");
    mode.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    document.querySelector("html").setAttribute("data-theme", "dark");
    mode.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}










// ? >>>>>>>>>>>>>>>>>> On Start >>>>>>>>>>>>>>>>

// AOS Plugin fire on start
AOS.init(); 

$(function () {
  $(".loading .loader").fadeOut(1000, function () {
    $(".loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });

  // Owl Carousel fire on start
  $(".owl-carousel").owlCarousel();
});






// ? >>>>>>>>>>>>>>>>>> Owl - Carousel >>>>>>>>>>>>>>>>

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});






// ? >>>>>>>>>>>>>>>>>> Nav-Link >>>>>>>>>>>>>>>>

$(".nav-link").on("click", function () {
  console.log("Hello");
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});





// ? >>>>>>>>>>>>>>>>>> Social >>>>>>>>>>>>>>>>

let socialBackground = $(".social-box");

socialBackground.eq(0).css("backgroundImage", "url(./images/linked.webp)");
socialBackground.eq(1).css("backgroundImage", "url(./images/facebook.png)");
socialBackground.eq(2).css("backgroundImage", "url(./images/whatsapp.png)");
socialBackground.eq(3).css("backgroundImage", "url(./images/twitter.jpeg)");
socialBackground.eq(4).css("backgroundImage", "url(./images/copy.png)");


