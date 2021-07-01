<template>
  <section>
    <Header/>
    <Card/> 
  </section>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',

  components: {
    Header,Card
  },

  data: () => ({
    //
  }),
}
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
