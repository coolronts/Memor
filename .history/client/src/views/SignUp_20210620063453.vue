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
    <img class="object-fill w-full h-screen hidden md:block" src="data:image/jpeg;base64,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">
   </div>
  
 </div>
</template>

<script>
 export default {
  name: 'SignUp',
 }
</script>
