<template>
  <div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <a href="#" class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">My Component</a>
    </div>
      <div class=" overflow-hidden ">
        <div class="p-6  border-gray-200">
          <form class="flex flex-col pt-3 md:pt-8 justify-center" onsubmit="event.preventDefault();">
            <div class="flex justify-between">
              <div class="flex flex-col w-1/2 pt-4 mr-2 ">
                <label for="title" class="text-lg">Title</label>
                <input v-model="title" type="text" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="flex flex-col w-1/2 pt-4 ">
                <label for="place" class="text-lg">Place</label>
                <input v-model="place" type="text" id="place" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>
            <div class="flex flex-col pt-4 ">
              <label for="Description" class="text-lg">Description</label>
              <textarea rows="6" cols="50" placeholder="Describe yourself here..." class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="flex flex-col w-1/2 pt-4 ">
              <img :src="image"/>
              <input type="file" @change="handleImage" accept="image/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <button @click="signIn" class="self-center text-center w-1/6 mr-3 mt-12 shadow text-white px-4 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
              <span>Post</span>
            </button> 
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Tiptap from '../components/Tiptap.vue';
  export default {
    name:'DashboardNewPost',
    components: {
      Tiptap,
    },
    data(){
      return{
        image:''
      }
    },
    methods: {
      handleImage(e){
        const selectedImage = e.target.files[0]
      }
      
    },
  }

</script>

<style>
  
</style>
