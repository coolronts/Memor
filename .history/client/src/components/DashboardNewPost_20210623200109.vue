<template>
 <div class="py-12">
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
   <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="flex flex-col pt-4">
              <label for="title" class="text-lg">Title</label>
              <input v-model="title" type="text" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="flex flex-col pt-4">
              <label for="place" class="text-lg">Place</label>
              <input v-model="place" type="text" id="place" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="flex flex-col pt-4">
              <label for="Description" class="text-lg">Description</label>
              <input v-model="place" type="text" id="place" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          
            <button @click="signIn" class="mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
              <span>Sign In</span>
            </button> 
          </form>
    </div>
   </div>
  </div>
</div>
</template>
<script>
  
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
 export default {
  name:'DashboardNewPost',
    components: {
    EditorContent,
  },


  data(){ 
    return{
    
    }  
  }
 }
</script>
