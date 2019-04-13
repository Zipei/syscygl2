<template>
  <div>
    <el-input v-model="input" placeholder="请输入账号"></el-input>


    <el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
  </div>
</template>

<script>
export default {
    data() {
      return {
        input11: ''
      }
    }
  }
</script>

<style>

</style>