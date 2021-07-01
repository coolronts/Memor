<template>
 <div class="flex bg-gray-100">
  <Sidebar/>
  <MyPost  class="ml-2 w-full"/>
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardHome from "../components/MyPost.vue"
 export default {
  name:'MyPost',
  components:{
   Sidebar,MyPost
  }

 }
</script>
