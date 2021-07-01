<template>
  
</template>

<script>
import { defineProps, reactive } from 'vue'
export default{
  name:"HelloWorld",
  props:{
    msg:string,
  },
  data(){
    return {
      posts:'',
      error:'',
      
    }
  }
}


const state = reactive({ count: 0 })
</script>

<style scoped>

</style>
