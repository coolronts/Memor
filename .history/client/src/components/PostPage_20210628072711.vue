<template>
  <div :class="style.body">
    <Header/>
    <div :class="[style.postContainer,'relative']">
      <i @click="edit(0)" :class="['absolute top-0 right-0 mr-3 mt-3',style.edit]"/>
      <div :class="style.image" :style="{backgroundImage: 'url('+post.image+')'}"/>
      <div :class="style.infoContainer">
        <div :class="style.heading">
          <div :class="style.title"> {{post.title}}
             <i @click="edit(1)" :class="style.edit"/>
          </div> 
          <div :class="style.place"> {{post.place}} 
            <i @click="edit(2)" :class="style.edit"/> 
          </div>
        </div>
        <div :class="style.subHeading">
          <div class="flex">
            <img :class="style.avatar" :src="author.profile" alt="Profile image"/>
            <p :class="style.author">Author: {{author.username}}</p>
          </div>
          <div :class="style.publish"> Published on: 22nd January,2015 </div>
        </div>
        <div :class="style.content"> <i @click="edit(3)" :class="style.edit"/> {{post.description}} </div>
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
          body:"mx-12 mb-12",
          postContainer:"flex flex-col justify-center items-center",
          image:"bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center",
          infoContainer:"w-5/6 bg-white pt-6 -mt-10 shadow-lg rounded-lg overflow-hidden",
          heading:"py-2 flex justify-between px-6  text-center",
          title:"text-4xl w-full text-center ml-36 font-bold uppercase tracking-wide text-gray-800",
          place:"text-red-600 text-xl font-semibold self-end",
          subHeading:"px-6 pb-3 flex justify-between",
          avatar:"inline object-cover w-8 h-8 rounded-full",
          author:"self-end text-sm font-semibold ml-2 tracking-wide",
          publish:"self-end text-sm",
          content:"py-6 px-6 bg-gray-50 text-justify",
          edit:"fas fa-edit text-lg text-green-400 animate-bounce"
        },
        title:'',
        image:'',
        author:'',
        place:'',
        post:[],
        author:[],
      }
    },
    async created(){
      await axios.get('http://localhost:5000/post/'+ this.$route.params.id)
        .then(response => (this.post = response.data))

      await axios.get('http://localhost:5000/user/'+ this.post.userId)
        .then(res => ( this.author = res.data))
      
    }
  }
</script>