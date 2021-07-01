<template>
  <v-row>
    <v-col
      cols="12">
      <v-card>
        
      
          <v-row justify="space-between" class="toolbar" >
            
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
    </v-col>
  </v-row>

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
    padding-right: 20px;
  }
</style>
