<template>
 <div class="flex bg-gray-100">
  <Sidebar/>
  <DashboardHome  class="ml-12 rounded-t-full p-12 shadow-lg bg-white"/>
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardHome from "../components/DashboardHome.vue"
 export default {
  name:'Dashboard',
  components:{
   Sidebar,DashboardHome
  }

 }
</script>
