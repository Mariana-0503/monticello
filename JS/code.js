$(document).ready(function() {
    $(".js_news__slider").slick({
      autoplay: false,
      dots: true,
      infinite: true,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false
    });
    $(".js_prev").click(function() {
      $(".js_news__slider").slick("slickPrev");
    });
    $(".js_next").click(function() {
      $(".js_news__slider").slick("slickNext");
    });
  
    //show modal on .news click event
    $(".news__card").on("click", function() {
      const src = $(this)
        .find(".news__img")
        .attr("src");
      const title = $(this)
        .find(".news__title")
        .text();
      const txt = $(this)
        .find(".news__text")
        .text();
      const author = $(this)
        .find(".author")
        .clone();
      $(".showNews__img").attr("src", src);
      $(".showNews__title").html(title);
      $(".showNews__text").html(txt);
      $(".showNews__author").html(author);
      $(".showNews").css("display", "flex");
    });
    $(".showNews__close").click(function() {
      $(".showNews").css("display", "none");
    });
});