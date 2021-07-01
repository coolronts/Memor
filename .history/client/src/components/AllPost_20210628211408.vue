<template>
  <div class="flex flex-wrap justify-center">
    <Loading v-if="isLoading"/>
    <div v-if="!isLoading" class="w-1/3" v-for="post in posts" :key="post._id">
      <Card 
        :imgSrc = "post.image"
        :title = "post.title"
        :description = "post.description"
        :likes = "post.likes"
        :place = "post.place"
        :postId = "post._id"
        :profileImage = "post.profileImage"
        :author = "post.author"
        :likedBy = "post.likedBy"
      />
    </div>
  </div>
</template>

<script>
  import Loading from '../components/Loading.vue'
  import Card from '../components/Card.vue'
  import axios from 'axios';

  export default {
    name:"AllPost",
    components: { Card,Loading },
    data(){
      return{
        isLoading:true,
        posts:[],
        style:{
          card:'w-1/4 shadow-xl',
        }
      }
    },
    async mounted(){
      await axios
        .get('http://localhost:5000/allPosts')
        .then(response =>{ 
          this.posts = response.data
          this.posts.forEach(async (post,index) =>
            await axios.get('http://localhost:5000/user/'+ post.userId)
            .then(response => {
              this.posts[index].author = response.data.username
              this.posts[index].profileImage = response.data.profile
              if(this.posts[this.posts.length-1].author){
                this.isLoading=false
              }
            }))
        })
    }
  }
</script>

