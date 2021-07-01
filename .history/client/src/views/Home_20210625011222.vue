<template>
  <section>
    <Header/>
    <AllPost/>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import AllPost from '../components/AllPost.vue'
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      Header,AllPost
    }
  }
</script>

<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
