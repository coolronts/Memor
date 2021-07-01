<template>
  <v-row>
    <v-col
      cols="12" class="my-4">
      <v-card>
        
        <v-toolbar>
          <v-row>
            <v-col cols="1"></v-col>
          <v-col cols="3">
          <v-toolbar-title>MEMOR</v-toolbar-title>
          </v-col>
          <v-col cols="7">
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

</style>
