// 百度地图API功能（方法二）
// let map = new BMap.Map("contact_map");
// map.centerAndZoom("顺德",12);
// map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
// map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用





// 百度地图API功能（方法二）
let map = new BMap.Map("contact_map");            // 创建Map实例
map.centerAndZoom(new BMap.Point(113.301531,22.81172), 11);
let local = new BMap.LocalSearch("顺德区", {
    renderOptions:{map: map, autoViewport:true},pageCapacity: 8
});
// local.searchNearby("小吃", "前门");
local.search("容桂");



//用户信息提交部分功能
$(function(){
    //为表单的必填文本框添加提示信息（选择form中的所有后代input元素）
    //$("form :input.required").each(function () {
    //    //通过jquery api：$("HTML字符串") 创建jquery对象
    //    var $required = $("<strong class='high'>*</strong>");
    //    //添加到this对象的父级对象下
    //    $(this).parent().append($required);
    //});

    //为表单元素添加失去焦点事件
    $("form div :input").blur(function(){
        var $parent = $(this).parent();  //防止点击事件
        $parent.find(".msg").remove(); //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）

        //验证姓名
        if($(this).is("#name_input")){
            var nameVal = $.trim(this.value); //原生js去空格方式：this.replace(/(^\s*)|(\s*$)/g, "")
            var regName1 = /[~#^$@%&!*()<>:;'"{}【】]/;
            var regName2 =/^[\u4e00-\u9fa5]{1,1}$|^[\dA-Za-z_]{1,4}$/
            if(nameVal == "" || regName1.test(nameVal) || regName2.test(nameVal)){
                var errorMsg = " 姓名非空，长度6位以上，不包含特殊字符！";
                //class='msg onError' 中间的空格是层叠样式的格式
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            }
            else{
                var okMsg="输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }


        //验证手机号
        if($(this).is("#phone_input")){
            var phoneVal = $.trim(this.value);
            //var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
            let regPhone = /^1[3|4|5|8][0-9]\d{4,8}$/;//手机号正则表达式
            if(phoneVal == "" || phoneVal.length !=11 || !regPhone.test(phoneVal)){
                var errorMsg = "手机号不能少于11位数字,不包含特殊字符！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            }
            else{
                var okMsg="输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
    }).keyup(function(){
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });

    //点击重置按钮时，通过trigger()来触发文本框的失去焦点事件
    $("#send").click(function(){
        //trigger 事件执行完后，浏览器会为submit按钮获得焦点
        $("form .required:input").trigger("blur");
        var numError = $("form .onError").length;
        if(numError){
            return false;
        }
        alert("提交成功！");
    });
})








