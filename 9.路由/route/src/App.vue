<template>
  <div id="app">
    <div class="bckground">
      <nav>
        <h1 class="logo">
          <a href="js:;">网易云音乐</a>
        </h1>
        <ul>
          <li>
            <router-link to="/discover">发现音乐</router-link>
          </li>
          <li>
            <router-link to="/my">我的音乐</router-link>
          </li>
          <li>
            <router-link to="/friend">关注</router-link>
          </li>
          <li>
            <a href="https://music.163.com/store/product">商城</a>
          </li>
          <li>
            <a href="https://music.163.com/st/musician">音乐人</a>
          </li>
          <li>
            <a href="https://music.163.com/st/ad-song/login">云推歌</a>
          </li>
          <li>
            <router-link to="/download">下载客户端</router-link>
          </li>
        </ul>
        <div class="search-box">
          <i class="iconfont icon-search" style="margin-left: 5px; color: #666;">&#xe62d;</i>
          <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>
        <a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" class="creator">创作者中心</a>
        <div class="login">
          <a href="js:;">登录</a>
        </div>
      </nav>
      <!-- 路由缓存 数组里面放路由组件名 -->
      <keep-alive :include='[index,FriendPage,MyMusic]'>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
#app {
  & .bckground {
    width: 100%;
    height: 70px;
    background-color: #242424;

    & nav {
      width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      color: #ccc;

      & .logo {
        width: 157px;
        height: 67px;
        background: url("./assets/logo.png");

        & a {
          width: 157px;
          height: 100%;
          opacity: 0;
          float: right;
          line-height: 67px;
          font-size: 16px;
        }
      }

      & ul {
        display: flex;

        & li>a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          line-height: 70px;
          color: #ccc;
          font-size: 14px;
          position: relative;

          &:hover {
            background: #000;
            color: #fff;
          }

          &.on {
            background: #000;
            color: #fff;
          }

          &.on::before {
            content: '';
            position: absolute;
            bottom: 0.02px;
            border: 5px solid transparent;
            border-bottom-color: #C00014;
          }
        }
      }

      & .search-box {
        width: 160px;
        height: 30px;
        background: #fff;
        display: flex;
        align-items: center;
        border-radius: 20px;
        overflow: hidden;

        & input {
          width: 85%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 12px;
          text-indent: 5px;
        }
      }

      & .creator {
        width: 90px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border: 1px solid #4F4F4F;
        border-radius: 20px;
        color: #ccc;
        font-size: 12px;
      }

      & .login>a {
        font-size: 12px;
        color: #787878;
      }
    }
  }
}
</style>
