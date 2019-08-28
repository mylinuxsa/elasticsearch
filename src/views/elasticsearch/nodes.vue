<template>
  <div>
    <el-breadcrumb separator="/" class="content-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="clusterName" label="集群名" width="180"></el-table-column>
        <el-table-column prop="nodeIp" label="节点地址"></el-table-column>
        <el-table-column prop="nodeName" label="节点名称"></el-table-column>
        <el-table-column prop="role" label="节点角色"></el-table-column>
        <el-table-column prop="status" label="节点状态"></el-table-column>
        <el-table-column prop="update_time" label="状态更新时间"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
      tableData: [
      ]
    };
  },
  created(){
      this.tableData = this.getnodes('http://localhost:9000/ClusterInfo');

  },

  methods: {
      getnodes(URL){
          this.$http.get(URL).then(
              (res) => {
                  console.log(res)
                  this.tableData =  res.data;
              }
          )
      }
  }
};
</script>


<style scoped>
.content-breadcrumb {
  box-sizing: border-box;
  padding: 20px 20px 20px 10px;
  background-color: #f8f8f8;
}
</style>