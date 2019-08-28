<template>
  <div class="card">
      <el-card class="box-card">
    <div> <img src="@/assets/images/elasticsearch.png" alt="" height="20px" width="80px"></div>
    <p>集群名称: {{ elasticsearchnum }}</p>
    <p>索引数量: {{ elasticsearchnum }}</p>
    <p>节点数量: {{ elasticsearchnum }}</p>
    <p>用途: {{ elasticsearchnum }}</p>


  </el-card>
  <el-card class="box-card">
    <div> <img src="@/assets/images/elasticsearch.png" alt="" height="20px" width="80px"></div>
    <p>集群名称: {{ elasticsearchnum }}</p>
    <p>索引数量: {{ elasticsearchnum }}</p>
    <p>节点数量: {{ elasticsearchnum }}</p>
        <p>节点数量: {{ elasticsearchnum }}</p>

  </el-card>
  <el-card class="box-card">
    <div> <img src="@/assets/images/elasticsearch.png" alt="" height="20px" width="80px"></div>
    <p>集群名称: {{ elasticsearchnum }}</p>
    <p>索引数量: {{ elasticsearchnum }}</p>
    <p>节点数量: {{ elasticsearchnum }}</p>
        <p>节点数量: {{ elasticsearchnum }}</p>

  </el-card>
  <el-card class="box-card">
    <div> <img src="@/assets/images/elasticsearch.png" alt="" height="20px" width="80px"></div>
    <p>集群名称: {{ elasticsearchnum }}</p>
    <p>索引数量: {{ elasticsearchnum }}</p>
    <p>节点数量: {{ elasticsearchnum }}</p>
    
  </el-card>
  <el-card class="box-card">
    <div> <img src="@/assets/images/elasticsearch.png" alt="" height="20px" width="80px"></div>
    <p>集群名称: {{ elasticsearchnum }}</p>
    <p>索引数量: {{ elasticsearchnum }}</p>
    <p>节点数量: {{ elasticsearchnum }}</p>
  </el-card>

      <highcharts class="charts" :options="options"></highcharts>



  </div>
  


</template>

<script>
var options = {
    chart: {
        type: 'area'
    },
    title: {
      text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
    },
    subtitle: {
      text: '数据来源：thesolarfoundation.com'
    },
    yAxis: {
      title: {
        text: '就业人数'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: [{
      name: '安装，实施人员',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }


export default {
    data(){
        return {
            elasticsearchnum: 100,
            options: options
        };
    }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.charts{
    float: left;
}


.box-card {
  margin: 20px;
  border-top: solid 10px green;
  width: 240px;
  height: 120px;
  text-align: center;
  float: left;
}

.box-card p {
    margin: 0px;
    font-size: 10px;
}
</style>