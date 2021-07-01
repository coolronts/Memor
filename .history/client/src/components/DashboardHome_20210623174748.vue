<template>
 <div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <a href="#" class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Dashboard</a>
    </div>
    <div class="flex py-6 ">
      <Card class="w-1/4"/>
    </div>
  </div>
</div>
</template>

<script>
 import Card from "./Card.vue"
 export default {
  name:'DashboardHome',
  components:{Card}
 }
</script>

