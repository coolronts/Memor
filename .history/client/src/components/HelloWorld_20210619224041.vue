<template>
  
</template>

<script>
  import PostService from '../PostService.js'
  export default {
    name:"HelloWorld",
    data(){
      return{
        posts:[],
        text:'',
        error:''
      }},
      async created(){
        try {
          this.posts = await PostService.getPosts();
        } catch (error) {
          
        }
      }
    }
</script>

<style scoped>

</style>
