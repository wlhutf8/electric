$(function(){
//    导航栏定位设置
    let nav=$(".home_page"); //得到导航对象
    let win=$(window); //得到窗口对象
    let sc=$(document);//得到document文档对象。
    win.scroll(function(){
        if(sc.scrollTop()>=1000){
            nav.addClass("fix");
        }else{
            nav.removeClass("fix");
        }

    });





//    轮播图功能
    /*************轮播图********************/
    var $carrousel=$("#carrousel");
    $ids=$("#indicators"),
        $b_line=$("#b_line");
    var i=0,timer=null;
    function show(i){		//图片轮播 指示圆点样式切换
        $carrousel.children("li:eq("+i+")").addClass("img_show").siblings().removeClass("img_show");
        $ids.children(":eq("+i+")").addClass("c_hover").siblings().removeClass("c_hover");
        //$b_line.css("width",0).stop().animate({width:1360},800);
    }
    function carousel(){
        i += 1;
        if(i > 3) i= 0;
        show(i);
    }
    timer=setInterval(carousel,2000);
    //鼠标进入#banner时，停止图片轮播
    $("#banner").hover(
        ()=>{
            clearInterval(timer);
            timer=null;				//释放定时器
        },
        ()=> timer=setInterval(carousel,2000)
    )
    //给左右箭头绑定单击事件
    $("[data-move=left]").click(()=>{
        i = i > 0 ? i - 1 : 3;
        show(i);
    })
    $("[data-move=right]").click(()=>{
        i = i < 3 ? i + 1 : 0;
        show(i);
    })
    //给指示圆点绑定鼠标移入动画
    $ids.on("mouseover","li",function(){
        var $li=$(this);
        //var l_index=;		//找出触发事件的li位于父元素中的位置（下标）
        show($li.index());
    })




//    产品中心选项卡部分效果
    $(".center_ul>ul>li").each(function(index){
        $(this).on("click",function(){
            $(".center_ul>ul>li").find("span").removeClass("li_show")
            $(".center_ul>ul>li").eq(index).find("span").addClass("li_show")


            $(".products>ul").eq(index).css({
                "display":"flex"
            }).siblings(".products>ul").css({
                "display":"none"
            })
        })
    })



//  新闻动态选项卡功能
    $(".trends_nav>ul>li").each(function(index){
        $(this).on("click",function(){
            $(".trends_nav>ul>li").children("span").removeClass("span_show");
            $(".trends_nav>ul>li").eq(index).children("span").addClass("span_show")

            $(".entire").eq(index).css({
                "display":"block"
            }).siblings(".entire").css({
                "display":"none"
            })
        })
    })




//    分享更多点击弹窗部分效果
    $("#click_more").click(function(){
        $(".click_more").css({"display":"block"})
    });
    $("#dianji").click(function(){
        $(".click_more").css({"display":"none"})
    });
})















