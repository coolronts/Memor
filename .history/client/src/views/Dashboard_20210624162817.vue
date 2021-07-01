<template>
 <div class="flex bg-gray-100">
  <Sidebar"/>
  <DashboardHome v-if="this.$store.state.dashboard==0" class="ml-2 w-full"/>
  
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardHome from "../components/DashboardHome.vue"

 export default {
  name:'Dashboard',
  components:{
   Sidebar,DashboardHome
  },

 }
</script>
