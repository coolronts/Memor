<template>
  <div class="flex bg-gray-100">
    <Sidebar/>
    <DashboardHome v-if="this.$store.state.dashboard==0" class="ml-2 w-full"/>
    <DashboardMyPost  v-if="this.$store.state.dashboard==1" class="ml-2 w-full"/>
    <DashboardNewPost  v-if="this.$store.state.dashboard==2" class="ml-2 w-full "/>
    <Profile v-if="this.$store.state.dashboard==3" class="ml-2 w-full "/>
  </div>
</template>

<script>
  import Sidebar from "../components/Sidebar.vue"
  import DashboardHome from "../components/DashboardHome.vue"
  import DashboardMyPost from "../components/DashboardMyPost.vue"
  import DashboardNewPost from "../components/DashboardNewPost.vue"
  import Profile from "../components/Profile.vue"

  export default {
    name:'Dashboard',
    components:{
    Sidebar,DashboardHome,DashboardMyPost,DashboardNewPost,Profile
    },
  }
</script>
