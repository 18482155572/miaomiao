import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  //   // 指定基础文件路径
  // base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {//重定向任意地址，必须写在其他路由之后
      path:'/*',
      redirect:'/movie'
    },
  ]
})
