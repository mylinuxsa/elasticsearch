<template>
  <div style="width: 100%">
    <header>
      <el-menu mode="horizontal" >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user-solid"></i>个人中心</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </header>
  </div>
</template>



<style scoped>
header {
  height: 60px;
  min-width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
}
.el-menu--horizontal {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.el-menu--popup-bottom-start{
    margin-top: 0px;
}

</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>