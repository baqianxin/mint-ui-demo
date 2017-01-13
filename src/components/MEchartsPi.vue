<template>
  <div class="MEchartsPi">
    <div id="MEchartsPi" class="main"></div>
    <div id="MEchartsPi1" class="main"></div>
    <div id="MEchartsPi2" class="main"></div>
  </div>
</template>
<script>
  import {init} from 'echarts';

  export default {
    name: 'MEchartsPi',
    mounted (){
     // 基于准备好的dom，初始化echarts实例
      var myChart = init(document.getElementById('MEchartsPi'));
      var myChart1 = init(document.getElementById('MEchartsPi1'));
      var myChart2 = init(document.getElementById('MEchartsPi2'));
      var data = [];
      for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      var option = {
        title: {
          text: ''
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [{
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: data
        }],
        animationDuration: 2000
      };
      // 绘制图表
      myChart.setOption(option);
      myChart1.setOption(option);
      myChart2.setOption(option);
    }
  };

</script>
<style>
  .main{
     width:auto;
     height:300px;
  }
</style>
