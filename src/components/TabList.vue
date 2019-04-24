<template>
  <div>
    <el-button
      size="small"
      @click="addTab(editableTabsValue)"
    >
      add tab
    </el-button>
    <el-row>
      <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab" id="tabs-main">
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <span slot="label"><el-badge isDot="true" class="item" :title="item.title">{{item.title}}</el-badge></span>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  data() {
    return {
      editableTabsValue: '5',
      editableTabs: [{
        title: '设备管理',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: '设备配置文件管理',
        name: '2',
        content: 'Tab 2 content'
      }, {
        title: '服务器管理',
        name: '3',
        content: 'Tab 2 content'
      }, {
        title: '拓扑图',
        name: '4',
        content: 'Tab 2 content'
      }, {
        title: '设备配置文件管理',
        name: '5',
        content: 'Tab 2 content'
      }],
      tabIndex: 5
    }
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
}
</script>

<style scoped>

</style>
