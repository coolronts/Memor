<template>
<header class="bg-white dark:bg-gray-800">
  <div class="bg-white dark:bg-gray-800">
    <div class="container p-6 mx-auto">
      <div class="flex justify-between">
        <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
        <div class="pt-2 relative mx-auto ">
          <input class=" text-lg bg-white h-10 px-5 pr-16 ml-24  rounded-full outline-none border-2 focus-within:border-red-600 " type="search" name="search" placeholder="Search">
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg class="text-gray-600 h-4 w-4 fill-current outline-none" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
              viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
              width="512px" height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div>
          <button class="mr-3 text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Sign In </button>    
          <button class="text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Sign Up </button>
        </div>
      </div>
      <div class="flex items-center justify-center mt-6  text-gray-600 capitalize dark:text-gray-300">
        <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>
        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>
    </div>
</div>
    </div>

    
</header>
</template>

<script>
  import PostService from '../serverService/postService'
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

<style scoped>
  .toolbar{
    padding-left: 20px;
  }
</style>
