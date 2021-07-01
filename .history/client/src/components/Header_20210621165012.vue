<template>
  
    <div class="bg-white">
      <div class="container p-6 mx-auto">
        <Navbar/>
        <div class="flex items-center justify-center mt-6  text-gray-600 capitalize dark:text-gray-300">
          <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>
          <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Your Post</a>
          <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Post New</a>
        </div>
      </div>
    </div>    
</template>

<script>
  import Navbar from "./Navbar.vue"
  export default {
    name:"Header",
    components:{Navbar},
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
