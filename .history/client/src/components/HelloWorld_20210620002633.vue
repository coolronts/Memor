<template>
  <v-row>
    <v-col
      cols="12">
      <v-card>
        
        <v-toolbar>
          <v-row class="toolbar">
            
          <v-col cols="4">
          <v-toolbar-title>MEMOR</v-toolbar-title>
          </v-col>
          <v-col cols="8">
          <v-btn
            color="secondary"
            elevation="2"
            large
            outlined
            rounded
          > Log In</v-btn>
          </v-col>
        
        </v-row>
        </v-toolbar>
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
    padding-left: 10px
  }
</style>
