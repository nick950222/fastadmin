define(['jquery', 'bootstrap', 'backend', 'addtabs', 'table', 'echarts', 'echarts-theme'], function ($, undefined, Backend, Datatable, Table, Echarts) {

    var Controller = {
        index: function () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = Echarts.init(document.getElementById('echart'), 'walden');
            //var myChart = Echarts.init(document.getElementById('main');
            // 指定图表的配置项和数据
            var option = {
    title: {
        text: '员工情况登记表',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['应到', '实到']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['工程部','安全部','质检部','设计部','后勤部','外包公司']
    },
    series: [
        {
            name: '应到',
            type: 'bar',
            data: [100, 84, 122, 95, 144, 44]
        },
        {
            name: '实到',
            type: 'bar',
            data: [99,37, 111, 63, 125, 11]
        }
    ]
};

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

            //动态添加数据，可以通过Ajax获取数据然后填充
            //setInterval(function () {

            //}
                //Orderdata.column.push((new Date()).toLocaleTimeString().replace(/^\D*/, ''));
                //var amount = Math.floor(Math.random() * 200) + 20;
				//Orderdata.createdata.push(200);
				//Orderdata.paydata.push(150);
                //Orderdata.createdata.push(amount);
                //Orderdata.paydata.push(Math.floor(Math.random() * amount) + 1);

                //按自己需求可以取消这个限制
                //i//f (Orderdata.column.length >= 7) {
                    //移除最开始的一条数据
                    //Orderdata.column.shift();
                    //Orderdata.paydata.shift();
                    //Orderdata.createdata.shift();
                //}
                
           /* $(window).resize(function () {
                myChart.resize();
            });*/
            
        }
    };

    return Controller;
});
