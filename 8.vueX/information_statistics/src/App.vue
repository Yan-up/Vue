<template>
  <el-card>
    <el-row :gutter="20" class="height">
      <el-col :span="6">
        <el-card>
          <p>独生子女数量:{{ aloneNum }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p>城市户口学生数量:{{ cityNum }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p>已成年学生数量:{{ ageNum }}</p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <p>已接种新冠疫苗人数:{{ vaccineNum }}</p>
        </el-card>
      </el-col>
    </el-row>
    <el-card style="margin-top: 20px">
      <el-row>
        <el-button type="success" @click="openDialog()">新增学生</el-button>
        <el-button type="warning" @click="handleDelete('check')">选中删除</el-button>
        <el-button type="danger" @click="handleDelete('all')">删除全部</el-button>
      </el-row>
      <el-table border :data="tableList" style="width: 100%; margin-top: 20px;" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column label="姓名" align="center" prop="name"></el-table-column>
        <el-table-column label="年龄" align="center" prop="age"></el-table-column>
        <el-table-column label="是否独生" align="center">
          <template slot-scope="scope">
            <!-- 根据计算属性的值进行自定义显示 -->
            {{scope.row.alone === '1' ? "独生子女" : "非独生子女"}}
          </template>
        </el-table-column>
        <el-table-column label="户口" align="center">
          <template slot-scope="scope">
            <!-- 根据计算属性的值进行自定义显示 -->
            {{ scope.row.isCity === '1' ? "城市户口" : "非城市户口" }}
          </template>
        </el-table-column>
        <el-table-column label="手机" width="150" align="center" prop="phone"></el-table-column>
        <el-table-column label="身份证" width="250" align="center" prop="idCard"></el-table-column>
        <el-table-column label="地址" width="300" align="center" prop="address"></el-table-column>
        <el-table-column label="新冠疫苗" align="center">
          <template slot-scope="scope">
            <!-- 根据计算属性的值进行自定义显示 -->
            {{ scope.row.vaccine === '1' ? "已接种" : "未接种" }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            <el-button size="mini" @click="openDialog(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <NewStudent ref="dialog" v-if="dislogShow" @close="onClose"></NewStudent>
  </el-card>
</template>

<script>
import NewStudent from "@/components/NewStudent.vue"
import { mapGetters, mapState, mapMutations } from "vuex"
export default {
  name: "App",
  components: {// 注册新增学生组件
    NewStudent
  },
  computed: {// 引入vuex的getters
    ...mapGetters(['cityNum', 'aloneNum', 'ageNum', 'vaccineNum']),//根据计算属性渲染页面
    ...mapState(['tableList'])// 引入vuex的state,用于渲染表格数据
  },
  data() {
    return {
      dislogShow: false,// 控制新增学生弹窗的显示与隐藏
      selectionIdLits: [],// 存储选中的id
    }
  },
  methods: {
    ...mapMutations(['deleteTadList']),
    openDialog(row) {// 获取子组件并调用它的方法,打开新增学生弹窗
      this.dislogShow = true
      this.$nextTick(() => {// $nextTick当数据更新后,会执行回调函数,确保数据更新后执行
        this.$refs.dialog.open(row)
      })
    },
    onClose() {// 关闭弹窗
      this.dislogShow = false
    },
    handleSelectionChange(id) {// 获取选中的id
      this.selectionIdLits = id.map(item => item.id)
    },
    handleDelete(type) {// 删除学生信息
      this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let arr = []
        if (type === 'all') {// 全选删除
          arr = this.tableList.map(item => item.id)
        } else if (type === 'check') {// 勾选删除
          arr = this.selectionIdLits
        } else {// 单条删除
          arr = [type]
        }
        this.deleteTadList(arr)

        if (arr.length === 0) {// 判断是否选中删除
          this.$message({
            type: 'warning',
            message: '请至少选择一项进行删除!'
          })
          return // 结束函数执行，不进行后续删除操作
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.height p {
  margin: 10px 0;
}
</style>
