<template>
  <div class="min-h-screen flex flex-row bg-gray-100">
    <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
      <DashboardHeading :headingName="headingName"/>
      <div class="flex flex-wrap justify-center py-6 px-12">
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
      }
    }
  }
</script>

