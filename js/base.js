//引入头部和底部
$.get({
    url:"./header.html",
    success:function(data){
        $("#header").html(data);
    }
})
$.get({
    url:"./footer.html",
    success:function(data) {
        $("#footer").html(data);
    }
});
