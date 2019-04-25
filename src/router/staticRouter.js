import AppLogin from '@/pages/login/AppLogin'
import AppRegister from '@/pages/login/AppRegister'
import HelloWorld from '@/components/HelloWorld'
import ElementHelloWorld from '../components/ElementHelloWorld'
import TabList from '@/components/TabList'
import Table from '@/components/Table'
import RightClick from '@/components/RightClick'
import Layout from '@/pages/Layout/Layout'

/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: '登录',
    component: AppLogin
  }, {
    path: '/register',
    name: '注册',
    component: AppRegister
  }, {
    path: '/index',
    name: '首页',
    component: HelloWorld
  }, {
    path: '/element',
    name: '元素',
    component: ElementHelloWorld
  }, {
    path: '/tabList',
    name: 'tab标签',
    component: TabList
  }, {
    path: '/table',
    name: '表格',
    component: Table
  }, {
    path: '/rightClick',
    name: '右键',
    component: RightClick
  }, {
    path: '/layout',
    name: '页面搭建',
    component: Layout
  }
]

export default staticRouter
