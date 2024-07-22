<template>
  <div class="song-list">
    <h1> {{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  data() {
    return {
      title: '',
    }
  },
  created() {
    this.$route.query.cat && (this.title = this.$route.query.cat)//获取路由参数,定义页面标题
  },
};
</script>