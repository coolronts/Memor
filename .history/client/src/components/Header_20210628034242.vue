<template>
  <div class="bg-white py-6">
    <Navbar class="mx-4"/>
  </div>    
</template>

<script>
  import Navbar from "./Navbar.vue"
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
