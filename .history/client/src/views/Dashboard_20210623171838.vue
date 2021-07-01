<template>
 <div class="flex flex-col">
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
