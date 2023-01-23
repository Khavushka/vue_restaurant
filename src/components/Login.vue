<template>
<div class="register">
  <img  src="../logo.jpg" alt="">
  <h1>Sign Up</h1>
  <input type="text" v-model="email" placeholder="Enter Email">
  <input type="password" v-model="password" placeholder="Enter Password">
  <button v-on:click="Login">Login</button>
  <p>
    <router-link to="/sign-up">SignUp</router-link>
  </p>
</div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style>
p{
    text-align: center;
}
</style>