<template>
<div class="bg-red-400">asdad</div>
</template>

<script>
  import PostService from '../PostService.js'
  export default {
    name:"HelloWorld",
    data(){
      return{
        posts:[],
        text:'',
        error:'',
      }},
      async created(){
        try {
          this.posts = await PostService.getPosts();
        } catch (error) {
          this.error = error.message
          
        }
      }
    }
</script>

<style scoped>
  .toolbar{
    padding-left: 20px;
  }
</style>
