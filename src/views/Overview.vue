<template>
  <div class="card">
      <el-card class="box-card">
    <div> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906522988&di=da2f84094e3916b0329c64a6b8fd6872&imgtype=0&src=http%3A%2F%2Fimage.bubuko.com%2Finfo%2F201801%2F20180114231439532897.png" alt="" height="80px" width="320px"></div>
    <p>集群数量: {{ elasticsearchnum }}</p>
  </el-card>
  <el-card class="box-card">
    <div> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906522988&di=da2f84094e3916b0329c64a6b8fd6872&imgtype=0&src=http%3A%2F%2Fimage.bubuko.com%2Finfo%2F201801%2F20180114231439532897.png" alt="" height="40px" width="160px"></div>
    <p>集群数量: {{ elasticsearchnum }}</p>
  </el-card>
  <el-card class="box-card">
    <div> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906522988&di=da2f84094e3916b0329c64a6b8fd6872&imgtype=0&src=http%3A%2F%2Fimage.bubuko.com%2Finfo%2F201801%2F20180114231439532897.png" alt="" height="40px" width="160px"></div>
    <p>集群数量: {{ elasticsearchnum }}</p>
  </el-card>
  <el-card class="box-card">
    <div> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906522988&di=da2f84094e3916b0329c64a6b8fd6872&imgtype=0&src=http%3A%2F%2Fimage.bubuko.com%2Finfo%2F201801%2F20180114231439532897.png" alt="" height="40px" width="160px"></div>
    <p>集群数量: {{ elasticsearchnum }}</p>
  </el-card>
  <el-card class="box-card">
    <div> <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906522988&di=da2f84094e3916b0329c64a6b8fd6872&imgtype=0&src=http%3A%2F%2Fimage.bubuko.com%2Finfo%2F201801%2F20180114231439532897.png" alt="" height="40px" width="160px"></div>
    <p>集群数量: {{ elasticsearchnum }}</p>
  </el-card>
  </div>
  


</template>

<script>
export default {
    data(){
        return {
            elasticsearchnum: 100
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



.box-card {
  margin: 20px;
  width: 480px;
  height: 240px;
  text-align: center;
  float: left;
}
</style>