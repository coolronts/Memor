<template>
  <nav :class="style.body">
    <a :class="style.logo" href="#">Memor</a>
    <div class="pt-1 relative">
      <input :class="style.searchInput" type="search" name="search" placeholder="Search">
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg :class="style.icon" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
          width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>,
    <div v-if="!isLoggedIn">
      <router-link to="/signup">
        <button :class="style.button">Sign Up </button>
      </router-link>

      <router-link to="/signin">
        <button :class="style.button">Sign In </button>   
      </router-link>
    </div>
    <div  v-if="isLoggedIn">
      <button @click="logout" :class="style.button">Sign Out </button>
    </div>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name:"Navbar",
    data(){
      return {
        style: {
          body: "flex justify-between",
          logo:"block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300",
          button:"mr-3 text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",
          searchInput:"text-lg bg-white h-10 px-5 pr-16 ml-20 rounded-full outline-none border-2 focus-within:border-red-600",
          icon:"text-gray-600 h-4 w-4 fill-current outline-none",
        }
      }
    },
    computed: {
      ...mapGetters([
        'isLoggedIn',
      ])
    }
  }
</script>