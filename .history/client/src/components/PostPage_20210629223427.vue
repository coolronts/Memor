<template>
  <div :class="style.body">
    <Header/>
    <Loading v-if="isLoading"/>
    <div v-if="!isLoading" :class="[style.postContainer,'relative']">
      <i v-if="isLoggedIn" @click="edit(0)" :class="['absolute top-0 right-0 mr-3 mt-3',style.edit]"/>
      <div :class="style.image" :style="{backgroundImage: 'url('+post.image+')'}"/>
      <div :class="style.infoContainer">
        <div :class="style.heading">
          <div :class="style.buttonContainer">
            <button @click="DeletePost" :class="style.button" >Delete </button>
            <i class="far fa-trash-alt"/>
          </div>
        
          <div v-if="!isEditTitle" :class="style.title"> {{post.title}}
             <i v-if="isLoggedIn" @click="edit(1)" :class="style.edit"/>
          </div> 
          <div v-if="isEditTitle" class="flex">
            <input  :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.title]" v-model="post.title" placeholder="edit me"/>
            <i @click="save(1)" :class="style.save"/>
          </div>

          <div  v-if="!isEditPlace" :class="style.place"> {{post.place}} 
            <i v-if="isLoggedIn" @click="edit(2)" :class="style.edit"/> 
          </div>
          <div v-if="isEditPlace" class="flex flex-wrap">
            <input :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.place]" v-model="post.place" placeholder="edit me"/>
            <i @click="save(2)" :class="style.save"/>
          </div>
        </div>

        <div :class="style.subHeading">
          <div class="flex">
            <img :class="style.avatar" :src="author.profile" alt="Profile image"/>
            <p :class="style.author">Author: {{author.username}}</p>
          </div>
          <div :class="style.publish"> Published on: 22nd January,2015 </div>
        </div>
        <div v-if="!isEditContent" :class="style.content"> 
          <i v-if="isLoggedIn" @click="edit(3)" :class="style.edit"/> {{post.description}} 
        </div>
        <div v-if="isEditContent" class="flex">
          <textarea rows="4" cols="130" :class="['outline-white shadow rounded mr-2 px-1 border-2 border-black',style.content]" v-model="post.description" placeholder="edit me"></textarea>
          <i @click="save(3)" :class="style.save"/>
        </div>
        <hr/>
        <div :class="style.likeContainer">
          <i @click="like" :class="[style.likeIcon,{'text-red-600':isLiked==true}]"/> {{post.likes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapGetters, mapMutations } from 'vuex';
  import Header from '../components/Header.vue';
  import Loading from '../components/Loading.vue'

  export default {
    name:"PostPage",
    components:{Header,Loading},
    data(){
      return{
        isLoading:true,
        isLiked:false,
        isEditPlace:false,
        isEditTitle:false,
        isEditImage:false,
        isEditContent:false,
        post:[],
        author:[],
        style:{
          body:"mx-12 mb-12",
          buttonContainer:"ml-8 max-w-1/3 flex items-center mr-3 text-white px-4 w-auto h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",
          button:"mr-1",
          postContainer:"flex flex-col justify-center items-center",
          image:"bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center",
          infoContainer:"w-5/6 bg-white pt-6 -mt-10 shadow-lg rounded-lg overflow-hidden",
          heading:"py-2 flex justify-between px-6  text-center",
          title:"text-4xl max-w-full text-center ml-12 font-bold uppercase tracking-wide text-gray-800",
          place:"text-red-600 text-lg font-semibold self-end",
          subHeading:"px-6 pb-3 flex justify-between",
          avatar:"inline object-cover w-8 h-8 rounded-full",
          author:"self-end text-sm font-semibold ml-2 tracking-wide",
          publish:"self-end text-sm",
          content:"py-6 px-6 bg-gray-50 text-justify",
          edit:"fas fa-edit text-lg text-green-400 animate-bounce",
          save:"self-end animate-bounce fas fa-save text-red-400",
          likeIcon:"fas fa-heart text-lg text-gray-400 mr-2",
          likeContainer:"flex justify-end mr-6 py-3"
        },
      }
    },
    
    methods:{
      ...mapMutations(["setDashBoard"]),
      
      edit(x){
        (x==0) ? (this.isEditImage = true)
        : (x==1) ? (this.isEditTitle = true)
        : (x==2) ?( this.isEditPlace = true)
        : (this.isEditContent = true)
      },

      DeletePost(){
        axios.delete('/delete_post/'+this.post._id)
        this.$router.push({ name: 'Dashboard'})
      },

      async save(x){
        if(x==0){
          this.isEditImage = false

        }else if(x==1){
          await axios.post('/update_post_title/'+ this.$route.params.id,
          {title: this.post.title
          })
          this.isEditTitle = false
        }else if(x==2){
          await axios.post('/update_post_place/'+ this.$route.params.id,
          {place: this.post.place
          })
          this.isEditPlace = false
        }else if(x==3){
          await axios.post('/update_post_description/'+ this.$route.params.id,
          {description: this.post.description
          })
          this.isEditContent = false
        }
      },
      async like(){
        if(this.isLoggedIn){
          if(!this.isLiked){
            this.likesCount++
            this.isLiked = true
          }
          else{
            this.likesCount--
            this.isLiked = false
          }
          try {
            await axios.post('/update_likes', {
              postId:this.post._id, 
              userId:this.$store.state.user._id,
              isLiked:this.isLiked
            })
            .then(response => this.post = response)
            } catch (error) {
              this.errorMessage = error.message
            } 
        }else{
          alert("You need to Sign In to like Post!")
        }
      }
    },
    async created(){
      await axios.get('/post/'+ this.$route.params.id)
        .then(response => (this.post = response.data))

      await axios.get('/user/'+ this.post.userId)
        .then(res => { 
          this.author = res.data
          this.isLoading=false
      })

      if(this.$store.state.token){
        this.isLoggedIn = true
      }
      
      if(this.isLoggedIn){
        if(this.post.likedBy.includes(this.$store.state.user._id)){
          this.isLiked=true;
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