<template>
  <div class="min-h-screen flex flex-row bg-gray-100">
    <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
      <DashboardHeading :headingName="headingName"/>
      <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
  <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="
    top: 50%;
">
    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
  </span>
</div>
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

