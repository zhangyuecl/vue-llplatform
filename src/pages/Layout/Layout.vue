<template>
  <el-row class="h-all">
    <el-row class="header-main">
      <headerMain></headerMain>
    </el-row>
    <el-row class="header-nav">
      <headerNav></headerNav>
    </el-row>

    <el-row class="h-all main-wrapper">
      <div class="h-all sidebar"></div>
      <div class="h-all main"></div>
    </el-row>
  </el-row>
</template>

<script>
import LayoutHeaderMain from './LayoutHeaderMain';
import LayoutHeaderNav from './LayoutHeaderNav';

export default {
  name: 'index',
  components:{
    'headerMain': LayoutHeaderMain,
    'headerNav': LayoutHeaderNav
  }
}
</script>

<style scoped>

</style>
