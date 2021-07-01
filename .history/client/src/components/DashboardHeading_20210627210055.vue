<template>
  <div :class="style.headingContainer">
    <div :class="style.heading"> {{headingName}} </div>
      <img :class="style.image" :src="imageBase64" alt="Profile image"/>
      <div :class="style.body">
        <div :class="style.container">
          <img :class="style.image" :src="imageBase64" alt="Profile image"/>
          <button @click="dropdownOpen = !dropdownOpen" :class="style.button">
              <i :class="style.icon"/><div v-if="unreadNotifications !=0" :class="style.unreadNotifications "> {{unreadNotifications}} </div> 
          </button>
          <div v-if="dropdownOpen" :class="style.notifications" style="width:20rem;">
            <div class="py-2">
              <div v-for="(notification, index) in notifications" :key="notification.post">
                <div @click="viewed(notification.viewed,index)" :class="[{'bg-gray-100':!notification.viewed} ,style.notificationContainer]">
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
          image:"inline object-cover w-12 h-12 mr-2 rounded-full",
          button:"relative z-10 block focus:outline-none h-10 flex ",
          unreadNotifications:"self-end mr-2 text-xs font-bold leading-none text-red-100 px-2 py-1 rounded-full bg-red-600",
          notifications:"border-2 absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20",
          notificationContainer:"flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2",
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
        postInfo:[],
        unreadNotifications:0
      }
    },
    props:['headingName'],
     methods:{
      viewed(viewed,index){
        if(!viewed){
          axios.post('http://localhost:5000/updatenotification/'+ this.$store.state.user._id + '/'+ index )
          .then(response=>(console.log(response)))
        }
      }
    },
    created(){
      this.imageBase64 = this.$store.state.user.profile
      window.setInterval(() => {
        let a=0;
        let b=0;
        let c=0;
        axios
        .get('http://localhost:5000/notifications/'+ this.$store.state.user._id)
        .then(response => ( this.notifications = response.data.notification))
        .then(this.notifications.forEach(async element => {
          const response = await axios.get('http://localhost:5000/user/'+ element.user)
          if(this.postedUsers.length < this.notifications.length) {
            this.postedUsers.push({name:response.data.username,profile:response.data.profile})
          }else if(this.postedUsers.length == this.notifications.length){
            if( b < this.notifications.length-1){
              if(b == this.notifications.length){
                b = 0
              }
              this.postedUsers[b].name = response.data.username;
              this.postedUsers[b].profile = response.data.profile
              b++;
            }
          }
          }))
        .then(this.notifications.forEach(async element => {
            const response = await axios.get('http://localhost:5000/post/'+ element.post)
            if(this.postInfo.length < this.notifications.length) {
              this.postInfo.push({title:response.data.title})
            }else if(this.postInfo.length == this.notifications.length){
            if( c < this.notifications.length-1){
              if(c == this.notifications.length){
                c = 0
              }
              this.postInfo[c].title = response.data.title;
              c++;
            }
          } 
        }))
        .then(this.notifications.forEach(element => {
          !element.viewed && a++
        }))
        .then(this.unreadNotifications = a)        
      }, 1000)
    }
  }
</script>