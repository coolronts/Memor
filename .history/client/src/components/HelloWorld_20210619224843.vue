<template>
<div>
  <p v-for="post in posts" :key="post._id">
    {{ `{posts.createdAt.getDate()}` }}
    {{post.text}} {{post._id}}
  </p>
</div>
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
          this.error = error.message          
        }
      }
    }
</script>

<style scoped>

</style>
