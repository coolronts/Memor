<template>
  <div class="bg-white font-family-karla h-screen w-full flex flex-wrap">
    <div class="w-1/2 flex flex-col">
      <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
        <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
      </div>
      <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
        <p class="text-center text-3xl">Sign Up</p>
          <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="form-group">
              <label :class="style.label" for="username">Username</label>
              <input type="text" class="form-control" name="username"/> 
            </div>
            <div class="form-group">
              <label :class="style.label" for="email">Email</label>
              <input type="email" class="form-control" name="email"/> 
            </div>
            <div class="form-group">
              <label :class="style.label" for="password">Password</label>
              <input type="password" class="form-control" name="password"/> 
            </div>
          </form>
          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="register.html" class="text-red-600 underline font-semibold">Register here.</a></p>
          </div>
        </div>
      </div>
      <div class="w-1/2 shadow-2xl">
        <img class="object-fill w-full h-screen hidden md:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_HYKgT70MbcRwpcSWcXI1shiA91mhZPF_g&usqp=CAU">
      </div>
    </div>
</template>

<script>
  import authService from '../serverService/authService'
  export default {
    name: 'SignUp',
    data(){
      return {
        style:{
          label:"text-xl my-12"
        }
      }
    }
  }
</script>
