<template>
 <div class="py-12">
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
   <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input v-model="email"  type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="flex flex-col pt-4 mb-8">
              <label for="password" class="text-lg">Password</label>
              <input v-model="password" type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <button @click="signIn" class="mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
              <span>Sign In</span>
            </button> 
          </form>
     <form method="POST" action="action.php">
      <div class="mb-4">
       <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label><br>
       <input type="text" class="border-2 border-gray-300 p-2 w-full" name="title" id="title" value="" required>
      </div>

      <div class="mb-4">
       <label class="text-xl text-gray-600">Description</label><br>
       <input type="text" class="border-2 border-gray-300 p-2 w-full" name="description" id="description" placeholder="(Optional)">
      </div>

      <div class="mb-8">
       <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label><br>
       <textarea name="content" class="border-2 border-gray-500">
       </textarea>
      </div>

      <div class="flex p-1">
       <select class="border-2 border-gray-300 border-r p-2" name="action">
        <option>Save and Publish</option>
        <option>Save Draft</option>
       </select>
       <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
      </div>
     </form>
    </div>
   </div>
  </div>
</div>
</template>
<script>
 export default {
  name:'DashboardNewPost',
 }
</script>
