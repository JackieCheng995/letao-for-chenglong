//需求:在第一个ajax发送的时候,开启进度条
//在ajax回来的时候关闭


//测试进度条的 功能

// NProgress.start();//开启进度条
// setInterval(function(){
//     NProgress.done()
// },2000)





//ajax 全局事件
$(document).ajaxStart(function(){
    //第一ajax调用的时候开启进度条
    NProgress.start();
})
//所有的ajax回来的时候关闭进度条效果
$(document).ajaxStop(function(){
    NProgress.done();
})