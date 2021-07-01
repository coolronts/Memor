<template>
  <div :class="style.body">
    <div :class="style.container">
      <div :class="style.signInContainer">
        <div :class="style.logoContainer">
          <div :class="style.logo">Memor</div>
        </div>
        <div :class="style.main">
          <p :class="style.heading">Sign Up</p>
          <form @onsubmit="register" class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div :class="style.formGroup">
              <label for="picture" :class="style.label">Profile Picture</label>
              <div class="flex"> 
                <input type="file" @change="handleImage" accept="image/*" :class="style.input"/>
                <img :class="style.image" :src="imageBase64" alt="Profile image"/>
              </div>
            </div>
            <div :class="style.formGroup">
              <label for="userName" :class="style.label">User Name</label>
              <input @keydown="nameValidation" v-model="username" type="text" id="userName" placeholder="Username" :class="[style.input,{ 'focus:border-red-600':(error.username.len), 'focus:border-green-600':(!error.username.len)}]">
              <p v-if="error.username.len" :class="style.error"> Username must be between 6 characters and 12 characters</p>
            </div>
            <div :class="style.formGroup">
              <label for="email" :class="style.label">Email</label>
              <input @keydown="emailValidation" v-model="email" type="text" id="email" placeholder="your@email.com" :class="[style.input,{ 'focus:border-red-600':(error.email.len || error.email.valid), 'focus:border-green-600':(!error.email.len && !error.email.valid)}]">
              <p v-if="error.email.len" :class="style.error"> Email must be between 6 characters and 12 characters</p>
              <p v-if="error.email.valid" :class="style.error"> Email should be valid</p>
            </div>
            <div :class="style.formGroup">
              <label for="password" :class="style.label">Password</label>
              <input @keydown="passwordValidation" v-model="password" type="password" id="password" placeholder="Password" :class="[style.input,{ 'focus:border-red-600':(error.password.len), 'focus:border-green-600':(!error.password.len)}]">
              <p v-if="error.password.len" :class="style.error"> Password must be between 6 characters and 12 characters</p>
            </div>
            <div :class="[style.formGroup,'mb-8']">
              <label for="confirmPassword" :class="style.label">Confirm Password</label>
              <input @keyup="confirmPasswordValidation" v-model="confirmPassword" type="password" id="confirmPassword" placeholder="confirmPassword" :class="[style.input,{ 'focus:border-red-600':(!error.password.match), 'focus:border-green-600':(!error.password.match)}]">
              <p v-if="!error.password.match" :class="style.error"> Passwords do not match</p>
            </div>
            <button @click="register" :class="style.button">Sign Up</button> 
          </form>
          <div :class="style.suggestionContainer">
            <p>Have an account? <span @click="logIn" :class="style.suggestion">Login here</span></p>
          </div>
        </div>
      </div>
      <div :class="style.imgContainer">
        <img :class="style.img" src="https://image.freepik.com/free-vector/destination-signs-background_23-2148045650.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import bcrypt from 'bcryptjs';
  import noPic from "/src/assets/noPic"

  export default {
    name: 'SignUp',
    data(){
      return {
        username: '',
        email:'',
        imageBase64:'',
        password:'',
        confirmPassword:'',
        error:{
          username:{
            len:false,
          },
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
          body:"bg-white font-family-karla h-screen",
          container:"w-full flex flex-wrap",
          signInContainer:"w-full md:w-1/2 flex flex-col",
          logoContainer:"flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24",
          logo:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          formContainer:"flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32",
          heading:"text-center text-3xl mt-2",
          main:"flex flex-col mt-16 justify-center md:justify-start  pt-8 md:pt-0 px-8 md:px-24 lg:px-32",
          form:" flex flex-col",
          formGroup:"mb-2 flex flex-col",
          label:"text-sm font-semibold",
          formInput:"border-2 border-red-600 shadow-lg",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2",
          button:" mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none ",
          error:"text-red-600 mt-0.5 font-medium text-xs text-center",
          suggestionContainer:"text-center",
          suggestion:"text-red-600 underline font-semibold cursor-pointer",
          imgContainer:"w-1/2 shadow-2xl",
          img:"object-cover w-full h-screen hidden md:block",
          image:"inline object-cover w-12 h-12 mr-2 rounded-full"
        }
      }
    },
    
    methods: {
      handleImage(e){
        const selectedImage = e.target.files[0];
        this.imageToBase64(selectedImage)
      },

      imageToBase64 (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageBase64 = reader.result;
        }
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      },

      logIn(){
        this.$router.push({ name: 'SignIn'})
      },
      nameValidation(){
        this.error.username.len=false;
        this.usernameNoError=true
        if(this.username.length<6 || this.username.length>36){
          this.error.username.len = true
          this.usernameNoError= false
        }
      },
      emailValidation(){
        this.error.email.len=false;
        this.error.email.valid=false;
        this.emailNoError=true

        if(this.email.length<6 || this.email.length>36){
          this.error.email.len = true
          this.emailNoError= false
        }else if(!this.validEmail(this.email)){
          this.error.email.valid = true
          this.emailNoError= false
        }
      },

      passwordValidation(){
        this.error.password.len=false;
        this.passwordNoError= true;

        if(this.password.length<6 || this.password.length>12){
        this.error.password.len = true
        this.passwordNoError= false
        }
      },

      confirmPasswordValidation(){
        this.error.password.match = true
        this.conformPasswordNoError= true;
        if (this.password != this.confirmPassword){
          this.error.password.match = false
          this.conformPasswordNoError= false
        }
      },


      async register(){
        this.error.username.len=false;
        this.error.email.len=false;
        this.error.email.valid=false;
        this.error.password.len=false;
        this.error.password.match = true
        this.noError= true;
        if(this.username.length<6 || this.username.length>36){
          this.error.username.len = true
          this.noError= false
        }

        if(this.email.length<6 || this.email.length>36){
          this.error.email.len = true
          this.noError= false
        }else if(!this.validEmail(this.email)){
          this.error.email.valid = true
          this.noError= false
        }
        
        if(this.password.length<6 || this.password.length>12){
          this.error.password.len = true
          this.noError= false
        }
        if (this.password != this.confirmPassword){
          this.error.password.match = false
          this.noError= false
        }
        
        if(this.noError){
          
          try {
            await axios.post('/register',
              {
                username:this.username,
                email:this.email,
                password:this.password, 
                profile:this.imageBase64
              }
            ).then(this.$router.push({ name: 'SignIn'}))
          } catch (error) {
            console.log(error)
          }
        }
      },

      validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
    },
    mounted(){
      this.imageBase64 = noPic
    }
  }
</script>
