<template>
 <div :class="style.headingContainer">
  <div :class="style.heading">Profile</div>
 </div>
</template>

<script>
 export default{
  name:'DashboardHeading',
  data(){
   return{
    style:{
     headingContainer:"flex items-center justify-center h-20 shadow-md",
     heading:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",  
    }
   }
  }
 }
</script>