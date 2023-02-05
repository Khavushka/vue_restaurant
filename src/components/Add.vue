 <template>
  <div>
    <Header />
    <h1>Add page</h1>
    <form action="">
      <input class="form-control"  type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
      <input class="form-control"  type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
      <input class="form-control"  type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
      <button class="btn btn-success" v-on:click="addRestaurant">Add</button>
    </form>
  </div>
 </template>
 
 <script>
 import Header from './Header.vue'
 export default {
    name: 'Add',
    components:{
      Header
    },
    data(){
      return{
        restaurant:{
          name:'',
          address:'',
          contact:'',
        }
      }
    },
    methods: {
      addRestaurant(){
        console.log(this.restaurant)
      }
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