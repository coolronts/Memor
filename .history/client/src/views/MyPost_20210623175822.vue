<template>
 <div class="flex bg-gray-100">
  <Sidebar/>
  <DashboardMyPost  class="ml-2 w-full"/>
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardMyPost from "../components/DashboardMyPost.vue"
 export default {
  name:'MyPost',
  components:{
   Sidebar,MyPost
  }

 }
</script>
