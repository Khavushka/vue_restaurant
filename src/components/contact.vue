<template>
  <Header />
  <h1>Contact page</h1>
   </template>
   
   <script>
   import Header from './Header.vue'
   export default {
      name: 'contact',
      components:{
        Header
      },
      mounted() {
          let user = localStorage.getItem("user-info");
          if(!user) {
            this.$router.push({name:'SignUp'})
          }
        }
   }
   </script>
   
   <style>
   
   </style>