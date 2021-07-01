<template>
  
</template>

<script setup>
import { defineProps, reactive } from 'vue'
export default{
  name:"Hello World"
}

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>

</style>
