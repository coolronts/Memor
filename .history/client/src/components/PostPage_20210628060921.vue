<template>
  <div :class="style.body">
    <Header/>
    <div :class="style.postContainer">
      <div :class="style.image" style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"/>
      <div :class="style.infoContainer">
        <div :class="style.heading">
          <div :class="style.title"> {{post.title}} Great Place to Go! </div>
          <div :class="style.place">Oslo,Norway</div>
        </div>
        <div :class="style.subHeading">
          <div class="flex">
            <img :class="style.avatar" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
            <p :class="style.author">Author: Coolronts</p>
          </div>
          <div :class="style.publish"> Published on: 22nd January,2015 </div>
        </div>
      
    <div :class="style.content">
                Then came the night of the first falling star. It was seen early in the morning, rushing over Winchester eastward, a line of flame high in the atmosphere. Hundreds must have seen it and taken it for an ordinary falling star. It seemed that it fell to earth about one hundred miles east of him.
          All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.
          He had three simple rules by which he lived. The first was to never eat blue food. There was nothing in nature that was edible that was blue. People often asked about blueberries, but everyone knows those are actually purple. He understood it was one of the stranger rules to live by, but it had served him well thus far in the 50+ years of his life.
          "Explain to me again why I shouldn't cheat?" he asked. "All the others do and nobody ever gets punished for doing so. I should go about being happy losing to cheaters because I know that I don't? That's what you're telling me?"
    </div>

    
  </div>
</div>

</div>
</template>

<script>
  import axios from 'axios';
  import postService from '../serverService/postService';
  import Header from '../components/Header.vue';

  export default {
    name:"PostPage",
    components:{Header},
    data(){
      return{
        style:{
          body:"mx-12 mb-12",
          postContainer:"flex flex-col justify-center items-center",
          image:"bg-gray-300 h-96 w-full rounded-lg shadow-md bg-cover bg-center",
          infoContainer:"w-5/6 bg-white pt-6 -mt-10 shadow-lg rounded-lg overflow-hidden",
          heading:"py-2 flex justify-between px-6  text-center",
          title:"text-4xl w-full text-center ml-36 font-bold uppercase tracking-wide text-gray-800",
          place:"text-red-600 text-xl font-semibold self-end",
          subHeading:"px-6 pb-3 flex justify-between",
          avatar:"inline object-cover w-8 h-8 rounded-full",
          author:"self-end text-sm font-semibold ml-2 tracking-wide",
          publish:"self-end text-sm",
          content:"py-6 px-6 bg-gray-50 text-justify"
        },
        title:'',
        image:'',
        author:'',
        place:'',
        post:[]
      }
    },
    mounted(){
      console.log(this.$route.params.id)
      axios
        .get('http://localhost:5000/post/'+ this.$route.params.id)
        .then(response => ( console.log( response.data)))
    }
  }
</script>