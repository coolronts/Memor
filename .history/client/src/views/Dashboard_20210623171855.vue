<template>
 <div class="flex">
  <Sidebar/>
  <DashboardHome/>
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
