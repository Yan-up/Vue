<template>
  <div class="discover-music">
    <nav>
      <ul>
        <li>
          <router-link to="/discover/recommended">推荐</router-link>
        </li>
        <li>
          <router-link to="/discover/leaderboard">排行榜</router-link>
        </li>
        <li>
          <router-link to="/discover/song">歌单</router-link>
        </li>
        <li>
          <router-link to="/discover/anchor">主播电台</router-link>
        </li>
        <li>
          <router-link to="/discover/singer">歌手</router-link>
        </li>
        <li>
          <router-link to="/discover/new">新碟上架</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.discover-music {
  & nav {
    height: 35px;
    position: relative;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;

    & ul {
      width: 1100px;
      height: 34px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      font-size: 14px;
      box-sizing: border-box;
      padding-left: 174px;

      & li {
        width: 100px;
        height: 34px;
        line-height: 34px;
        text-align: center;

        & a {
          font-size: 12px;
          color: #fff;

          &:hover {
            height: 20px;
            display: inline-block;
            padding: 0 13px;
            background: #9B0909;
            border-radius: 20px;
            line-height: 20px;
          }

          &.on {
            height: 20px;
            padding: 0 13px;
            display: inline-block;
            background: #9B0909;
            border-radius: 20px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>