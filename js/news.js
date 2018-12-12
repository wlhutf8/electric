$(function(){
    $(".news_left_nav>ul>li").each(function(index){
        $(this).on("click",function(){
            //按钮点击显示红色功能
            $(".news_left_nav>ul>li").eq(index).css({
                "color":"#D7203F"
            }).siblings(".news_left_nav>ul>li").css({
                "color":"#666666"
            });


            //选项卡功能
            $(".news_left_bottom").eq(index).css({
                "display":"block"
            }).siblings(".news_left_bottom").css({
                "display":"none"
            })
        })
    })
})
