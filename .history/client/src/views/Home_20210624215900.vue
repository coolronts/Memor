<template>
  <section>
    <Header/>
    <div class="flex flex-wrap justify-center">
      <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> <Card :class="style.card"/> 
    </div>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import Card from '../components/Card.vue'

  export default {
    name: 'Home',
    data(){
      return{
        
      }
    },
    components: {
      Header,Card
    },
    data(){
      return{
        allPosts:[],
        style:{
          card:'w-1/4 shadow-xl',
        }
      }
    },
    async created(){
      const response = await fetch('http://localhost:5000/allPosts')
      const data = response.json();
      this.allPosts = data
      console.log(this.allPosts)
    }
  }
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
