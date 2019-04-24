<template>
  <div>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item>
      <v-contextmenu-item>菜单3</v-contextmenu-item>
    </v-contextmenu>

    <div v-contextmenu:contextmenu>右键点击此区域</div>
  </div>
</template>

<script>
export default {
  name: 'RightClick'
}
</script>

<style scoped>

</style>
