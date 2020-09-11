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

// modal
$(function () {
  var winScrollTop;
  $(".modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target"); // 通过data-target="modal01"和id一一对应
      var modal = document.getElementById(target); //获取对应的id
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

// fade in 
$(function () {
  $('.basic-info').css('opacity', '0');
  $('.ability').css('opacity', '0');
  $(window).scroll(function () {
    $('.basic-info').each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $('.basic-info').addClass('animate__animated animate__fadeIn');
        $('.ability').addClass('animate__animated animate__fadeIn').css('animation-delay', '.4s');
      }
    })
  })
});

$(function () {
  $('.box02').css('opacity', '0');
  $(window).scroll(function () {
    $(".box02").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 7) {
        $('.box02').addClass('animate__animated animate__fadeIn').css('animation-delay', '.3s');
      }
    })
  })
});

$(function () {
  $('.box03').css('opacity', '0');
  $(window).scroll(function () {
    $(".box03").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 7) {
        $('.box03').addClass('animate__animated animate__fadeIn').css('animation-delay', '.3s');
      }
    })
  })
});

$(function () {
  $('.wider').css('opacity', '0');
  $(window).scroll(function () {
    $(".wider").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 7) {
        $('.wider').addClass('animate__animated animate__fadeIn').css('animation-delay', '.3s');
      }
    })
  })
});