


$(function(){
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        

        //先给input配置name
        fields:{
            username:{
                validators:{
                    notEmpty:{
                        message:'用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6之间'
                      }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:'用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2到6之间'
                      }
                }
            }
        }
    })
    
})