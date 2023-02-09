 <template>
  <div>
  <Header />
    <h1>Hello {{ name }}, Welcome on Home page</h1>
    <table border="1">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>
          <router-link :to="'/update/'+item.id">Update</router-link>
          <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
 </template>
 
 <script>
 import Header from './Header.vue'
 import axios from 'axios'
 export default {
    name: 'Home',
    data(){
      return {
        name:'',
        restaurant: [],
      }
    },
    components:{
      Header
    },
    methods: {
      async deleteRestaurant(id){
        let result = await axios.delete('http://localhost:3000/restaurant/'+id);
        if(result.status==200){
          this.loadData()
        }
      },
      async loadData(){
        let user = localStorage.getItem("user-info");
        this.name=JSON.parse(user).name;
        if(!user) {
          this.$router.push({name:'SignUp'})
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        // console.log(result)
        this.restaurant =result.data;
      }
    },
    async mounted() {
      this.loadData()
    }
 }
 </script>
 
 <style>
 table{
  margin: 10px;
 }
 td{
  width: 160px;
  height: 40px;
 }
 </style>