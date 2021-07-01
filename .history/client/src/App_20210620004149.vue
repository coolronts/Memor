<template>
      <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
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
