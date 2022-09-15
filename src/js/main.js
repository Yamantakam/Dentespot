//= jquery.js
//= slick.js
//= bootstrap.min.js



// Открытие/закрытие бокового меню

var interactSidebar = function() {
  var body = document.querySelector("body");
  var toggle = document.querySelector(".main-container__toggle");
  var sidebar = document.querySelector(".sidebar");
  var user = document.querySelector(".user");
  var userToggle = user.querySelector(".user__title");

  toggle.addEventListener("click", function() {
    sidebar.classList.toggle("sidebar--opened");
    body.classList.toggle("body--overflow");
  });

  userToggle.addEventListener("click", function () {
    user.classList.toggle("user--opened");
  });
}

interactSidebar();



// Измнение цвета вкладки в Chrome. Значение переменной можно менять в variables.less

var changeTabColor = function() {
  var root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  var metaTheme = document.querySelector("meta[name=theme-color]");
  var themeColor = rootStyle.getPropertyValue("--theme-color");
  metaTheme.setAttribute("content", themeColor);
};

changeTabColor();






var keksik = document.querySelectorAll(".keksik .clinic__service-header");
var mainkeksik = document.querySelectorAll(".keksik");
var keksik2 = document.querySelector(".keksik2");
var form = document.querySelector(".form--search");
var fields1 = document.querySelectorAll(".form__label--checkbox");

var openPopup = function(item) {
  item.classList.add("keksik--opened");
  // setTimeout(function() {
  //   item.classList.add("keksik--obvious"); 
  // }, 350
};

var closePopup = function(item) {
  item.classList.remove("keksik--opened");
  // setTimeout(function() {
  //   item.classList.remove("keksik--opened");
  // }, 150
};

// function openPopup() {
//   search.classList.add("main-header__form_opened");
//   toggle.classList.add("main-header__toggle_opened");
//   setTimeout(function() {
//     search.classList.add("main-header__form_obvious"); 
//   }, 50
// )};

// var kek = function () {
//   search.classList.remove("main-header__form_obvious");
//   toggle.classList.remove("main-header__toggle_opened");
//   setTimeout(function() {
//     search.classList.remove("main-header__form_opened");
//   }, 350
// )};

var getKeks = function(item, second) {
  item.addEventListener("click", function() {
    if(second.classList.contains("keksik--opened")) {
      closePopup(second);
    } else {
      openPopup(second);
    }
  });
};

for(var i = 0; i < keksik.length; i++) {
  getKeks(keksik[i], mainkeksik[i]);
}



$(document).on('click','.banner__btn',function(e) {
  e.preventDefault();
  var poster = $(this);

  var wrapper = poster.closest('.banner__video');
  videoPlay(wrapper);
});

function videoPlay(wrapper) {
  var iframe = wrapper.find('.banner__frame');
  var src = iframe.data('src');
  wrapper.addClass('videoWrapperActive');
  iframe.attr('src',src);
}



