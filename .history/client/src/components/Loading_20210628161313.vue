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
          body:"w-full h-full relative text-center opacity-75 z-50",
          iconContainer:"absolute top-48 right-64 text-red-600 opacity-75 my-0 mx-auto",
          icon:"fas fa-circle-notch fa-spin fa-5x",
        }
      }
    }
  }
</script>
