<template>
 <div class="flex bg-gray-100">
  <Sidebar  @modal="modal"/>
  <DashboardHome class="ml-2 w-full"/>
  <DashboardNewPost class="ml-2 w-full "/>
  <DashboardMyPost  class="ml-2 w-full"/>
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
  data(){
   return{
    dashboard:0,
   }
  },
  methods{
   switchDashboard(x){
     this.dashboard = x;
   },
  }

 }
</script>
