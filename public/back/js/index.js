$(function(){
    var myChart1 = echarts.init(document.querySelector('.echarts_left'));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '人数销量统计'
        },
        tooltip: {},
        legend: {
            data:['人数','销量']
        },
        xAxis: {
            data: ["1月","二月","三月","四月","五月","六月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [50, 20, 36, 10, 10, 20]
        },
        {
            name: '销量',
            type: 'bar',
            data: [150, 60, 72, 30, 60, 80]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);




    var myChart2 = echarts.init(document.querySelector('.echarts_right'));

    option2 = {
        title : {
            text: '上半年销量统计',
            subtext: '完全属实版',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克','阿迪','新百伦','李宁','老北京']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:150, name:'耐克'},
                    {value:60, name:'阿迪'},
                    {value:72, name:'新百伦'},
                    {value:30, name:'李宁'},
                    {value:60, name:'老北京'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    

    myChart2.setOption(option2);

})