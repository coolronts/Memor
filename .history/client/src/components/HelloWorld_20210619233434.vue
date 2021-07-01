<template>
  <v-row>
    <v-col col="6">
      <v-app-bar>
        <p>Text Options</p>

      <v-btn-toggle
        v-model="text"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="left">
          Left
        </v-btn>

        <v-btn value="center">
          Center
        </v-btn>

        <v-btn value="right">
          Right
        </v-btn>

        <v-btn value="justify">
          Justify
        </v-btn>
      </v-btn-toggle>

      </v-app-bar>
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
