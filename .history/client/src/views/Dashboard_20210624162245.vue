<template>
 <div class="flex bg-gray-100">
  <Sidebar  @switchDashboard="switchDashboard"/>
  <DashboardHome v-if="dashboard==0" class="ml-2 w-full"/>
  <DashboardMyPost  v-if="dashboard==1"  class="ml-2 w-full"/>
  <DashboardNewPost  v-if="dashboard==2" class="ml-2 w-full "/>
 </div>
</template>

<script>
 import Sidebar from "../components/Sidebar.vue"
 import DashboardHome from "../components/DashboardHome.vue"
 import DashboardMyPost from "../components/DashboardMyPost.vue"
 import DashboardNewPost from "../components/DashboardNewPost.vue"

 export default {
  name:'Dashboard',
  components:{
   Sidebar,DashboardHome,DashboardMyPost,DashboardNewPost
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
