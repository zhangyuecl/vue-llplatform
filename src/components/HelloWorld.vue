<template>
  <div class="hello">
    <div>
      <!-- 1. 属性中使用，记得使用v-bind，即不要遗漏前面的冒号 -->
      <el-input :placeholder="$t('login.login')" style="width:200px;"/>
      <!-- 2. HTML中使用 -->
      <el-button>{{ $t("common.ok") }}</el-button>
      <el-button>{{ $t("common.cancel") }}</el-button>
      <el-button>{{ $t("login.login") }}</el-button>
      <el-button>{{ $t("login.register") }}</el-button>
      <br/><br/>
      <el-button @click="exchangeLang">切换语言</el-button>
      <el-dropdown trigger="click" @command="switchLanguage" >
        <el-button @click="clickdropdown">
          {{ $t("switchLanguage.menu")}}<i class="el-icon-arrow-down el-icon--right" id="dropdownIcon"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh-cn" :disabled="this.lang==='zh-cn'">{{ $t("switchLanguage.optionZh")}}</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="this.lang==='en'">{{ $t("switchLanguage.optionEn")}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
import {requestLogin} from '../api/user'

export default {
  name: 'HelloWorld',
  data () {
    const lang = localStorage.getItem('user-language') || 'zh-cn';
    return{
      lang: lang,
      dropdownlangIcon: false
    }
  },
  methods:{
    exchangeLang(){
      let changelang = localStorage.getItem('user-language')=='en'?'zh-cn':'en';
      localStorage.setItem('user-language', changelang)
      this.$i18n.locale = changelang;
      this.lang = changelang;
    },
    switchLanguage(command){
      localStorage.setItem('user-language', command)
      this.$i18n.locale = command
      this.lang = command
    },
    clickdropdown(){
      let dropdownIcon = document.getElementById('dropdownIcon')
      if(!this.dropdownlangIcon){
        dropdownIcon.style.transform = 'rotate(-180deg)';
      }else{
        dropdownIcon.style.transform = 'rotate(0deg)';
      }
      this.dropdownlangIcon = !this.dropdownlangIcon;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
