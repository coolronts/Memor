<template>
  <div :class="style.body">
    <div :class="style.container">
      <img :class="style.image" :src="imgSrc" alt="thumbnail"/>
      <div :class="style.topPart">
        <div :class="style.place"> {{place}} </div>
        <div :class="style.timeContainer">
          <i :class="style.timeIcon"/>
          <p :class="style.time">6 Mins</p>
        </div>
      </div>
      <div @click="postPage" :class="style.title">{{title}}</div>
      <div :class="style.center">
        <p :class="style.description">{{description}}</p>
        <div  @click="postPage" :class="style.readMore">Read More...</div>
      </div>
      <div :class="style.footer">
        <div :class="style.footerContainer">
          <div :class="style.profilePic ">
            <img :class="style.avatar" :src="profileImage" alt="avatar"/>
            <p :class="style.author">{{author}}</p>
          </div>
          <div :class="style.likeContainer">
            <div @click="like"  :class="style.likeIcons">
              <i :class="[{'text-red-600':isLiked} ,'fas fa-heart']"/>
              <p :class="style.likesCount"> {{likes}} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import postService from '../serverService/postService';

  export default {
    name:"Card",
    props:['author','likedBy','imgSrc', 'title', 'description', 'likes', 'place','postId','profileImage'],
    data(){
      return{
        style:{
          body:"flex justify-between m-3",
          container:" flex flex-col overflow-hidden max-w-lg mx-auto bg-gray-800 rounded-lg",
          image:"rounded-lg rounded-b-none",
          topPart:"flex justify-between -mt-4 px-4",
          place:" w-auto inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-xs font-medium text-center text-gray-100 px-3 pt-1",
          timeContainer:" w-1/3 flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium",
          timeIcon:"fas fa-clock",
          time:"text-blue-500 font-semibold text-xs",
          title:"uppercase text-center py-2 px-4 text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer",
          center:"px-4 space-y-2",
          readMore:"cursor-pointer font-bold hover:text-blue-400 text-gray-100",
          description:"text-justify overflow-hidden h-24 my-4 text-gray-400 font-normal leading-5 tracking-wide",
          footer:"flex flex-row items-end h-full w-full px-4 mt-4",
          footerContainer:"flex border-t border-gray-700 w-full py-4",
          profilePic:"flex items-center space-x-3 border-r border-gray-700 w-full",
          avatar:"object-cover w-8 h-8 border-2 border-white rounded-full",
          author:"text-sm font-semibold text-white tracking-wide text-gray-200",
          likeContainer:"flex items-center flex-shrink-0 px-2",
          likeIcons:"cursor-pointer flex items-center space-x-1 text-gray-400",
          likesCount:"font-medium"
        },
        isLiked:false,
        likesCount:0,
        data:[],
      }
    },
    methods:{
      postPage(){
        this.$router.push({ path: '/post/' + this.postId})
      },
      async like(){
        if(!this.isLiked){
          this.likesCount++
          this.isLiked = true
        }
        else{
          this.likesCount--
          this.isLiked = false
        }
        try {
            const response = await postService.updateLikes(this.postId, this.$store.state.user._id,this.isLiked)
            .then(this.data = response)
          } catch (error) {
            this.errorMessage = error.response.data
        } 
      }
    },
    mounted(){
      if(this.$store.state.token){
        this.likesCount = this.likes
        if(this.likedBy.includes(this.$store.state.user._id)){
          this.isLiked=true;
        }
      }
    }

  }
</script>

<style>

</style>
