<template>
  <div id="hello">
    <h1>学生信息系统</h1>
    <button v-if="bool" @click="bool = false" style="margin-top: 20px">添加学生</button>
    <div v-else class="add">
      <button @click="sortStudent">确实添加</button>
      <button @click="bool = true">取消添加</button>
      <input type="text" name="name" placeholder="输入学生姓名" v-model="tableDate.name">
      <input type="text" name="age" placeholder="输入学生年龄" v-model.number="tableDate.age">
      <input type="text" name="score" placeholder="输入学生分数" v-model.number="tableDate.score">
    </div>
    <div class="sort">
      <button @click="sortStudentList('age')">按年龄排序</button>
      <button @click="sortStudentList('score')">按分数排序</button>

      <table border="1" style="border-collapse: collapse;">
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>分数</th>
        </tr>
        <tr v-for="item in studentList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      bool: true,
      tableDate: [],
      studentList: [
        {
          id: '1',
          name: '张三',
          age: 18,
          score: 100
        }
      ]
    }
  },
  methods: {
    sortStudent() {
      if (this.tableDate.name === undefined || this.tableDate.age === undefined || this.tableDate.score === undefined ||
        this.tableDate.name === '' || this.tableDate.age === '' || this.tableDate.score === '') {
        return alert('请输入完整信息');
      }
      this.tableDate.id = Math.random() + '';
      this.studentList.push(this.tableDate);
      this.tableDate = {};
      this.bool = true;
    },
    sortStudentList(key) {
      this.studentList.sort((a, b) => a[key] - b[key]);
    }
  }
}
</script>

// Add " scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
#hello {
  width: 800px;
  height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;

  & .hello,
  .sort {
    text-align: center;
    margin-top: 20px;
  }

  & table {
    margin: 20px auto;

    td {
      width: 120px;
      padding: 20px
    }
  }
}
</style>