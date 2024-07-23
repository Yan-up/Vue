<template>
  <div class="module-page">
    <h3>我是子组件</h3>
    <p>父组件传给我的标题是:---{{title}}---</p>
    <div class="header">
      <h4>这一块以下内容是插槽</h4>
      <slot>
      </slot>
    </div>
    <div class="center">
      <p>这是子组件内容区域</p>
      <p>R:{{ r }}<button @click="r>=255||(r+=5)" style="background:red;">red++</button></p>
      <p>G:{{ g }}<button @click="g>=255||(g+=5)" style="background:green;">green++</button></p>
      <p>B:{{ b }}<button @click="b>=255||(b+=5)" style="background:blue;">blue++</button></p>
    </div>
    <div class="foot">
      <h4>这一块以下内容是作用域插槽改变文字颜色</h4>
      <slot name="foot" :color="color">// 作用域插槽 color是传向父组件的数据
        <P :style="{color}">没用到作用域插槽 展示默认值</P>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModulePage',
  props: {// 父组件传过来的数据
    title: {
      type: String,//数据类型
      default: '父组件没有传参'//默认值
    }
  },
  computed: {// 计算属性
    color() {//计算每一次颜色的值
      return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
  },
  watch: {// 监听
    color(val) {
      console.log(val)
      this.$emit('changeColor', val)//子向父传参 将计算后的颜色值传给父组件
    }
  },
  data() {
    return {
      r: 0,
      g: 0,
      b: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.module-page {
  width: 450px;
  height: 550px;
  margin: 0 10px;
  padding: 20px 15px;
  box-sizing: border-box;
  background: #eee;
}

.module-page p {
  font-size: 14px;
}

.module-page .header {
  width: 100%;
  height: 30%;
  background: pink;
}

.module-page .center {
  width: 100%;
  height: 31%;
  background: yellow;
}

.module-page .center p {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.module-page .foot {
  width: 100%;
  height: 30%;
  background: rgb(161, 161, 161);
}
</style>
