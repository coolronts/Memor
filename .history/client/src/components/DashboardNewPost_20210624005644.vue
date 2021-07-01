<template>
  <div class=" ml-6">
    
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white">New Post</div>
      <div class="bg-white overflow-hidden  sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
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
            <button @click="signIn" class="self-center text-center w-1/4 mr-3 mt-12 shadow text-white px-4 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
              <span>Sign In</span>
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
  }

</script>
