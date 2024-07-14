<template>
  <div id="app">
    <el-cascader clearable :props="props"></el-cascader>
  </div>
</template>

<script>
import { getApi } from "./toponym/http.js";
export default {
  data() {
    return {
      props: {
        value: "id", //渲染id
        label: "name", //渲染name
        lazy: true, //动态加载
        multiple: true, //多选
        checkStrictly: true, //父子节点不关联
        lazyLoad(node, resolve) {
          let id = node.value;
          getApi("/area", {
            id,
          }).then((res) => {
            resolve(res.data);
          });
        },
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 120px;
  display: flex;
  justify-content: center;
}
</style>
