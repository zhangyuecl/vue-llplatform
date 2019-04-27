<template>
  <el-row class="h-all">
    <el-row class="header-main">
      <header-main></header-main>
    </el-row>
    <el-row class="header-nav">
      <header-nav></header-nav>
    </el-row>

    <el-row class="h-all main-wrapper">
      <div class="h-all sidebar">
        <the-sidebar></the-sidebar>
      </div>
      <div class="h-all main">
        <the-main></the-main>
      </div>
    </el-row>
  </el-row>
</template>

<script>
import LayoutHeaderMain from './LayoutHeaderMain';
import LayoutHeaderNav from './LayoutHeaderNav';
import LayoutMain from './LayoutMain';
import LayoutSidebar from './LayoutSidebar';

export default {
  name: 'index',
  components:{
    'header-main': LayoutHeaderMain,
    'header-nav': LayoutHeaderNav,
    'the-main': LayoutMain,
    'the-sidebar': LayoutSidebar,
  }
}
</script>

<style scoped>

</style>
