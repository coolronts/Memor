<template>
  <section class="px-28">
    <Header/>
    //<AllPost/>
    <PostPage/>
  </section>
</template>

<script>
  import Header from '../components/Header.vue'
  import AllPost from '../components/AllPost.vue'
  import PostPage from '../components/PostPage.vue'
  

  export default {
    name: 'Home',
    components: {
      Header,AllPost
    }
  }
</script>