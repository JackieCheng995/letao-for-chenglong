//判断是否登录
$(function(){
    $.ajax({
        url:'/employee/checkRootLogin',
        typt:'get',
        dataType:'json',
        success:function(e){
            // console.log(e);
            if(e.error==400){
                location.href="login.html"
            }
            
        }
    })
})