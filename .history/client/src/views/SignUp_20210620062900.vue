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
