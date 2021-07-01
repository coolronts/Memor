<template>
 <div class="flex">
  <Sidebar/>
  <DashboardHome  class="mx-12 my-12 shadow-lg"/>
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
