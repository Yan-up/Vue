import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/discover/indexPage.vue'
import RecommendedPage from '../views/discover/RecommendedPage.vue'
import LeaderboardPage from '../views/discover/LeaderboardPage.vue'
import SongList from '../views/discover/SongList.vue'
import AnchorStation from '../views/discover/AnchorStation.vue'
import SingerPage from '../views/discover/SingerPage.vue'
import NewDisc from '../views/discover/NewDisc.vue'

//全局路由
import MyMusic from '../views/MyMusic.vue'
import FriendPage from '../views/FriendPage.vue'
import DownloadPage from '../views/DownloadPage.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/discover',
    name: 'discover',
    component: index,
    redirect: '/discover/recommended',// 点击主路默认选着的下级路由
    children: [
      {
        path: '/discover/recommended',
        name: 'recommended',
        component: RecommendedPage,
      },
      {
        path: '/discover/leaderboard',
        name: 'leaderboard',
        component: LeaderboardPage,
        meta: {
          title: '飙升榜-排行榜-网易云音乐'
        }
      },
      {
        path: '/discover/song/',
        name: 'song',
        component: SongList,
        meta: {
          title: '全部歌单-歌单-网易云音乐'
        }
      },
      {
        path: '/discover/anchor',
        name: 'anchor',
        component: AnchorStation,
        meta: {
          title: '主播电台-网易云音乐'
        }
      },
      {
        path: '/discover/singer',
        name: 'singer',
        component: SingerPage,
        meta: {
          title: '推荐歌手-歌手-网易云音乐'
        }
      },
      {
        path: '/discover/new',
        name: 'new',
        component: NewDisc,
        meta: {
          title: '新碟上架-网易云音乐'
        }
      },
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: MyMusic,
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendPage,
  },
  {
    path: '/download',
    name: 'download',
    component: DownloadPage,
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'on'//该函数的作用是设置链接的激活类为'on'。当链接被激活时，它将自动添加'on'类名，以更改其样式或触发相关事件。
})

router.beforeEach((to, from, next) => {//路由前置守卫,设置初始页面
  if (to.path === '/') {// 如果当前路径是'/'，则跳转到'/discover/recommended'路径
    next({ path: '/discover/recommended' })
  }
  next()//放行
})

router.afterEach((to, from) => {//路由后置守卫
  //更改页面标题
  document.title = to.meta.title || '网易云音乐'
})

export default router
