// back to top
$(function () {
  var appear = false;
  var pagetop = $("#page_top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: "70px",
          },
          300
        );
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: "-180px",
          },
          300
        );
      }
    }
  });
  pagetop.click(function () {
    $("body, html").animate(
      {
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
    $("body,html").stop().animate(
      {
        scrollTop: winScrollTop,
      },
      1000
    );
  });
});
