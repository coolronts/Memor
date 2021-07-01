<template>
  <div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-full bg-white rounded-l-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <a href="#" class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Profile</a>
    </div>
      <div class=" overflow-hidden ">
        <div class="p-6  border-gray-200">
          <form class="flex flex-col pt-3 md:pt-8 justify-center" onsubmit="event.preventDefault();">
            <div class="flex justify-between">
              <div class="flex flex-col w-1/2 pt-4 mr-2 ">
                <label for="title" class="text-lg">Name</label>
                <input v-model="title" type="text" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
              </div>
              <div class="flex flex-col w-1/2 pt-4 ">
                <label for="place" class="text-lg">Place</label>
                <input v-model="place" type="text" id="place" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
              </div>
            </div>
            <div class="flex flex-col pt-4 ">
              <label for="Description" class="text-lg">Description</label>
              <textarea v-model="description" rows="6" cols="50" placeholder="Describe yourself here..." class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="flex flex-col w-1/2 pt-4 ">
              <img :src="imageBase64" alt=""/>
              <input type="file" @change="handleImage" accept="image/*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <button @click="postData" class="self-center text-center w-1/6 mr-3 mt-12 shadow text-white px-4 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none">
              <span>Post</span>
            </button> 
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'Profile',
    data(){
      return {
        username: '',
        email:'',
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
    } 
  }
</script>