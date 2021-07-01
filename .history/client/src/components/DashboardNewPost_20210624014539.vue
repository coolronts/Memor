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
              <image-uploader ... >
      <label for="fileInput" slot="upload-label">
        <figure>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path class="path1" d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"></path>
          </svg>
        </figure>
        <span class="upload-caption">{{ hasImage ? 'Replace' : 'Upload' }}</span>
      </label>
  </image-uploader>

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
      Tiptap
    },
    data(){
      return{
        hasImage: false
      }
    }
  }

</script>
