<template>
 <div class="flex bg-gray-100">
  <Sidebar/>
  <DashboardHome  class="ml-2 w-full rounded-l-full  shadow-lg bg-white"/>
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
