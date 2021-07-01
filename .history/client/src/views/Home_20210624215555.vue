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
        data:[]
      }
    }

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
     created(){
      fetch('http://localhost:5000/allPosts')
    .then(response => response.json())
    .then(data => (this.data = data));

      try{
          await fetch()
          .then(data => this.data.data)
          console.log(this.data)

      }catch(error){
        console.log(error)
      }
    
    }
  }
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
