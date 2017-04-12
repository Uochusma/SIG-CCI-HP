//ページ内リンク、#非表示。スムーズスクロール
  $(".scroll").click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var offset = $(this).attr("data-offset");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-60;//通常より60ピクセル上がスクロールの目的地
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
