//需求:在第一个ajax发送的时候,开启进度条
//在ajax回来的时候关闭


//测试进度条的 功能

// NProgress.start();//开启进度条
// setInterval(function(){
//     NProgress.done()
// },2000)





//ajax 全局事件
$(document).ajaxStart(function () {
    //第一ajax调用的时候开启进度条
    NProgress.start();
})
//所有的ajax回来的时候关闭进度条效果
$(document).ajaxStop(function () {
    NProgress.done();
})

//二级菜单点击事件渲染

$(function () {
    //注册事件
    // 功能1,左侧导航,切换效果
    //功能2,左侧菜单切换效果
    // 功能3,退出功能
    $('.lt_aside .category').click(function(){
        console.log('hehe');
        
            $('.lt_aside .child').stop().slideToggle()
    })
    //功2 
    $('.lt_main .icon_left').click(function(){
        console.log('hehe');
        
        $('.lt_aside').toggleClass('hiddmenu')
        $('.lt_main').toggleClass('hiddmenu')
    })
    //功能3
    //发送ajax请求服务器删除登录信息,减少服务器资源
    $('#logout').click(function(){
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(e){
                if(e.success){
                    location.href="login.html"
                }
                
            }
        })
    })
})