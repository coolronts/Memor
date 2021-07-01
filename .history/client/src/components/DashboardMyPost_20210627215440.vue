<template>
 <div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <a href="#" class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">My Component</a>
    </div>
    <div class="flex flex-wrap justify-center py-6 ">
      <PostByUser/>
    </div>
  </div>
</div>
</template>

<script>
 import PostByUser from "./PostByUser.vue"
 export default {
  name:'DashboardMyPost',
  components:{PostByUser},
  data(){
      return{
        headingName:"My Posts",
        style:{
          body:"min-h-screen flex flex-row bg-gray-100",
          container:"flex flex-col w-full bg-white rounded-l-3xl overflow-hidden",
          postsContainer:"flex flex-wrap justify-center py-6 px-12"
        }
      }
    }
 }
</script>

