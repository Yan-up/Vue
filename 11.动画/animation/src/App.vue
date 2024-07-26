<template>
  <div id="app">
    <transition-group name='ani' tag="ul">
      <li v-for="(item,index) in imgList" :key="index">
        <transition :enter-active-class="item.enter" :leave-active-class="item.leave">
          <img :src="item.url" alt="" @click="item.show = !item.show" v-show="item.show" />
        </transition>
        <button @click="item.show=!item.show" v-show="!item.show">显示</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      imgList: [
        {
          id: 1,
          url: require('@/assets/image/1.png'),
          show: true,
          enter: 'animate__animated animate__bounceInLeft',
          leave: 'animate__animated animate__bounceOutLeft'
        },
        {
          id: 2,
          url: require('@/assets/image/2.png'),
          show: true,
          enter: 'animate__animated animate__backInDown',
          leave: 'animate__animated animate__backOutDown'
        },
        {
          id: 3,
          url: require('@/assets/image/3.png'),
          show: true,
          enter: 'animate__animated animate__bounceInRight',
          leave: 'animate__animated animate__bounceOutRight'

        },
        {
          id: 4,
          url: require('@/assets/image/4.png'),
          show: true,
          enter: 'animate__animated animate__bounceInUp',
          leave: 'animate__animated animate__bounceOutUp'
        },
        {
          id: 5,
          url: require('@/assets/image/5.png'),
          show: true,
          enter: 'animate__animated animate__rollIn',
          leave: 'animate__animated animate__hinge'
        },
        {
          id: 6,
          url: require('@/assets/image/6.png'),
          show: true,
          enter: 'animate__animated animate__fadeInTopRight',
          leave: 'animate__animated animate__fadeOutTopRight'
        },
        {
          id: 7,
          url: require('@/assets/image/7.png'),
          show: true,
          enter: 'animate__animated animate__rotateIn',
          leave: 'animate__animated animate__rotateOut'
        },
        {
          id: 8,
          url: require('@/assets/image/8.png'),
          show: true,
          enter: 'animate__animated animate__zoomIn',
          leave: 'animate__animated animate__zoomOut'
        },
        {
          id: 9,
          url: require('@/assets/image/9.png'),
          show: true,
          enter: 'animate__animated animate__flipInY',
          leave: 'animate__animated animate__flipOutY'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#app>ul {
  width: 1325px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  overflow: hidden;

  & li {
    width: 320px;
    height: 180px;
    margin: 20px 50px;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    & transition {
      all: 1s;
    }

    & img {
      width: 100%;
      z-index: 1;
      cursor: pointer;
      transition: all 0.5s;
    }

    button {
      width: 100px;
      height: 40px;
      position: absolute;
      cursor: pointer;
    }
  }
}
</style>