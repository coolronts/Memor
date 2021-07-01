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
