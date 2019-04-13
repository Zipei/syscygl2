
<template>
  <div class="note">
    <div class="login_box">
      <div class="login_form">
        <el-input class="login_username" v-model="information.qq" placeholder="请输入账号"></el-input>
        <el-input class="login_password" placeholder="请输入密码" v-model="information.password" show-password></el-input>
        <el-button class="login_button" @click="onLogin()" type="primary">登录</el-button>
      </div>
    </div>
  </div>
</template>
 
 
 
<script>
//  import { userLogin } from '../../api/api';
 
  export default {
    data() {
      return {
        information:{
          qq: '',
          password: '',
        }
      }
    },
    // created () {
    //   if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
    //     this.userName = JSON.parse( localStorage.getItem('user')).userName;
    //     this.password = JSON.parse( localStorage.getItem('user')).password;
    //   }
    // },
    // computed: {
    //   btnText() {
    //     if (this.isBtnLoading) return '登录中...';
    //     return '登录';
    //   }
    // },
    methods: {
      input() {
        if (!this.information.qq) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.information.password) {
          this.$message.error('请输入密码');
          return;
        }else{
          next;
        }
      },
      onLogin(){
        console.log('进入onLogin()方法')
        console.log(this.information)
        console.log(this.information.qq,this.information.password)
        this.$axios.post('login',this.information)
        .then((res)=>{ 
          console.log("res啊啊啊",res) 
          }
        ).catch((error)=>{
          console.log(error);
        })
      }
    }
  }
</script>
<style>
  .note{
    position:absolute;
    width:100%; 
    height:100%;
    background: url("../img/star.jpg");
    background-size: 100%;
    background-repeat:contain;
    background-size:100% 100%;
  }
  .login_box{
    text-align:center;
    margin:160px auto;
    box-shadow: 0 0 25px #cac6c6;
    background: whitesmoke;
    padding: 35px 35px 15px 35px;
    width: 350px;
    height: 350px;
    background-clip: padding-box;
    border-radius: 10px;
  }
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .login_username {
    text-align:center;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;

  }
  .login_password {
    text-align:center;
    background-size: 15px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_button {
    text-align:center;
    margin: 30px;
    width: 150px;
  }
</style>
