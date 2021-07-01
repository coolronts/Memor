<template>
  <div :class="style.body">
    <a href="#": class="style.active">home</a>
    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Your Post</a>
    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Post New</a>
  </div>
</template>

<script>
  export default {
    name:"Menu",
    data(){
      return{
        style:{
          body:"flex items-center justify-center mt-6  text-gray-600 capitalize dark:text-gray-300",
          active:"text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6",

        }  
      }
    }
  }
</script>