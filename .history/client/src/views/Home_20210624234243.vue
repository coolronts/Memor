<template>
  <section>
    <Header/>
    <div class="flex flex-wrap justify-center">
      <div v-for="post in posts" :key="post._id">
        {{post._id}}
      </div>
    </div>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import Card from '../components/Card.vue'

  export default {
    name: 'Home',
    components: {
      Header,Card
    },
    data(){
      return{
        posts:[],
        style:{
          card:'w-1/4 shadow-xl',
        }
      }
    },
    async mounted(){
      axios
      .get('http://localhost:5000/allPosts')
      .then(response => (this.info = response))
  }

      const response = await fetch('http://localhost:5000/allPosts')
      const data = response.json();
      this.posts = data
      console.log(this.posts)
    }
  }
</script>

<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
