<template>
 <div class="flex bg-gray-100">
  <Sidebar/>
  <DashboardNewPost class="ml-2 w-full my-24"/>
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardNewPost from "../components/DashboardNewPost.vue"
 export default {
  name:'NewPost',
  components:{
   Sidebar,DashboardNewPost
  }

 }
</script>
