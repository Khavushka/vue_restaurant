<template>
<div class="register">
  <img  src="../logo.jpg" alt="">
  <h1>Sign Up</h1>
  <input type="text" v-model="name" placeholder="Enter Name">
  <input type="text" v-model="email" placeholder="Enter Email">
  <input type="password" v-model="password" placeholder="Enter Password">
  <button v-on:click="signUp">Sign Up</button>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Sign Up',
    data(){
      return {
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
      async signUp() {
        let result = await axios.post("http://localhost:3000/users",{email:this.email, password:this.password, name:this.name});
        console.warn(result);
        if(result.status = 201)
        {
          localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({name:'Home'})
        }
      },
      mounted() {
        let user = localStorage.getItem("user-info");
        if(user) {
          this.$router.push({name:'Home'})
        }
      }
    }
}
</script>

<style>
    h1,p{
        text-align: center;
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
    
    .register input{
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display:block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid #ccc;
    }
    .register button,p{
      width: 300px;
      height: 40px;
      padding-left: 20px;
      display:block;
      margin-bottom: 30px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid rgb(99, 122, 235);
      background-color:rgb(99, 122, 235);
      color: white;
    }
</style>