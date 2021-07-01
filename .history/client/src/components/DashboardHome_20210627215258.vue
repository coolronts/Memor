<template>
  <div :class="style.body">
    <div :class="style.container">
      <DashboardHeading :headingName="headingName"/>
      <div :class="style.postsContainer">
        <AllPost/>
      </div>
    </div>
  </div>
</template>

<script>
  import AllPost from '../components/AllPost.vue'
  import DashboardHeading from "../components/DashboardHeading.vue"
  export default {
    name:'DashboardHome',
    components:{AllPost,DashboardHeading},
    data(){
      return{
        headingName:"Dashboard",
        style:{
          body:"min-h-screen flex flex-row bg-gray-100",
          container:"flex flex-col w-full bg-white rounded-l-3xl overflow-hidden",
          postsContainer:"flex flex-wrap justify-center py-6 px-12"
        }
      }
    }
  }
</script>

