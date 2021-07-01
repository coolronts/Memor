<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>
<script>
  import authService from '../serverService/authService';
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
      async signIn(){
        try {
          await authService.signIn(this.email,this.password) 
        } catch (error) {
          console.log(error)
        }
    }
  },
 }
</script>
