<template>
  <div :class="style.body">
    <div :class="style.container">
      <DashboardHeading :headingName="headingName"/>
      <Modal 
      v-if="modal.openModal"
      @option="setOption"
      :heading="modal.heading" 
      :subtext="modal.subtext" 
    />
      <p :class="style.error" v-if="errorMessage">{{errorMessage}}</p>
      <div :class="style.formContainer">
        <div :class="['ml-20 w-1/2']">
          <label for="picture" :class="style.label">Profile Picture</label>
          <div class="flex"> 
            <input type="file" @change="handleImage" accept="image/*" :class="style.input"/>
            <img :class="style.image" :src="imageBase64" alt="Profile image"/>
            <button @click="updatePicture" :class="style.button">Save</button>
          </div>
        </div>
        <div :class="[style.formRow,'space-between']">
          <div :class="[style.formRow,'mr-6']">
            <div :class="style.formGroup">
              <label for="username" :class="style.label">User Name</label>
              <input @keyup="nameValidation" v-model="username" type="text" id="userName" :class="style.input">
              <p v-if="error.username.len" :class="style.error"> Username must be between 6 characters and 12 characters</p>
            </div>
            <button @click="updateUsername" :class="style.button">Save</button> 
          </div>

          <div :class="style.formRow">
            <div :class="style.formGroup">
              <label for="email" :class="style.label">Email</label>
              <input @keyup="emailValidation" v-model="email" type="text" id="email" :class="style.input">
              <p v-if="error.email.len" :class="style.error"> Email must be between 6 characters and 12 characters</p>
              <p v-if="error.email.valid" :class="style.error"> Email should be valid</p>
            </div>
            <button @click="updateEmail" :class="style.button">Save</button> 
          </div>
        </div>

        <div :class="[style.formRow,'space-between']">
          <div :class="[style.formRow,'mr-6']">
            <div :class="style.formGroup">
              <label for="password" :class="style.label">Password</label>
              <input @keyup="passwordValidation"  v-model="password" type="password" id="password" :class="style.input">
              <p v-if="error.password.len" :class="style.error"> Password must be between 6 characters and 12 characters</p>
            </div>
            <button :class="[style.button,'invisible'] ">Save</button> 
          </div>

          <div :class="style.formRow">
            <div :class="style.formGroup">
              <label for="confirmPassword" :class="style.label">Confirm Password</label>
              <input @keyup="confirmPasswordValidation"  v-model="confirmPassword" type="password" id="confirmPassword" :class="style.input">
              <p v-if="!error.password.match" :class="style.error"> Passwords do not match</p>
            </div>
            <button @click="saveData" :class="style.button">Save</button> 
          </div>
          
        </div>
        
      </div>
      <div :class="style.deleteContainer">
        <a @click="showModal"  :class="style.deleteButton">
          <span :class="style.iconContainer"><i class="fas fa-sign-out-alt text-white"/></span>
          <span @click="logout" :class="[style.itemName,'text-white']">Delete your Account</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapMutations } from "vuex";
  import DashboardHeading from "../components/DashboardHeading.vue"
  import Modal from '../components/Modal.vue';

  export default {
    name:'Profile',
    components:{DashboardHeading,Modal},
    data(){
      return {
        headingName:"Profile",
        username: '',
        email:'',
        password:'',
        confirmPassword:'',
        errorMessage:'',
        imageBase64:'',
        usernameNoError: true,
        emailNoError: true,
        passwordNoError: true,
        conformPasswordNoError: true,
        modal:{
          openModal:false,
          heading:"Deactivate your Account",
          subtext:"Are you sure you want to Deactivate your Account? All of your Account's data will be permanently removed. This action cannot be undone."
        },
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
        style:{
          body:'min-h-screen flex flex-row bg-gray-100',
          container:"flex flex-col w-full bg-white rounded-l-3xl overflow-hidden",
          headingContainer:"flex items-center justify-center h-20 shadow-md",
          heading:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          formContainer:"flex flex-col p-6 border-gray-200 items-center pt-24",
          formRow:"flex",
          formGroup:"flex flex-col  pt-4 mr-2 w-56 ",
          image:"ml-1 object-cover w-16 h-16 mr-2 rounded-full",
          label:"text-lg font-bold ",
          button:"text-center w-24 mt-12 shadow text-white px-4 h-8 bg-red-400 rounded-1 hover:bg-red-700 active:shadow-xl mouse transition ease-in duration-200 focus:outline-none",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-red-600",
          error:"text-red-600 bg-red-50 py-1 my-1  font-medium text-xs text-center",
          deleteButton:"w-1/5 hover:bg-red-700 justify-center cursor-pointer flex flex-row items-center h-12 mx-4 mt-6 text-white bg-red-600 rounded",
          deleteContainer:"flex w-full justify-center"
        },
      }
    },
    mounted() {
      this.username = this.$store.state.user.username
      this.email = this.$store.state.user.email
      this.imageBase64 = this.$store.state.user.profile
    },
    
    methods: {
      ...mapMutations(["setUser"]),

      deleteAccount(){
        console.log("ad")
      },

      showModal(){
        this.modal.openModal=true
      },

      async setOption(choice){
        this.modal.openModal=false
        if(choice==0){ 
          await this.post.likedBy.map(async (userId)=>{
            await axios.post('/delete_notification/'+ userId,{
              postId: this.post._id
            })
          }).then(
            await axios.delete('/delete_post/'+this.post._id)
            .then(this.$store.commit('setDashBoard',1))
            .then(this.$router.push({ name: 'Dashboard'}))
          )    
        }
      },

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
      
      async updatePicture(){
        try {
          await axios.post('/update_profile_pic', 
            {
              email: this.$store.state.user.email,
              profile: this.imageBase64,
            }
          ).then(this.$store.commit('setUser',response.data))
        } catch (error) {
          this.errorMessage = error.response.data
        }
      },

      async updateUsername(){
        this.nameValidation();
        if(this.usernameNoError){
          try {
            await axios.post('/update_username',
              {
                email: this.$store.state.user.email,
                username: this.username
              }
            ).then(response => this.$store.commit('setUser',response.data))
          } catch (error) {
            this.errorMessage = error.response.data
          }
        }
      },

      async updatePassword(){
        this.passwordValidation();
        this.confirmPasswordValidation();
        if(this.passwordNoError && this.conformPasswordNoError){
          try {
            await axios.post('/update_password',
              {
                email: this.$store.state.user.email,
                password:this.password
              }
            ).then(response => this.$store.commit('setUser',response.data))
          } catch (error) {
            this.errorMessage = error.response.data
          }
        }
      },

      async updateEmail(){
        this.emailValidation();
        if(this.emailNoError){
          try {
            await axios.post('/update_email',
              {
                email:this.email, 
                username:this.$store.state.user.username
              }
            ).then(response => this.$store.commit('setUser',response.data))
          } catch (error) {
            this.errorMessage = error.response.data
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