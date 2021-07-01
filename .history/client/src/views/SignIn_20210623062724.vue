<template>
  <div class="bg-white font-family-karla h-screen">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
        </div>
        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Sign In</p>
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
          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="register.html" class="text-red-600 underline font-semibold">Register here.</a></p>
          </div>
        </div>
      </div>
      <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-screen hidden md:block" src="https://image.freepik.com/free-vector/destination-signs-background_23-2148045650.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import authService from '../serverService/authService';
  import { mapMutations } from "vuex";
  export default {
    name: 'SignIn',
    data(){
      return {
        email:'',
        password:'',
        error:{
          email:{
            len:false,
            valid:false
          },
          password:{
            len:false,
            match:true,
          },
        },
        noError: true,
        style:{
          formGroup:"my-0",
          label:"text-xl ",
          formInput:"border-2 border-red-600 shadow-lg",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-red-600",
          error:"text-red-600 font-medium text-xs text-center"
        }
      }
    },
    
    methods: {
      ...mapMutations(["setUser","setToken"]),
      async signIn(){
        try {
          const response = await authService.signIn(this.email,this.password) 
          console.log(response.data)
          this.setToken(response.data.token)
          this.setUser(response.data.user)
          console.log(store.state)
        } catch (error) {
          console.log(error)
        }
      
    }
  },
 }
</script>
