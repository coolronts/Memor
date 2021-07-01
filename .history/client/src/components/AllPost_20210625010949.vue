<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="post in posts" :key="post._id">
      <Card 
        :imgSrc = "post.image"
        :title = "post.title"
        :description = "post.description"
        :likes = "post.likes"
        :place = "post.place"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name:"AllPost",
  }
</script>

