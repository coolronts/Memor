<template>
    <div class="bg-white font-family-karla h-screen">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col ml">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
        </div>
        <div class="flex flex-col mt-16 justify-center md:justify-start  pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl mt-8">Sign Up</p>
          <form @onsubmit="register" class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div class="flex flex-col">
              <label for="userName" class="text-lg">User Name</label>
              <input v-model="username" type="text" id="userName" placeholder="Username" :class="style.input">
              <p v-if="error.username.len" :class="style.error"> Username must be between 6 characters and 12 characters</p>
            </div>
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input v-model="email" type="text" id="email" placeholder="your@email.com" :class="style.input">
              <p v-if="error.email.len" :class="style.error"> Email must be between 6 characters and 12 characters</p>
              <p v-if="error.email.valid" :class="style.error"> Email should be valid</p>
            </div>
            <div class="flex flex-col pt-4 mb-8">
              <label for="password" class="text-lg">Password</label>
              <input v-model="password" type="password" id="password" placeholder="Password" :class="style.input">
              <p v-if="error.password.len" :class="style.error"> Password must be between 6 characters and 12 characters</p>
            </div>
            <div class="flex flex-col pt-4 mb-8">
              <label for="confirmPassword" class="text-lg">Confirm Password</label>
              <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="confirmPassword" :class="style.input">
              <p v-if="error.confirmPassword" :class="style.error"> Passwords must match</p>
            </div>
            <button @click="register"  class="mr-3 shadow text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
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
  
  export default {
    name: 'SignUp',
    data(){
      return {
        username: '',
        email:'',
        password:'',
        confirmPassword:'',
        hash:'',
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
          },
          confirmPassword:false
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
      async register(){
        console.log(this.encryptPassword(this.password),this.encryptPassword(this.confirmPassword))


        this.error.username.len=false;
        this.error.email.len=false;
        this.error.email.valid=false;
        this.error.password.len=false;
        this.noError= true;
        if(this.username.length<6 || this.username.length>12){
          this.error.username.len = true
          this.noError= false
        }

        if(this.email.length<6 || this.email.length>12){
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
        if(bcrypt.compareSync(this.confirmPassword, this.hash)){
          console.log("password match")
        }
        else{
          console.log("password not match")
        }
        
        if(this.noError){
          try {
            await authService.registerUser(this.username,this.email,this.password) 
          } catch (error) {
            console.log(error)
          }
        }
      },
      validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      encryptPassword(password){         
        const salt = bcrypt.genSaltSync(saltRounds);
        this.hash = bcrypt.hashSync(password, salt);
      
      },


    }
    
  }
</script>
