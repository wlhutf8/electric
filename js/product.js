$(function(){
    $(".midden_item>li").each(function(index){
        $(this).on("click",function(){
            $(".midden_item>li").eq(index).addClass("li_show").siblings(".midden_item>li").removeClass("li_show")
        })
    });


    $(".product_banner>ul>li").each(function(index){
        $(this).on("click",function(){
            $(".product_img>p").removeClass('p_show');
            $(".product_img>p").eq(index).addClass("p_show");

            $(".icon_one").css({ "display":"none"})
            $(".icon_one").eq(index).css({"display":"block"})

            $(".icon_two").css({
                "display":"block"
            })

            $(".icon_two").eq(index).css({
                "display":"none"
            })
        })
    })
})
