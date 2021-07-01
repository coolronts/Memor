<template>
  <section>
    <Home/>
  </section>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',

  components: {
    Header,Card
  },
  data(){
    return{
      style:{
        card:'w-1/4 shadow-xl',
      }
    }
  }
}
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
