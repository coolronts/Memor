<template>
  <div :class="style.headingContainer">
    <div class="flex">
    <img :class="style.image" :src="imageBase64" alt="Profile image"/>
      <p :class="style.username">Hi! {{userName}} </p>
    </div>
    <div :class="style.heading"> {{headingName}} </div>
      <div :class="style.body">
        <div :class="style.container">
          <button @click="dropdownOpen = !dropdownOpen" :class="style.button">
              <i :class="style.icon"/><div v-if="unreadNotifications !=0" :class="style.unreadNotifications "> {{unreadNotifications}} </div> 
          </button>
          <div v-if="dropdownOpen" :class="style.notifications" style="width:20rem;">
            <div class="py-2">
              <div v-if="postedUsers==null" class="text-center text-bold text-gray-400 my-6 text-xl">No Notification</div>
              <div v-for="(postedUser, index) in postedUsers" :key="index">
                <div @click="viewed(postedUser.viewed,postedUser.postId,index)" :class="[{'bg-gray-100':!postedUser.viewed} ,style.notificationContainer]">
                  <img :class="style.avatar" :src="postedUsers[index].profile" alt="avatar">
                  <p :class="style.textContainer">
                    <span :class="style.text"> {{postedUsers[index].name}}  </span> liked on the <span :class="style.subText">{{postedUsers[index].title}} </span> article
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
          headingContainer:"flex px-16  items-center justify-between h-20 shadow-md",
          heading:" w-1/4 text-2xl font-bold text-gray-800  md:text-3xl",  
          body:"flex justify-center ",
          username:"w-full  font-bold text-lg",
          container:"relative ",
          image:"inline object-cover w-8 h-8 mr-2  rounded-full ring-2 ring-red-600",
          button:"relative z-10 block focus:outline-none h-10 flex ",
          unreadNotifications:"self-end mr-2 text-xs font-bold leading-none text-red-100 px-2 py-1 rounded-full bg-red-600",
          notifications:"border-2 absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20",
          notificationContainer:"cursor-pointer flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2",
          avatar:"h-8 w-8 rounded-full object-cover mx-1",
          textContainer:"text-gray-600 text-sm mx-2",
          text:"font-bold",
          subText:"font-bold text-blue-500",
          icon:"fas fa-bell text-2xl self-end"
        },
        imageBase64:'',
        dropdownOpen: false,
        notifications: [],
        postedUsers:[],
        unreadNotifications:0,
        userName:'',
      }
    },
    props:['headingName'],
     methods:{
      viewed(viewed,postId,index){
        if(!viewed){
          axios.post('/update_notification/'+ this.$store.state.user._id + '/'+ index )
        }
        this.$router.push({ name: 'PostPage', params: { id: postId}})
      }
    },
    created(){
      this.imageBase64 = this.$store.state.user.profile;
      this.userName = this.$store.state.user.username; 
      
      window.setInterval(() => {
        axios
        .get('/notifications/'+ this.$store.state.user._id)
        .then(response => {
          this.notifications = response.data[0].notification
          if(this.notifications.length == this.postedUsers.length) return
          this.postedUsers = []
          this.unreadNotifications = 0
          this.notifications.forEach(async notification => {
            if(this.notifications.length > this.postedUsers.length){
              const userResponse = await axios.get('/user/'+ notification.user)
              const postResponse = await axios.get('/post/'+ notification.post)
              if(!notification.viewed) this.unreadNotifications++
              this.postedUsers.push({postId:postResponse.data._id,viewed:notification.viewed ,name:userResponse.data.username,profile:userResponse.data.profile,title:postResponse.data.title})
            }
          })
        })      
      },4000)
    },
  }
</script>
