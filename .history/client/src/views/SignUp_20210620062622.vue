<template>
 <div class="bg-white font-family-karla h-screen w-full flex flex-wrap">
  
   <div class="w-1/2 flex flex-col">
    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
     <a class="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Memor</a>
    </div>
    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
     <p class="text-center text-3xl">Sign Up</p>
     <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
       <div class="w-full py-6">
        <div class="flex">
         <div class="w-1/3">
          <div class="relative mb-2">
           <div class="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
            <span class="text-center text-white w-full">
             <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
             </svg>
            </span>
           </div>
          </div>
          <div class="text-xs text-center md:text-base">Personal Info</div>
         </div>
        <div class="w-1/3">
         <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
           <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div class="w-0 bg-green-300 py-1 rounded" style="width: 100%;"></div>
           </div>
          </div>
          <div class="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
           <span class="text-center text-white w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/>
            </svg>
           </span>
          </div>
         </div>
         <div class="text-xs text-center md:text-base">Account Info</div>
        </div>
        <div class="w-1/3">
         <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
           <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div class="w-0 bg-green-300 py-1 rounded" style="width: 0%;"></div>
           </div>
          </div>
          <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-gray-600 w-full">
           <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
            </svg>
           </span>
          </div>
         </div>
         <div class="text-xs text-center md:text-base">Finished</div>
        </div>
       </div>
      </div>
     </form>
     <div class="text-center pt-12 pb-12">
      <p>Don't have an account? <a href="register.html" class="text-red-600 underline font-semibold">Register here.</a></p>
     </div>
    </div>
   </div>
   <div class="w-1/2 shadow-2xl">
    <img class="object-cover w-full h-screen hidden md:block" src="data:image/jpeg;base64,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">
   </div>
  
 </div>
</template>

<script>
 export default {
  name: 'SignUp',
 }
</script>
