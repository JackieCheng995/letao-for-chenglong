$(function () {
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },


        //先给input配置name
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6之间'
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6之间'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        }
    });
    //表单注册事件,成功是触发

    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑

        $.ajax({
            url: '/employee/employeeLogin',
            type: "post",
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (e) {
                console.log(e)
                if (e.success) {

                    location.href = "index.html"
                } 
                if(e.error==1000){
                    $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback')
                }
                if(e.error==1001){
                    $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback')
                    
                }
            }
        })

        
    });
    //表单重置功能
    $('[type="reset"]').click(function(){

        $('#form').data('bootstrapValidator').resetForm()

    })    

})