$(function(){
//    ��������λ����
    let nav=$(".home_page"); //�õ���������
    let win=$(window); //�õ����ڶ���
    let sc=$(document);//�õ�document�ĵ�����
    win.scroll(function(){
        if(sc.scrollTop()>=1000){
            nav.addClass("fix");
        }else{
            nav.removeClass("fix");
        }

    });





//    �ֲ�ͼ����
    /*************�ֲ�ͼ********************/
    var $carrousel=$("#carrousel");
    $ids=$("#indicators"),
        $b_line=$("#b_line");
    var i=0,timer=null;
    function show(i){		//ͼƬ�ֲ� ָʾԲ����ʽ�л�
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
    //������#bannerʱ��ֹͣͼƬ�ֲ�
    $("#banner").hover(
        ()=>{
            clearInterval(timer);
            timer=null;				//�ͷŶ�ʱ��
        },
        ()=> timer=setInterval(carousel,2000)
    )
    //�����Ҽ�ͷ�󶨵����¼�
    $("[data-move=left]").click(()=>{
        i = i > 0 ? i - 1 : 3;
        show(i);
    })
    $("[data-move=right]").click(()=>{
        i = i < 3 ? i + 1 : 0;
        show(i);
    })
    //��ָʾԲ���������붯��
    $ids.on("mouseover","li",function(){
        var $li=$(this);
        //var l_index=;		//�ҳ������¼���liλ�ڸ�Ԫ���е�λ�ã��±꣩
        show($li.index());
    })




//    ��Ʒ����ѡ�����Ч��
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



//  ���Ŷ�̬ѡ�����
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




//    �����������������Ч��
    $("#click_more").click(function(){
        $(".click_more").css({"display":"block"})
    });
    $("#dianji").click(function(){
        $(".click_more").css({"display":"none"})
    });
})















