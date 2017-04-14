//ページ内リンク、#非表示。スムーズスクロール
  $(".scroll").click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var offset = $(this).attr("data-offset");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var windowWidth = window.innerWidth;
    offset2 = 60
    //console.log(windowWidth);
    if(windowWidth >= 1560){
      offset2 = 110;
    }
    else if(windowWidth >= 768){
      offset2 = 160;
    }

    var position = target.offset().top-offset2;//通常より60ピクセル上がスクロールの目的地
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
