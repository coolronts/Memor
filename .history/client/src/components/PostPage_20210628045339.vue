<template>
  <div class="flex flex-col h-screen w-screen justify-center items-center px-12  my-8">
  <DashboardHeading/>
  <div style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
       class="bg-gray-300 h-3/4 w-full rounded-lg shadow-md bg-cover bg-center"></div>
  <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 class="text-gray-800 font-bold ">$129</h1>
      <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  import postService from '../serverService/postService';
  import DashboardHeading from "../components/DashboardHeading.vue" 
  import Header from '../components/Header.vue'

  export default {
    name:"PostPage",
    components:{Header}
    data(){
      return{
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