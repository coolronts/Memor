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

    components: {
      Header,Card
    },
    data(){
      return{
        style:{
          card:'w-1/4 shadow-xl',
        }
      }
    },
    mounted(){
      await fetch('http://localhost:5000/allPosts')
    }
  }
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
