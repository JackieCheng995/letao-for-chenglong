//使用模板引擎渲染数据
$(function () {

    var currentPage = 1;
    var pageSize = 5;
    render();


    //每次点击之后重新渲染页面
    function render() {

        $.ajax({
            url: '/user/queryUser',
            type: 'get',
            data: {
               page:currentPage,
                pageSize: pageSize
            },
            success: function (e) {
                // console.log(e)
                var htmlStr = template('userTpl', e)
                $('.lt_main tbody').html(htmlStr)


                //设置分页
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage:e. page, //当前页
                    totalPages: Math.ceil(e.total / pageSize), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (a, b, c, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render()

                    }
                });




            }

        })
    }




    //点击事件,由于是动态渲染,所以使用事件委托
    $('tbody').on('click','.btn',function(){
        console.log('hehe');
        //呼出模态框
        $('#userModal').modal('show')
        //获取id
        var id=$(this).parent().data('id')
        

        //判断该状态
        var  isDelete=$(this).hasClass('btn-success')?1:0

        $('#sbuBtn').off('click').on('click',function(){
            $.ajax({
                url:'/user/updateUser',
                type:'post',
                data:{
                    id:id,
                    isDelete:isDelete
                },
                dataType:'json',
                success:function(e){
                    $('#userModal').modal('hide')
                    render();
                    
                }
            })
        })



        
    })




})