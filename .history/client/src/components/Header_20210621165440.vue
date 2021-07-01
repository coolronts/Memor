<template>
  <div class="bg-white px-28 py-12">
      <Navbar/>
      <Menu/>
  </div>    
</template>

<script>
  import Navbar from "./Navbar.vue"
  import Menu from "./Menu.vue"
  export default {
    name:"Header",
    components:{Navbar, Menu},
    data(){
      return{
        posts:[],
        text:'',
        error:'',
      }},
      async created(){
        try {
          this.posts = await PostService.getPosts();
        } catch (error) {
          this.error = error.message
        }
      }
    }
</script>
