<template>
  <div id="app">
    <ul>
      <li :style="{background: color1}">
        <h2>我是父组件的盒子-我里面引用了子组件</h2>
        <ModulePage title="父向子传参 我是第一次使用这个组件" @changeColor="changeColor1">
          <div>插入一个 div在内容上面</div>
          <template v-slot:foot='slotonevalue'>
            <div :style="{color:slotonevalue.color}">
              我是一个插槽 插入一个div在内容下面
            </div>
          </template>
        </ModulePage>
      </li>
      <li :style="{background: color2}">
        <h2>我是父组件的盒子-我里面引用了子组件</h2>
        <ModulePage title="父向子传参 我是第二次使用这个组件" @changeColor="changeColor2">
          <ol>
            <li>天青色等烟雨</li>
            <li>而我在等你</li>
            <li>6666</li>
          </ol>
          <template v-slot:foot='slotonevalue'>
            <i :style="{color: slotonevalue.color}">
              神回复｜马拉多纳有“上帝之手”，C罗有“上帝之发”！为啥巴西比赛的焦点都在观众席？
            </i>
          </template>
        </ModulePage>
      </li>
      <li :style="{background: color3}">
        <h2>我是父组件的盒子-我里面引用了子组件</h2>
        <ModulePage title="父向子传参 我是第三次使用这个组件" @changeColor="changeColor3">
          <table border="1" style="border-collapse: collapse; text-align: center;">
            <thead>
              <tr>
                <td>日期</td>
                <td>姓名</td>
                <td>地址</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2020-01-01</td>
                <td>张三</td>
                <td>北京</td>
              </tr>
              <tr>
                <td>2020-01-01</td>
                <td>李四</td>
                <td>上海</td>
              </tr>
              <tr>
                <td>2020-01-01</td>
                <td>王五</td>
                <td>深圳</td>
              </tr>
            </tbody>
          </table>
        </ModulePage>
      </li>
    </ul>
  </div>
</template>

<script>
import ModulePage from './components/ModulePage.vue'

export default {
  name: 'App',
  components: {
    ModulePage
  },
  data() {
    return {
      color1: 'rgb(0,0,0)',
      color2: 'rgb(0,0,0)',
      color3: 'rgb(0,0,0)'
    }
  },
  methods: {// 监听子组件传过来的数据
    changeColor1(color) {//将子组件传过来的数据赋值给父组件的color1
      this.color1 = color
    },
    changeColor2(color) {
      this.color2 = color
    },
    changeColor3(color) {
      this.color3 = color
    }
  }
}
</script>

<style scoped>
#app>ul {
  display: flex;
  flex-direction: row;
  margin: 60px 0;
}

#app>ul>li {
  margin: 0 10px;
  padding: 10px 10px;
  box-sizing: border-box;
  background: #000;
}

#app>ul>li ol {
  padding: 20px;
  margin: 0 auto;
}

#app>ul>li tr,
td {
  box-sizing: border-box;
  padding: 5px;
}

#app>ul>li h2 {
  color: #fff;
  text-align: center;
}
</style>
