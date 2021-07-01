<template>
  <div :class="style.body">
    <Sidebar/>
    <DashboardHome v-if="this.$store.state.dashboard==0" :class="style.dashboard"/>
    <DashboardMyPost v-if="this.$store.state.dashboard==1" :class="style.dashboard"/>
    <DashboardNewPost v-if="this.$store.state.dashboard==2" :class="style.dashboard"/>
    <Profile v-if="this.$store.state.dashboard==3" :class="style.dashboard"/>
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
    data(){
      return{
        style{
          body:"flex bg-gray-100",
          dashboard:"ml-2 w-full",
        }
      }
    }
  }
</script>
