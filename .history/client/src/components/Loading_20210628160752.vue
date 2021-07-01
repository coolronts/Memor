<template>
  <div :class="style.body">
    <span :class="style.iconContainer" >
      <i :class="style.icon"></i>
    </span>
  </div>
</template>

<script>
  export default {
    name:"Loading",
    data(){
      return{
        style:{
          body:"w-full h-full flex text-center opacity-75 z-50",
          iconContainer:"self-center inline-block text-red-600 opacity-75 my-0 mx-auto",
          icon:"fas fa-circle-notch fa-spin fa-5x",
        }
      }
    }
  }
</script>
