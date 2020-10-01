<template>
    <div class="login">
    <el-form ref="form" :model="form" :rules="rules" class="login-form">
         <h3 class="title">管理系统</h3>
        
        <el-form-item prop="username">
        <el-input v-model="form.username" type="text" auto-complete="off" placeholder="账号">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          auto-complete="off"
          placeholder="密码">
        </el-input>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click="onSubmit('form')">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
            username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 18, message: '长度在 4 到 18个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 18, message: '长度在 4 到 18个字符', trigger: 'blur' }
          ],
        },
        loading: false
      }
    },
    methods: {
      onSubmit(formName) {
        console.log('submit!');
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                message: '登陆成功',
                type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style >
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
}
.login-form {
    width: 320px;
    height: 300px;
    border: 1px solid #DCDFE6;

    margin: 150px auto;

    padding: 30px 100px 20px 100px;

    border-radius: 8px;
    box-shadow: 0px 0px 20px #DCDFE6;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}


</style>