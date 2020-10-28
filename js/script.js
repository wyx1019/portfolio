// back to top
$(function () {
  var appear = false;
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
            bottom: "70px",
          },
          300
        );
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
            bottom: "-180px",
          },
          300
        );
      }
    }
  });
  pagetop.click(function () {
    $("body, html").animate({
        scrollTop: 0,
      },
      800
    ); //0.5秒かけてトップへ戻る
    return false;
  });
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  header: "#header",
  speed: 1000,
});

//modal
$(function () {
  var winScrollTop;
  $(".modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      winScrollTop = $(window).scrollTop();
    });
  });
  $(".modal-close").on("click", function () {
    $(".modal").fadeOut();
    $("body,html").stop().animate({
        scrollTop: winScrollTop,
      },
      1000
    );
  });
});

// accordion
$(function () {
  $(".toggle").hover(function(){
    $(".fa-chevron-down").css('transform', 'translateY(5px)');
    },function(){
      $(".fa-chevron-down").css('transform', 'translateY(0)');
  });

  $(".toggle").on("click", function () {
    $(".graphics").slideToggle();
    // $(".fa-chevron-down").css('transform', 'rotate(180deg)');
  });
});

// fade in

$(function () {
  $(window).scroll(function () {
      $('.fadeIn').each(function () {
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight) {
              $(this).css('opacity', '1');
              $(this).css('transform', 'translateY(0)');
          }
      });
  });
});

$(window).on('load', function () {
  $('.topFadeIn').css('opacity', '1');
  $('.topFadeIn').css('transform', 'translateX(0)');
});