<template>
  <el-card class="box-card">
    
    <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
  </el-card>
  


</template>

<script>
export default {};
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
  width: 200px;
  display: flex;
  justify-content: center;
}
</style>