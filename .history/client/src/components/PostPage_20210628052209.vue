<template>
  <div :class="style.body">
    <Header/>
    <div :class="style.postContainer">
      <div :class="style.image" style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
      <div :class="style.infoContainer">
        <div :class="style.heading">
          <div :class="style.title"> Great Place to Go! </div>
          <div :class="style.place">Oslo,Norway</div>
        </div>
        <div :class="style.subHeading">
          <img :class="style.avatar" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
          Author: Coolronts
        </div>
      
    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 class="text-gray-800 font-bold ">$129</h1>
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
          heading:"py-2 flex justify-between px-6  text-center",
          title:"text-4xl w-full text-left ml-36 font-bold uppercase tracking-wide text-gray-800",
          place:"text-red-600 text-xl font-semibold self-end",
          subHeading:"px-6 pb-3",
          avatar:"inline object-cover w-8 h-8 rounded-full"
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