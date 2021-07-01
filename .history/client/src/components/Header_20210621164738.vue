<template>
  <header class="bg-white dark:bg-gray-800">
    <div class="bg-white dark:bg-gray-800">
      <div class="container p-6 mx-auto">
        
        <div class="flex items-center justify-center mt-6  text-gray-600 capitalize dark:text-gray-300">
          <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>
          <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Your Post</a>
          <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Post New</a>
        </div>
      </div>
    </div>    
  </header>
</template>

<script>
  import Navbar from "./Navbar"
  export default {
    name:"Header",
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