$('.banner--slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});





var service = document.querySelector(".service");
var items = document.querySelectorAll(".service__point");
// var types = document.querySelectorAll(".service__type");
var types = document.querySelectorAll(".service__head");
var inner = document.querySelector(".service__inner");



var openPopup2 = function(itemr) {
  Array.from(items).forEach(function (item) {
  item.classList.remove('service__point--opened');
  inner.classList.remove('service__inner--opened');
});
  itemr.classList.add("service__point--opened");
  inner.classList.add('service__inner--opened');
};

var closePopup2 = function(item) {
  item.classList.remove("service__point--opened");
  inner.classList.remove('service__inner--opened');
};


var getPoints = function(item, second) {
  item.addEventListener("click", function() {
    if(second.classList.contains("service__point--opened")) {
      closePopup2(second);
    } else {
      openPopup2(second);
    }
  });
};

for(var i = 0; i < types.length; i++) {
  getPoints(types[i], items[i]);
}



$('.comment__slider').slick({
  slidesToShow: 2,
  infinite: false,
  slidesToScroll: 2,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



// var interactInfo = function() {
//   var buttons = document.querySelectorAll(".info--main .info__btn");
// }
// $(".info--question .info__btn").on("click", function(e) {
//         $(".info--question .info__btn").toggleClass("btn--gray");
        
//         $(".info--question .info__features").toggleClass("info__features--opened");
// });

// $(".info--main .info__btn").on("click", function(e) {
//         $(".info--main .info__btn").toggleClass("btn--gray");
//         $(".info--question .info__btn").toggleClass("btn--blue");
//         $(".info--main .info__features").toggleClass("info__features--opened");
// });

$('.info--main .info__actions').on('click', '.btn', function() {
  $(this).addClass('info__btn--active').siblings().removeClass('info__btn--active');
  $(".info--main .info__features").toggleClass("info__features--opened");
});


$('.info--question .info__actions').on('click', '.btn', function() {
  $(this).addClass('info__btn--active').siblings().removeClass('info__btn--active');
  $(".info--question .info__features").toggleClass("info__features--opened");
  // $(".info--question").toggleClass("info--family");
  $(".info--question").toggleClass("info--doctor");
});





var fields = document.querySelectorAll(".form__field");
var capts = document.querySelectorAll(".form__capt");

var focusField = function(item, capt) {
  item.addEventListener("focus", function() {
    capt.classList.add("form__capt--full");
  });
}

var blurField = function(item, capt) {
  item.addEventListener("blur", function() {
    if(!(item.value)) {
      capt.classList.remove("form__capt--full");
    }
  });
}

var interSearch = function () {
  for(var i = 0; i < fields.length; i++) {
    if(!(fields[i].value)) {
      focusField(fields[i], capts[i]);
      blurField(fields[i], capts[i]);
    }
  };
}

interSearch();




// document.addEventListener("DOMContentLoaded", function() {
//   $(window).resize(function() {
//   if ( $(window).width() < 768 ) {
//     var service = $('.service__point--orange');
//     service.addClass("service__point--opened");
//   }
// });

// });


function windowSize(){
    if ($(window).width() >= '995'){
        var service = $('.service__point--orange');
        var main = $('.service__inner');
    service.addClass("service__point--opened");
    main.addClass("service__inner--opened");
    }
}

// $(window).load(windowSize); // при загрузке
// $(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
$(window).on('load resize',windowSize);

// $(window).scroll(function() {

// 	$(".promo__wrap-btn").addClass("promo__wrap-btn--fixed");

// });

var resize = function() {
  page = document.querySelector(".page");
  sidebar = document.querySelector(".sidebar");
  
  if(window.innerWidth > 750) {
    if(page.classList.contains("body--overflow")) {
      page.classList.remove("body--overflow");
    }
    if(sidebar.classList.contains("sidebar--opened")) {
      sidebar.classList.remove("sidebar--opened");
    }
  }

  if(window.innerWidth > 1170) {
    if(page.classList.contains("body--overflow")) {
      page.classList.remove("body--overflow");
    }
    if(sidebar.classList.contains("sidebar--opened")) {
      sidebar.classList.remove("sidebar--opened");
    }
  }
}

window.onresize = resize;




var scrollHeader = function() {
  // 'use strict';

// var $ = window.jQuery;

$(document).ready(function() {

/*
* Hide header on scroll down, show on scroll up  
* Scroll detection
*/
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {

      var st = window.pageYOffset || document.documentElement.scrollTop;
      var headerHeight = $('.main-header').outerHeight(); //get header height

       //upscroll
      if (st < lastScrollTop) {

          if($(window).scrollTop() >= 0) {

            $('.main-header').addClass('fixed visible');

          } else {

            $('.main-header').removeClass('fixed visible');

          }

      } else {
        //downscroll

        if ($(window).scrollTop() > headerHeight) {

          $('.main-header').addClass('fixed').removeClass('visible');

        } else {

          $('.main-header').removeClass('fixed visible');

        }
      }

     lastScrollTop = st;
  }, false);
  
  
});


};
scrollHeader();