<template>
 <div :class="style.headingContainer">
 <div :class="style.heading">Profile</div>

<div class="flex justify-center">
    <div  class="relative my-32 mr-24">
        <button @click="dropdownOpen = !dropdownOpen" class="relative z-10 block p-2 focus:outline-none h-10 px-5 text-gray-700 rounded-lg">
            <i class="fas fa-bell"><span class="text-xs font-bold  text-red-600 ">9</span> </i>
        </button>
        <div v-if="dropdownOpen" class="border-2 absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20" style="width:20rem;">
         <div class="py-2">
             <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                 <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                 <p class="text-gray-600 text-sm mx-2">
                     <span class="font-bold" href="#">Sara Salah</span> replied on the <span class="font-bold text-blue-500" href="#">Upload Image</span> artical . 2m
                 </p>
             </a>
             <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                 <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar">
                 <p class="text-gray-600 text-sm mx-2">
                     <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                 </p>
             </a>
             <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2">
                 <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                 <p class="text-gray-600 text-sm mx-2">
                     <span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="font-bold text-blue-500" href="#">Test with TDD</span> artical . 1h
                 </p>
             </a>
             <a href="#" class="flex items-center px-4 py-3 hover:bg-gray-100 -mx-2">
                 <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar">
                 <p class="text-gray-600 text-sm mx-2">
                     <span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h
                 </p>
             </a>
         </div>
         </div>
    </div>
</div>
  
 </div>
</template>

<script>
 import axios from 'axios';
 export default{
  name:'DashboardHeading',
  data(){
   return{
    style:{
     headingContainer:"flex items-center justify-center h-20 shadow-md",
     heading:"w-full block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",  
    },
    dropdownOpen: true,
    unreadNotifications:0,
   }
  },
  mounted(){
      window.setInterval(() => {
        axios
        .get('http://localhost:5000/notifications/'+ this.$store.state.user._id)
        .then(response => ( this.unreadNotifications = response.data.notification.length))
      }, 3000)
    }
 }
</script>