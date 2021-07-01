<template>
  <div :class="style.body">
    <div :class="style.container">
      <div :class="style.signInContainer">
        <div :class="style.logoContainer">
          <div :class="style.logo" >Memor</div>
        </div>
        <div :class="style.formContainer">
          <p :class="style.heading">Sign In</p>
          <p :class="style.error" v-if="errorMessage">{{errorMessage}}</p>
          <form :class="style.form" onsubmit="event.preventDefault();">
            <div :class="style.formGroup">
              <label for="email"  :class="style.label">Email</label>
              <input @keyup="emailValidation" v-model="email"  type="text" id="email" placeholder="your@email.com" :class="[style.input,{ 'focus:border-red-600':(emailError.len || emailError.valid), 'focus:border-green-600':(!emailError.len && !emailError.valid)}]">
              <p v-if="emailError.len" :class="style.error"> Email must be between 6 characters and 12 characters</p>
              <p v-if="emailError.valid" :class="style.error"> Email should be valid</p>
            </div>
            <div :class="style.formGroup">
              <label for="password" :class="style.label">Password</label>
              <input v-model="password" type="password" id="password" placeholder="Password" :class="style.input">
            </div>
            <button @click="signIn" :class="style.button">
              <span>Sign In</span>
            </button> 
          </form>
          <div class="style. text-center pt-12 pb-12">
            <p>Don't have an account? <a href="register.html" class="style. text-red-600 underline font-semibold">Register here.</a></p>
          </div>
        </div>
      </div>
      <div class="style. w-1/2 shadow-2xl">
        <img class="style. object-cover w-full h-screen hidden md:block" src="https://image.freepik.com/free-vector/destination-signs-background_23-2148045650.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapMutations } from "vuex";

  export default {
    name: 'SignIn',
    data(){
      return {
        email:'',
        password:'',
        emailNoError: true,
        errorMessage:'',
        emailError:{
          len:false,
          valid:false
        },
        style:{
          body:"bg-white font-family-karla h-screen",
          container:"w-full flex flex-wrap",
          signInContainer:"w-full md:w-1/2 flex flex-col",
          logoContainer:"flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24",
          logo:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          formContainer:"flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32",
          heading:" text-center text-3xl",
          form:" flex flex-col pt-3 md:pt-8",
          formGroup:"flex flex-col pt-4",
          label:"text-xl font-semibold",
          formInput:"border-2 border-red-600 shadow-lg",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2",
          button:" mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none mt-6",
          error:"text-red-600 bg-red-50 mt-4 p-1  font-medium text-xs text-center"
        }
      }
    },
    
    methods: {
      ...mapMutations(["setUser","setToken"]),

      emailValidation(){
        this.emailError.len=false;
        this.emailError.valid=false;
        this.emailNoError=true

        if(this.email.length<6 || this.email.length>36){
          this.emailError.len = true
          this.emailNoError= false
        }else if(!this.validEmail(this.email)){
          this.emailError.valid = true
          this.emailNoError= false
        }
      },

      validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      async signIn(){
        try {
          await axios.post('/sign_in',
            {
              email:this.email,
              password:this.password
            }
          ).then(this.$store.commit('setUser',response.data.user))
          .then(this.$store.commit('setToken',response.data.token))
          .then(this.$router.push({ name: 'Dashboard'}))
        } catch (error) {
          this.errorMessage = error.response.data
        }
      }
    },
  }
</script>
