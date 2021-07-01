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

<script>
import Header from '../components/Header.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',

  components: {
    Header,Card
  },
  data(){
    return{
      style:{
        card:'w-1/4 shadow-xl',
      }
    }
  }
}
</script>
<style>
  .body{
    padding: 10px 30px 30px 10px;
  }
</style>
