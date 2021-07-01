<template>
  
</template>

<script setup>
import { defineProps, reactive } from 'vue'
export default{
  name:"HelloWorld"
}

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>

</style>
