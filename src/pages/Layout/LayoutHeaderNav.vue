<template>
  <div class="h-all">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal">
        <el-submenu index="1">
          <template slot="title">配置管理</template>
          <el-menu-item index="1-1">服务器配置</el-menu-item>
          <el-menu-item index="1-2">子网管理</el-menu-item>
          <el-menu-item index="1-3">机房配置</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">设备管理</template>
          <el-menu-item index="2-1">服务器配置</el-menu-item>
          <el-menu-item index="2-2">子网管理</el-menu-item>
          <el-menu-item index="2-3">机房配置机房配置</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
        <template slot="title">故障管理</template>
        <el-menu-item index="3-1">服务器配置</el-menu-item>
        <el-menu-item index="3-2">机房配置机房配置</el-menu-item>
        <el-menu-item index="3-3">子网管理</el-menu-item>
        <el-menu-item index="3-4">机房配置机房配置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeaderNav'
}
</script>

<style scoped>

</style>
