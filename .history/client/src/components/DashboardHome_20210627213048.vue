<template>
  <div class="min-h-screen flex flex-row bg-gray-100">
    <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
      <div class="flex items-center justify-center h-20 shadow-md">
        <div class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Dashboard</div>
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
    data(){return{
      headingName:"Profile",
    }}
  }
</script>

