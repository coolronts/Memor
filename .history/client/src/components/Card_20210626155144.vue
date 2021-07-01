<template>
 <div class="flex justify-between m-3">
  <div class="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
          <img
            class="rounded-lg rounded-b-none"
            :src="imgSrc"
            alt="thumbnail"
            loading="lazy"
          />
          <div class="flex justify-between -mt-4 px-4">
            <span class="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-xs font-medium text-center text-gray-100 px-3 pt-1"> {{place}} </span>
            <span class="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-blue-500 font-semibold text-xs">
                6 Mins
              </p>
            </span>
          </div>
          <div class="py-2 px-4">
            <h1
              class="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
            >
              <a href=""> {{title}}  </a>
            </h1>
          </div>
          <div class="px-4 space-y-2">
            <p class="text-gray-400 font-normal leading-5 tracking-wide">
              {{description}}
            </p>
            <router-link
              to="blog/detail"
              class="font-bold hover:text-blue-400 text-gray-100"
              >read more...</router-link
            >
          </div>
          <div class="flex flex-row items-end h-full w-full px-4 mt-4">
            <div class="flex border-t border-gray-700 w-full py-4">
              <div
                class="flex items-center space-x-3 border-r border-gray-700 w-full"
              >
                <img
                  class="object-cover w-8 h-8 border-2 border-white rounded-full"
                  src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                  alt="profile users"
                  loading="lazy"
                />
                <div class="">
                  <p class="text-sm font-semibold tracking-wide text-gray-200">
                    Author
                  </p>
                  <p class="text-xs font-light tracking-wider text-gray-300">
                    2 Hours ago 
                  </p>
                </div>
              </div>
              <div class="flex items-center flex-shrink-0 px-2">
                <div @click="like"  class="flex items-center space-x-1 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p class="font-medium"> {{likes}} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script>
  import axios from 'axios';
  import postService from '../serverService/postService';

  export default {
    name:"Card",
    props:['imgSrc', 'title', 'description', 'likes', 'place','postId'],
    data(){
      return{
        isLiked:false,
      }
    },
    methods:{
      async like(){
        if(!isLiked){
          this.isLiked = !this.isLiked
          this.likes++
        }
        
        try {
            const response = await postService.updateLikes(this.postId, this.$store.state.user._id)
          } catch (error) {
            this.errorMessage = error.response.data
          } 
      }
    },
    mounted(){
      this.likesCount = this.likes
    }
  }
</script>

<style>

</style>
