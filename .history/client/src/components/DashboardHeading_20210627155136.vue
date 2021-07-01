<template>
  <div :class="style.headingContainer">
    <div :class="style.heading">Profile</div>
      <div :class="style.body">
        <div :class="style.container">
          <button @click="dropdownOpen = !dropdownOpen" :class="style.button">
              <i class="fas fa-bell"><span :class="style.unreadNotifications "> {{unreadNotifications}} </span> </i>
          </button>
          <div v-if="dropdownOpen" :class="style.notifications" style="width:20rem;">
            <div class="py-2">
              <div v-for="(notification, index) in notifications" :key="notification.post">
                <div @click="viewed(notification)" :class="[{'bg-gray-100':!notification.viewed} ,style.notificationContainer]">
                  <img :class="style.avatar" :src="postedUsers[index].profile" alt="avatar">
                 <p :class="style.textContainer">
                     <span :class="style.text"> {{postedUsers[index].name}}  </span> liked on the <span :class="style.subText">{{postInfo[index].title}} </span> article
                 </p>
                </div>
              </div>
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
          body:"flex justify-center",
          container:"relative my-32 mr-24",
          button:"relative z-10 block p-2 focus:outline-none h-10 px-5 text-gray-700 rounded-lg",
          unreadNotifications:"text-xs font-bold text-red-600",
          notifications:"border-2 absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20",
          notificationContainer:"flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2",
          avatar:"h-8 w-8 rounded-full object-cover mx-1",
          textContainer:"text-gray-600 text-sm mx-2",
          text:"font-bold",
          subText:"font-bold text-blue-500",
        },
        dropdownOpen: false,
        notifications: [],
        postedUsers:[],
        postInfo:[],
        unreadNotifications:0
      }
    },
    methods{
      viewed(){

      }
    },
    created(){
      window.setInterval(() => {
        let a=0;
        let start = 0;
        axios
        .get('http://localhost:5000/notifications/'+ this.$store.state.user._id)
        .then(response => ( this.notifications = response.data.notification))
        .then(this.notifications.forEach(async element => {

              const response = await axios.get('http://localhost:5000/user/'+ element.user)
              if(this.postedUsers.length == this.notifications.length) {
                  this.postedUsers = []
              }
              this.postedUsers.push(
                {
                  name:response.data.username,
                  profile:response.data.profile
                }
              )
              }))
        .then(this.notifications.forEach(async element => {
            const response = await axios.get('http://localhost:5000/post/'+ element.post)
            if(this.postInfo.length == this.notifications.length) {
                  this.postInfo = []
              }
            this.postInfo.push(
            {
              title:response.data.title,
            }
          )
              }))
      
        .then(this.notifications.forEach(element => {
                !element.viewed && a++
              }))
        .then(this.unreadNotifications = a)
        .then(console.log(this.postedUsers,this.postInfo))
        
      }, 1000)
    }
  }
</script>