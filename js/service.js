
//资源下载部分功能
//let $eleBtn1 = $("#btn1");
//console.log($eleBtn1);
////已知一个下载文件的后端接口：
////https://codeload.github.com/douban/douban-client/legacy.zip/master
//
//    $eleBtn1.click(function(){
//        let url = "http://616pic.com/sucai/z7rim2nw1.html";
//        window.open(url);
//    });



//下载功能的实现：用a.download, 后台返回的 res.data 必须是 blob 对象
export function download(res) {
    //var a = document.createElement('a');
    var a=document.getElementsByClassName('.down')
    //URL.createObjectURL通常都是用来创建图片的DataURI用来显示图片，这里用来下载文件，让浏览器来帮我们设定好文件类型
    var url = window.URL.createObjectURL(res.data);
    var filename = getFileName(res.headers);
    a.href = url;
    //HTML5中给a标签增加了一个download属性，只要有这个属性，点击这个链接时浏览器就不在打开链接指向的文件，而是改为下载
    a.onkeydown = filename;
    a.click();
    //URL.revokeObjectURL()静态方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象。
    //当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。
    window.URL.revokeObjectURL(url);
}
function filterResponse(res) {
    if (isDownload(res.headers)) {
        download(res);
    }
}
function errorResponse(err) {
    return Promise.reject(err);
}
//httpLayer.interceptors.request.use(filterResponse, errorResponse);


