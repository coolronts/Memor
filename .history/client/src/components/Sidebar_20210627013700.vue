<template>
<div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <a href="#" class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">MEMOR</a>
    </div>
    <ul class="flex flex-col py-4">
      <li @click="switchDashboard(0)">
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Dashboard</span>
        </a>
      </li>
      <li @click="switchDashboard(1)">
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">My Post</span>
        </a>
      </li>
      <li @click="switchDashboard(2)">
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Make New Post</span>
        </a>
      </li>
      <li @click="switchDashboard(3)">
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
          <span class="text-sm font-medium">Profile</span>
        </a>
      </li>
      <li @click="switchDashboard(4)">
        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-bell"></i></span>
          <span class="text-sm font-medium">Notifications</span>
          <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li>
      <li>
        <a href="#" class="hover:text-red-600 flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 ">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
          <span class=" text-sm font-medium">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import { mapMutations } from "vuex";
  import axios from 'axios';
  import postService from '../serverService/postService';
  
  export default {
    name:'Sidebar',
    data(){
      return{
        notificationNumber:[]
      }
    },
    methods:{
      ...mapMutations(["setDashBoard"]),
      switchDashboard(x){
        this.$store.commit('setDashboard',x)
      },
      async fetchNotifications(){
        try {
          const data = await postService.getNotification('60d099f5b85ebe0650fcabb5')
          .then( this.notificationNumber = data)
          
          console.log(this.$store.state.user._id)
          console.log(this.notificationNumber)
        } catch (error) {
          console.log(error)
        }
        
      }
    },
    created(){
      this.fetchNotifications()
    }
 }
</script>
