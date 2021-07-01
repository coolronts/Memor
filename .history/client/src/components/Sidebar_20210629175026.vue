<template>
  <div :class="style.body">
    <div :class="style.container">
      <div :class="style.headerContainer">
        <a :class="style.header">MEMOR</a>
      </div>
      <ul :class="style.list">
        <li @click="switchDashboard(0)">
          <a :class="style.listItem">
            <span :class="style.iconContainer"><i class="fas fa-home"/></span>
            <span :class="style.itemName">Dashboard</span>
          </a>
        </li>
        <li @click="switchDashboard(1)">
          <a :class="style.listItem">
            <span :class="style.iconContainer"><i class="fas fa-file-alt"/></span>
            <span :class="style.itemName">My Post</span>
          </a>
        </li>
        <li @click="switchDashboard(2)">
          <a :class="style.listItem">
            <span :class="style.iconContainer"><i class="fas fa-file-medical"/></span>
            <span :class="style.itemName">Make New Post</span>
          </a>
        </li>
        <li @click="switchDashboard(3)">
          <a :class="[{'translate-x-2 text-red-600':sidebarSelect=3},style.listItem]">
            <span :class="style.iconContainer"><i class="fas fa-user-circle"/></span>
            <span :class="style.itemName">Profile</span>
          </a>
        </li>
        <li>
          <a :class="style.listItem">
            <span :class="style.iconContainer"><i class="fas fa-sign-out-alt"/></span>
            <span @click="logout" :class="style.itemName">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";
  
  export default {
    name:'Sidebar',
    data(){
      return{
        sidebarSelect:2,
        style:{
          body:"min-h-screen flex flex-row bg-gray-100",
          container:"flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden",
          headerContainer:"flex items-center justify-center h-20 shadow-md",
          header:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          list:"flex flex-col py-8",
          listItem:"cursor-pointer flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-red-600",
          iconContainer:"inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400",
          itemName:"text-sm font-medium",
        }
      }
    },
    methods:{
      ...mapMutations(["setDashBoard","setUser","setToken"]),

      logout(){
        this.$store.commit('setUser',null)
        this.$store.commit('setToken',null)
        this.$router.push({ name: 'Home'})
      },

      switchDashboard(x){
        this.$store.commit('setDashboard',x)
      },
    },
    computed:{ 
      //this.sidebarSelect = this.$store.state.dashboard
    }
  }
</script>
