<template>
  <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
    <div class="flex flex-col">
      <label for="userName" class="text-lg">User Name</label>
      <input v-model="username" type="text" id="userName" placeholder="Username" :class="style.input">
      <p v-if="error.username.len" :class="style.error"> Username must be between 6 characters and 12 characters</p>
    </div>
    <div class="flex flex-col ">
      <label for="email" class="text-lg">Email</label>
      <input v-model="email" type="text" id="email" placeholder="your@email.com" :class="style.input">
      <p v-if="error.email.len" :class="style.error"> Email must be between 6 characters and 12 characters</p>
      <p v-if="error.email.valid" :class="style.error"> Email should be valid</p>
    </div>
    <div class="flex flex-col ">
      <label for="password" class="text-lg">Password</label>
      <input v-model="password" type="password" id="password" placeholder="Password" :class="style.input">
      <p v-if="error.password.len" :class="style.error"> Password must be between 6 characters and 12 characters</p>
    </div>
    <div class="flex flex-col  mb-8">
      <label for="confirmPassword" class="text-lg">Confirm Password</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="confirmPassword" :class="style.input">
      <p v-if="!error.password.match" :class="style.error"> Passwords do not match</p>
    </div>
    <button @click="register"  class="mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
      <span>Sign In</span>
    </button> 
  </form>
</template>


<script>
  export default {
    name:'Profile',
  }
</script>