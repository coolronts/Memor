<template>
  <Header/>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',

  components: {
    Header,
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
