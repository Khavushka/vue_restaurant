 <template>
  <div>
    <Header />
    <h1>Update page header</h1>
    <form action="">
      <input class="form-control"  type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
      <input class="form-control"  type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
      <input class="form-control"  type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
      <button class="btn btn-success" v-on:click="updateRestaurant">Update</button>
    </form>
  </div>
 </template>
 
 <script>
 import Header from './Header.vue'
 import axios from 'axios'
 export default {
    name: 'Update',
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
    methods:{
      async updateRestaurant(){
        const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id,{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
        });
        if(result.status==200){
          this.$router.push({name:'Home'})
        }
      }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
          this.$router.push({name:'SignUp'})
        }

        const result = await axios.get('http://localhost:3000/restaurant/'+ this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.restaurant = result.data //This string fil op all felts with data
      }
 }
 </script>
 
 <style>
 
 </style>