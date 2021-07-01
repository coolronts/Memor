<template>
  <div :class="style.body">
    <div :class="style.container">
      <DashboardHeading :headingName="headingName"/>
      <div :class="style.formContainer">
        <form :class="style.form" onsubmit="event.preventDefault();">
          <div :class="style.formRow">
            <div :class="style.formGroup">
              <label for="title" :class="style.label">Title</label>
              <input v-model="title" type="text" :class="style.input">
            </div>
            <div :class="style.formGroup">
              <label for="place" :class="style.label">Place</label>
              <input v-model="place" type="text" id="place" :class="style.input">
            </div>
          </div>
          <div :class="[style.formGroup,'w-4/5 mx-20']">
            <label for="place" :class="style.label">Description</label>
            <textarea v-model="description" rows="6" cols="50" placeholder="Describe yourself here..." class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="flex flex-col w-1/2 pt-4 ml-20 ">
            <img :src="imageBase64" alt=""/>
            <input type="file" @change="handleImage" accept="image/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <button @click="postData" :class="style.button">Post</button> 
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Tiptap from '../components/Tiptap.vue';
  import DashboardHeading from "../components/DashboardHeading.vue"
  import postService from '../serverService/postService.js';
  export default {
    name:'DashboardNewPost',
    components: {
      Tiptap,DashboardHeading
    },
    data(){
      return{
        headingName:"New Posts",
        title:'',
        place:'',
        description:'',
        imageBase64:'',
        style:{
          body:'min-h-screen flex flex-row bg-gray-100',
          container:"flex flex-col w-full bg-white rounded-l-3xl overflow-hidden",
          notification:"mr-6 text-sm bg-red-100 rounded-full px-1 text-red-500",
          icon:"fas fa-bell text-red-600",
          avatar:"inline object-cover w-8 h-8 mr-24 rounded-full",
          headingContainer:"flex items-center h-20 shadow-md",
          heading:"block text-2xl w-full font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          formContainer:"p-6  border-gray-200 overflow-hidden",
          form:"flex flex-col pt-3 md:pt-8 justify-center",
          formRow:"flex justify-around",
          formGroup:"flex flex-col w-1/3 pt-4 mr-2 ",
          image:"ml-1 object-cover w-16 h-16 mr-2 rounded-full",
          label:"text-lg font-bold ",
          button:"self-center text-center w-1/6 mr-3 mt-12 shadow text-white px-4 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-red-600",
          error:"text-red-600 font-medium text-xs text-center"
        }
      }
    },
    methods: {
      handleImage(e){
        const selectedImage = e.target.files[0];
        this.imageToBase64(selectedImage)
      },
       
      imageToBase64 (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageBase64 = reader.result;
        }
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      },
      async postData(){
        try {
          await.post('/posts',{
            id:this.$store.state.user._id,
            title: this.title,
            place: this.place,
            description: this.description,
            image: this.imageBase64
          })         
        } catch (error) {
          this.error = error.message
        }
      }
    }
  }
</script>
