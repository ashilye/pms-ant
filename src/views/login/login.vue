<template>
    <div class="login">
    <el-form ref="loginForm" :model="loginForm" class="login-form" label-width="80px">
         <h3 class="title">后台管理系统</h3>
         
    </el-form>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}


</style>