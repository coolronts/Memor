<template>
  <section>
    <Header/>
    
    </div>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import Card from '../components/Card.vue'
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      Header,Card
    }
  }
</script>

<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
