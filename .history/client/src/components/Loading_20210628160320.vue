<template>
  <div :class="style.body">
    <span :class="style.iconContainer" >
      <i class="fas fa-circle-notch fa-spin fa-5x"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name:"Loading",
    data(){
      return{
        body:"w-full h-full opacity-75 z-50",
        iconContainer:"text-red-600 opacity-75 my-0 mx-auto",


      }
    }
  }
</script>
