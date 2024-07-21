<template>
  <el-dialog :title="isAdd ? '新增学生' : '编辑学生'" :visible.sync="dialogFormVisible" :closeOnClickModal="false"
    @close="onClose" top="3.5vh" style="overflow: hidden;">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="idCard">
        <el-input v-model="ruleForm.idCard"></el-input>
      </el-form-item>
      <el-form-item label="是否独生" prop="alone">
        <el-radio-group v-model="ruleForm.alone">
          <el-radio label="1">独生子女</el-radio>
          <el-radio label="2">非独生子女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否接种" prop="vaccine">
        <el-radio-group v-model="ruleForm.vaccine">
          <el-radio label="1">已接种</el-radio>
          <el-radio label="2">未接种</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="户口所在地" prop="isCity">
        <el-select v-model="ruleForm.isCity" placeholder="请选择户口所在地">
          <el-option label="城市户口" value="1"></el-option>
          <el-option label="非城市户口" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "NewStudent",
  data() {
    return {
      isAdd: true,// 判断是新增还是编辑 默认是新增
      dialogFormVisible: false,
      ruleForm: { alone: '1', vaccine: "1" },//默认选中
      rules: {// 表单验证规则
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' },],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          // { pattern: /^(([0-9]|[1-9][1-9]|1[0-7][0-9])(\\.[0-9]+)?|120)$/, message: '请输入正确的年龄', trigger: 'blur' }
        ],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '请输入身份证', trigger: 'blur' },
          // { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    ...mapMutations(['addTableList', 'editTableList']),//调用index.js的方法
    open(row) {//在父组件中调用它,打开新增学生弹窗
      if (row) {//判断是否是编辑
        this.isAdd = false
        this.ruleForm = Object.assign({}, row)
      }
      this.dialogFormVisible = true
    },
    submitForm() {//提交新增信息
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let obj = Object.assign({
            id: Math.random() + ''//新增信息的id
          }, this.ruleForm)//浅拷贝
          if (this.isAdd) {//判断是新增还是编辑
            this.addTableList(obj)
          } else {
            this.editTableList(obj)
          }
          this.dialogFormVisible = false
        }
      })
    },
    onClose() {//通知父组件开启close事件
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
