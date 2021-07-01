<template>
    <div class="bg-white font-family-karla h-screen">
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col ml">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
        </div>
        <div class="flex flex-col mt-16 justify-center md:justify-start  pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl mt-12">Sign Up</p>
          <Form @submit="submit" :validation-schema="schema">
            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <button>Submit</button>
          </Form>

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
  import { Field, Form, ErrorMessage } from 'vee-validate';
  import * as yup from "yup";

  export default {
    name: 'SignUp',
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data(){
      const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      });

      return {
        schema,
        password:'',
        username: '',
        email:'',
        min: 6,
        
        style:{
          formGroup:"my-4",
          label:"text-xl ",
          formInput:"border-2 border-red-600 shadow-lg",
          input:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-red-600",
        }
      }
    },
    computed: {
    schema() {
      return yup.object({
        password: yup.string().min(this.min),
      });
    },
  },

    methods: {
      async register(){
        try {
          await authService.registerUser(this.username,this.email,this.password) 
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
