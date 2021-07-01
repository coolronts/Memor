<template>
 <div :class="style.body">
    <div :class="style.container">
      <DashboardHeading :headingName="headingName"/>
      <div :class="style.postsContainer">
      <PostByUser @noData="noData" class="w-full" />
      <p :class="style.noData"> {{noDataText}} </p>
    </div>
  </div>
</div>
</template>

<script>
  import axios from "axios";
  import DashboardHeading from "../components/DashboardHeading.vue";
  import PostByUser from "./PostByUser.vue";

  export default {
    name:'DashboardMyPost',
    components:{PostByUser,DashboardHeading},
    data(){
      return{
        headingName:"My Posts",
        noDataText:'',
        style:{
          body:"min-h-screen flex flex-row bg-gray-100",
          container:"flex flex-col w-full bg-white rounded-l-3xl overflow-hidden",
          postsContainer:"flex flex-wrap justify-center py-6 px-12",
          noData:"text-4xl font-semibold pt-48 text-gray-700"
        }
      }
    },
    mounted(){
        axios.get('/user_posts/' + this.$store.state.user._id)
        .then(response => {
          this.posts = response.data
          if(this.posts.length == 0){
            this.noDataText = "You did not post anything yet!"
          }else{
            this.noDataText = null
          }
        })
    }
  }
</script>

