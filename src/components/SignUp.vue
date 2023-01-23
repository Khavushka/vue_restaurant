<template>
<div class="register">
  <img  src="../logo.jpg" alt="">
  <h1>Sign Up</h1>
  <input type="text" v-model="name" placeholder="Enter Name">
  <input type="text" v-model="email" placeholder="Enter Email">
  <input type="password" v-model="password" placeholder="Enter Password">
  <button v-on:click="signUp">Sign Up</button>
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
          alert("sign-up done")
          localStorage.setItem("user-info", JSON.stringify(result.data))
        }
      }
    }
}
</script>

<style>
    .sign_up_text{
        text-align: center;
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
    .register button{
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