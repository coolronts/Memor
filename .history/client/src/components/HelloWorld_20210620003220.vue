<template>
  
      <v-card>
        
      
          <v-row justify="space-around" class="toolbar" >
            
          <v-col>Memor</v-col>
          
        
          <v-col>
          <v-btn
            color="secondary"
            elevation="2"
            large
            outlined
            rounded
          > Log In</v-btn>
          </v-col>
        
        </v-row>
      </v-card>
    

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
