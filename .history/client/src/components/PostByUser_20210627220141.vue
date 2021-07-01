<template>
  <div class="flex flex-wrap justify-center px-12">
    
    <div class="w-1/3" v-for="post in posts" :key="post._id">
      <Card 
        :imgSrc = "post.image"
        :title = "post.title"
        :description = "post.description"
        :likes = "post.likes"
        :place = "post.place"
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
        posts:[],
        style:{
          card:'w-1/4 shadow-xl',
        }
      }
    },
    mounted(){
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

