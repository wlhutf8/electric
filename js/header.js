//导航栏鼠标移入效果
$(function(){
    $(".header>ul>li").each(function(index,value){
        $(this).mousemove(function(){
            console.log(index);
            $(this).find(".second_level").addClass('show');
        })

        $(this).mouseout(function(){
            console.log(index);
            $(this).find(".second_level").removeClass('show');
        })


        //$(this).on("click",function(){
        //    //$(".header>ul>li").eq(index).find(".header>ul>li>a").removeClass("show_a")
        //    $(".header>ul>li").eq(index).children("a").addClass("show_a")
        //        .siblings(".header>ul>li").children("a").removeClass("show_a")
        //})
    })



    //手机端点击弹窗导航栏功能
     $(".more").click(function(){
         $(".header>ul").fadeToggle();
     });

//    二级菜单部分
    $(".header>ul>li").each(function(index){
        $(this).on("click",function(){
            $(this).find(".second_level").fadeToggle();
        })
    })
})