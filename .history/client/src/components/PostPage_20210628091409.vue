<template>
  <div :class="style.body">
    <Header/>
    <div :class="[style.postContainer,'relative']">
      <i @click="edit(0)" :class="['absolute top-0 right-0 mr-3 mt-3',style.edit]"/>
      <div :class="style.image" :style="{backgroundImage: 'url('+post.image+')'}"/>
      <div :class="style.infoContainer">
        <div :class="style.heading">

          <div v-if="isEditTitle==false" :class="style.title"> {{post.title}}
             <i @click="edit(1)" :class="style.edit"/>
          </div> 
          <div v-if="isEditTitle==true" class="flex">
            <input  :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.title]" v-model="post.title" placeholder="edit me"/>
            <i @click="save(1)" :class="style.save"/>
          </div>


          <div  v-if="isEditPlace==false" :class="style.place"> {{post.place}} 
            <i @click="edit(2)" :class="style.edit"/> 
          </div>
          <div v-if="isEditPlace==true" class="flex flex-wrap">
            <input :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.place]" v-model="post.place" placeholder="edit me"/>
            <i @click="save(2)" :class="style.save"/>
          </div>

        </div>

        <div :class="style.subHeading">
          <div class="flex">
            <img :class="style.avatar" :src="author.profile" alt="Profile image"/>
            <p :class="style.author">Author: {{author.username}}</p>
          </div>
          <div :class="style.publish"> Published on: 22nd January,2015 </div>
        </div>
        <div v-if="isEditContent==false" :class="style.content"> <i @click="edit(3)" :class="style.edit"/> {{post.description}} </div>
        <div v-if="isEditContent==true" class="flex">
          <textarea rows="4" cols="130" :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.content]" v-model="post.description" placeholder="edit me"></textarea>
          <i @click="save(3)" :class="style.save"/>
        </div>
        <br>
        <div class="flex justify-end mr-6 mb-3">
          <i class="fas fa-heart "> Likes</i>
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
        isEditPlace:false,
        isEditTitle:false,
        isEditImage:false,
        isEditContent:false,
        style:{
          body:"mx-12 mb-12",
          postContainer:"flex flex-col justify-center items-center",
          image:"bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center",
          infoContainer:"w-5/6 bg-white pt-6 -mt-10 shadow-lg rounded-lg overflow-hidden",
          heading:"py-2 flex justify-between px-6  text-center",
          title:"text-4xl w-full text-center ml-36 font-bold uppercase tracking-wide text-gray-800",
          place:"text-red-600 text-lg font-semibold self-end",
          subHeading:"px-6 pb-3 flex justify-between",
          avatar:"inline object-cover w-8 h-8 rounded-full",
          author:"self-end text-sm font-semibold ml-2 tracking-wide",
          publish:"self-end text-sm",
          content:"py-6 px-6 bg-gray-50 text-justify",
          edit:"fas fa-edit text-lg text-green-400 animate-bounce",
          save:"self-end animate-bounce fas fa-save text-red-400"
        },
        post:[],
        author:[],
      }
    },
    methods:{
      edit(x){
        (x==0) ? (this.isEditImage = true)
        : (x==1) ? (this.isEditTitle = true)
        : (x==2) ?( this.isEditPlace = true)
        : (this.isEditContent = true)
      },

      async save(x){
        if(x==0){
          this.isEditImage = false

        }else if(x==1){
          await axios.post('http://localhost:5000/update_post_title/'+ this.$route.params.id,
          {title: this.post.title
          })
          this.isEditTitle = false
        }else if(x==2){
          await axios.post('http://localhost:5000/update_post_place/'+ this.$route.params.id,
          {place: this.post.place
          })
          this.isEditPlace = false
        }else if(x==3){
          await axios.post('http://localhost:5000/update_post_description/'+ this.$route.params.id,
          {description: this.post.description
          })
          this.isEditContent = false
        }
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