<template>
<div class="register">
  <img  src="../logo.jpg" alt="">
  <h1 className="text-3xl font-bold underline">Sign Up</h1>
  <input type="text" v-model="email" placeholder="Enter Email">
  <input type="password" v-model="password" placeholder="Enter Password">
  <button class="bg-sky-500 hover:bg-sky-700" v-on:click="Login">Login</button>
  <p>
    <router-link to="/sign-up">SignUp</router-link>
  </p>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods:{
      async Login() {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        if(result.status==200 && result.data.length > 0){
          localStorage.setItem("user-info", JSON.stringify(result.data[0]))
          this.$router.push({name:'Home'})
        }
      },
      mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
          this.$router.push({name:'Home'})
        }
      }
    }
}
</script>

<style>
p{
    text-align: center;
}

</style>