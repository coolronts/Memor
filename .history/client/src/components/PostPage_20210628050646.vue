<template>
  <div :class="style.body">
    <Header/>
    <div :class="style.postContainer">
      <div :class="style.image" style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
  <div :class="style.infoContainer">
    <div :class="style.title">Nike Revolt <div>Oslo,Norway</div></div>
    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 class="text-gray-800 font-bold ">$129</h1>
      <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
    </div>
  </div>
</div>

</div>
</template>

<script>
  import axios from 'axios';
  import postService from '../serverService/postService';
  import Header from '../components/Header.vue';

  export default {
    name:"PostPage",
    components:{Header},
    data(){
      return{
        style:{
          body:"mx-12",
          postContainer:"flex flex-col h-screen justify-center items-center",
          image:"bg-gray-300 h-3/4 w-5/6 rounded-lg shadow-md bg-cover bg-center",
          infoContainer:"w-2/3 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden",
          title:"py-2 flex  text-center text-4xl font-bold uppercase tracking-wide text-gray-800",
            
        },
        title:'',
        image:'',
        author:'',
        place:'',
      }
    },
    mounted(){
      
    }
  }
</script>