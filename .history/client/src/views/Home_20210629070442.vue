<template>
  <section class="px-28">
    <Header/>
    <AllPost/>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import AllPost from '../components/AllPost.vue'
  
  export default {
    name: 'Home',
    components: { Header,AllPost }
  }
</script>