<template>
  
</template>

<script>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
});
data() {
  return {
    posts:[]
  }
};

const state = reactive({ count: 0 })
</script>

<style scoped>

</style>
