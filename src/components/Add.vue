 <template>
  <div>
    <Header />
    <h1>Add page</h1>
    <form action="">
      <input class="form-control"  type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
      <input class="form-control"  type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
      <input class="form-control"  type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
      <button class="btn btn-success" v-on:click="addRestaurant">Update</button>
    </form>
  </div>
 </template>
 
 <script>
 import Header from './Header.vue'
 import axios from "axios"
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
      async addRestaurant(){
        // console.log(this.restaurant)
        const result = await axios.post("http://localhost:3000/restaurant",{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
        });
        if(result.status==201){
          this.$router.push({name:'Home'})
        }
        console.warn("result", result)
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