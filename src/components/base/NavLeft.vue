<template>
  <div class="NavLeft">
    <el-menu :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.NavLeft {
  width: 200px;
  height: 100%;
}
.el-menu {
  height: 100%;
  border-right: 0px;
  background-color: rgb(48, 65, 86);
}
el-menu-item-group__title {
  padding: 0px;
}

span {
  color: rgb(191, 203, 217);
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {}
};
</script>