<template>
  <div :class="style.body">
    <Loading v-if="isLoading"/>
    <div class="w-1/3" v-for="post in posts" :key="post._id">
      <Card 
        :imgSrc = "post.image"
        :title = "post.title"
        :description = "post.description"
        :likes = "post.likes"
        :place = "post.place"
        :profileImage = "profileImage"
        :author = "author"
      />
    </div>
  </div>
</template>

<script>
  import Card from '../components/Card.vue'
  import axios from 'axios';
  import Loading from '../components/Loading.vue'

  export default {
    name:"PostByUser",
    components: { Card,Loading },
    data(){
      return{
        isLoading:true,
        profileImage:'',
        author:'',
        posts:[],
        style:{
          card:'w-1/4 shadow-xl',
          body:"flex flex-wrap justify-center px-12",
        }
      }
    },
    mounted(){
      this.profileImage = this.$store.state.user.profile,
      this.author = this.$store.state.user.username,
      console.log(this.profileImage)
      axios
        .get('http://localhost:5000/userposts/' + this.$store.state.user._id)
        .then(response => {
          this.posts = response.data
          this.isLoading=false
        }
      )
    }
  }
</script>

