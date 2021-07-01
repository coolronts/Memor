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
    <img class="object-cover w-full h-screen hidden md:block" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGBgZGBgaGhwcHBgYGRwcGBoZGhgcGhocIS4lHB4sIRoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrJSE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALMBGQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAwYEBQIEBQUAAAABAhEAIQMEEjFBUWEFInGBkaETMrHRBkJSwfAU4RVicoIHM5Ki8RYjU2PS/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAQACAwEAAgMBAAAAAAAAARECEiExQVEDYRMicfH/2gAMAwEAAhEDEQA/APG6KKWtYhKKWimBAKKWKKYEopaKuBKKWigSilopgCKSlooEopaKYEopaKYEopaKYEopaKBKKWKKYEopaKBKKWiKYEiiloqYEopaKYG0UtFMCUUtFUOIpKkYz+9NirgSKKdFEUxNNiiKdFFXDTYop0URRTYop0URTA2KIp0URTA2KIp0URRNNiiKdFFFNilpaIoGxSxSxSxTAyKIp0URTAkUkU6KIpgbFEU6KIpgbFEU6KIpiabFFOiiKYpsUlONFTAlJTooIpgbSU6ipglItHXpSRQTFiKeokE8BEngJ2vW5YyZFEU6KNNXDTYoinRSRTDSRRFLFEUw0kURTooimGmxRFOiiKGmxRFOiiKYabRFOiiKYabFEU6KWKYaZFEU+KIphpkURT4oiriaZFEU+KIphpkURT4oimGmRRFPikimLpsURTooiphpsUkU6KSKYaSKSKdFFTF02KSnxRFMNTZPA1nT4kmJgDpxOw86d2jpUhVJ0jcW+biTG528KnxcyqppW5bjtCybRy6HxrLPvvWL6wnm6mw34HfarTqIAttP1qI4AAuZMAiOUGd4nhSoRIuLjnyrUvypZ+G6aIqVkppFbxjUcUsU6iqpsURTqAKJpsURT4oqYaZFEU+KIphpkUsU+KNNXE0yKIqTTRpphqOKIqTTS6auGoooipdFGimJqOKIqTRSaauGo4oin6aSKmLpsUkVdyPZ74phRbixso8+PgK2G7KwUGknWxiTOmJDWUcLqJ43q9S8sc1FJFdRmsmhQhMJVAE6uI4ASdyTHGb8Kzv8NQ6QjMxJF+7EnZQPUm9gNql4k5MiKVMJm+VSfAE/SugwexsNHOti4DABQImQCC0GYvw5GnnGYSiqO6w2AOgRIA4SYItz61Ouezt+MLCybNNiDeBFyVjV4RIv/eq7IRvaupbKloYrpZQCwjcH8pOxPE1Hi4QUkoAe6N9P5Q2owdyadVnJzFFbTdmFzqjQTvPy8TsNzt09KZ/gh/8AkX0/vWetXYajppXUFmBPdn9qUJgncL6RWJbl9auZfJqyBziBScVUKx3grCS+9wNo61z/AMk+xvqvZ3L4ZAKNBF4MwbjfjNqyiTqvzm+3/ir/AGz2Z8DFOGrriBQCHWytIBMAnhsazRMxE1Ly3zFkzwu4GIuoBi2mJJUCRInjwB+ldp2f2RlXXRoEsJXEJJM8JExHQda5jAyTKgGk99SS2n5VWzEDiJtOw8au9l4rJ3SO4e7z0MWWFniIZL9T1qcf5ZfDXL+OyamxezkRmR8MBgYNzuOI6betNHZuAfykf7m+9bnaoXEQNMugAU8XQcTz4kVhKzDcR4/eu05RxvG/CnsTCIszg9CCPcVSznYjAdxgfGx9q0ldp2+lKMzatW8bGZOUqngdhakBL6WgSIBv4g3pG7Afg6nxBH3rROORwNOXNE1qXilnJiY3Y+KonSGH+Uz7EA1TCHlXVJm+hqPMoj/MNLfqi/SedP8AX5Sdvsc2MM0aK0XwipIPDjwpyZRyJ0nzt9ammM4YfSm/DrT/AKNv0fSnf4e8wQo8SI/m3rVRl6KNNa57MMfMs8jI9Cd6i/oYjW6LPWT6CqM3TRpq++WQHScQFuSgsRznl/NqsNn8vgjuKZgS1mY3njt5AVO0MrJGGSYAv9hJ+h9Kt5PsbFfZdK/qaw8huaRu12nuhBMnU5DN3v8ATt4RUh7ZcidRJAkA2tbcLAiT7+dTtxW8eTSb8PIFHfOqd22PQIt/U1Jgdi4KtMEx+oyJ8B+9ZRz2I5WR3SYnZjPATMCaM3mHXGAZjGnTAItqi5E9PpV78fxOvL9dI2MBA2AHSAB0FUM4Qp1WuYvG/D3qjlcyJlmgARfYme79eVQ5/PrDKGBMXmAB06npS89iThlaDudBUESwHXxHjwqDI5hUOkDUy8TZZO4A43+nSsRsV2PzC89BsIuDI2qbKq0i4LASCxAi+4vt3p62vWO/l06+G40FtbPfYmNMbxadvXeguskhus7zwBvWFi4rJq0vqIkQYte55E3NRY2ZsA2oAjVa4vI3I2i1O6dHQYjTM+u1RBwARuL8prFw8wkXbZuW4NxA5g+JHhRh4xGkqCREyV+hnw4VOy9Gm7xsbfyxpvx25D0FZ7dp3+XbyNQf4g36V9T96veHStjPdgw3d70XIBIXjKhzsRyI9Kor2avfDBgQJUaWOowTBIMC+kTt3ule0dj4+XxdKnFxVfSoRvis5MC4glr8dLCdorZxvwdlsQEa8RGIk6XM34lXB4jj5RXi4876r08pPb55wF03GG2oTp3Ybb2340mUVdc4hVAIMMHAPTuKWExExXurf8OsMBtLKxMyXQX6GNvHeuE/En4LxssrYq6GQC6sxLhQSZBCwyDc8R71vtxv+t8azJZ5nlFlO18pmMN0TDdcyVWytisjJgnWVQ6l0qEVjBAEnjXedj9lZXHyxY6EZj3QSiqLEILWazRPGBvFeRdlvpxQY0EJixER/wApxfgZkjzrp8p2wFy4Vi5OIUw2Zo0rpJdGQKNU6tWqZ+a1eX+Sf4uWcZs9/wDj08ZefHbUPbHYWbwtS4WGcfDkgtgMH0yA2l2BLCQykAwINq4vE7SxB3SD4NpLW6kV2SY2Mju6YrALp1MD3CFRAxKNssrxHpXFZdtGYDEwFck8NmIO/Gu/DnbP+OPLhlNbtPE5n1FvalTN4rWUFrajAmw3JgW8adnsdWLnVJPy7G0cxYVofhPtrDyz4pctGLlsXB7oEhn0xMj5e6dq6TlcZskqhmMTHQw6spiQCIPObrNGVxMfEJGGmI8CSFBaBtJ0rYTFbn48/EGBm8dcTD1EaCDqHemwG4AiBwo/AGOUxMQ6tE4N5YAMBiLI2kf2qd7JtOs3wwsxmMZDpdcRGAuGlTe1wyzFNy+bxWIVAzHaBDG/CNNa/wCPHDZvEIII0rBDBgZuYP5rki3KsDJFgSVYAjmwX6kT5Vrhytm1OXHL4aGB2hiKdLBpm+2pY+YxF7cxwrQy+cZ3hWxWTgwUHxm0bcetYuZx32Yi1psZ6ar+xrR7N+Ow1Mrsl31NqiQLESCDtFgd4vW7axkWu1s0EJC4rOrSPmAYeGkeNiOnWsjHzjqLsZYfqBMdePuKfmMJO8zYjK1iAyXI5ACAPa1ZuPckiSOZ4mL07XDrGguckAF3mDs0CeETPS4jlTRgkWIYtBiRbqSxAt9qq4DsvyjkT0irxzX/ALikrIJN4+aYE73qzl+ln4r5t3+UtYcBZQTvsAOPWokUi4I4zcHhb9/7VttmkY6dDTYDULcx3eVPzf8ATqDpZXiNQCaDHCDN5j3pZN9pLfxgYysCdW/G8ngTImnphMLgAgRN7zuYXf2rTwcquImpQNUzpsB0BMXETvPGtHEymDh6U06ntIADAEwNyd6s4/S8vjGwcziMyMxJXULCeDAmY8KTM4xd2Vm+XVG0bwZmujxezpGnWV/0mP7VUGUXCl0xJcG4aLzusQInereNZnKMIuVUQ/QxYiZmI4W8qjOLNtUAW2mbbwBAHXeruNjQzMAFJExB2PAHjvx5CxipsXRAL6PlB0KoLbfmY7HxrEjesd0b5u8R+oixjqd6lxMVitzJMxa4HenqCSW9KmTFVrKdBPDgfIyDUeNlmufmgQNhx5Hx4Uz8U3+qWICjcbxeDN58+Q6VJi5kM2ykciQNhBv1gX6VAWUQrKbDYkgyeg2pY1HSq77TuBa5I/l6aLiOoEXU/wCblwiAZFo4+FQrhkggKG726wRvPHhFXstkBA1XPIWB8edaK4fStzjrF5MjC7PJu0E9Jk+J+3rU/wDRL+keprSgUkirOMZ7UvZuVxbEMRpIZTbUu0Ed4NvG0+1eg5L8SY66RmkLkDuOq4+FjRuRq0aW8LbV5Xl+0cQEEoWPjqO88a28p+KcdLkYt7QQumPSa8/Ljvx6Jcet5T8T5R00NjY3eI7uIpRgRBgMqgctzea0cn2tl9AVW1K0g6sXCcXF5Jc8OG168oyv4v1b6uR7igeZ41uZL8TYI4QSBcQggGbE/cVy62VdlWu2vwdkXYPlMfDRhOpWZmwmBBX5r6DeOI6CsntD8F4oRAuLhFUKMzAtp7sjfT8xNo/h6TL/AImy7kTjASIkNgs28/mYwBe5Uj9xfxChxCzDEZAQVIZGEKYBYYRFze0NE871eXHt7a48rxmRx3aWTc4AHw2CYjOxco5kFtQCsoiyoxM7a+ledZ4jW54lmIiI+dpmvoTG/EmXYwNWNuSFLjTrWCFJF20s1rbnasPtv8I4OZU4mA+Jg4huVcmDO2peW919Kkzh/wALbyeHfCY7K3oaX+nb9LehH1rqe0exc5gMdeGzqD8yTiKfMCR/uArKyOcSX+Mpfu9wK2mG1C5g3ESL8663lM2eWM84zf6V/wBJ9qP6R/0x4kVoZ3Mq76sJThrPyltUecX9qacwKsuzcwsy4pDJN09/tVvKZVhqMagbGGC33/Mp/al+NVnL59UXSwPeOoEXHAftWpJfbN2eminZmE2Gz4mKiTBJ1BmBEhSYBYcLaFmwnjXOkFmIQs0m5PEcyOHnW1hYiP8AKyt02PoaizAZJZNrSoA9hw99631z6xpmD2aiCcRtRNrGFE8zYn+Wqxi9lYZ4EDjcn61hY+MzmWNuQ4eVaOR7S7pVjsIVjMeDfekvH0tlWh2SnBm/7D9VqTE7Plg5csf80EHjJ86zz2if1emmkbtE8z7/AGpbxTOS3l+z3fFCswUAltQYKRMt3eJYnlMb7VN2tl0jTICrxmTIBAGo/Md96zRnWYEXIO4F55d0/uKZl8lqks4BEEKxgxuTBO3nWZk9NeaTs8Yh/wCXsJEmQIty49OprocrgBBrdpaLsbAeHKs7C7QQCABAH5WFo6GJ8pqHNdtiIRZ6tt6ca1LIlmtds472wlt+t7L5Dc1l53SweWZ3EQw06COI6Rf+WqsmOznUWLgXK2DL1CzDDa+9SYuEry2GQCY4/mPC23EybRUvLUnHFXME6V1Ai5g7sOh5cKjxlZlmyqBYTv1gb8L1ZwcNnOpmAAMcGNgBFjtH1qqV1fN3QL6RHtWWlOp8HMMuxtyNx/amvhmdo8d/Or2Ty+HuzieRBC+ZIFIVYy6HFFwVHPcR0O9aODlQogCPqfE8aajj8pB8L1IMSuskc7qQJG1EGkGJR8StICaSaJFEigb/AF2HB7zel/c1YyOdV30weSzpExwsbGsN9PTztTNANtxXNvXaqpDfITHA3jgRvvTsXNiYYMscZeBzte1crlc3iJ8jtHjqHodq2cr28CdOItzHeXTE9dQsPAjxrN4rOTbwcTCOkFtWx0uoaeoDAj0v1rWw8BCAUYax+VCcJt5IEPHtNYSJhtB0JiE8wy+axKzad/EU5sYp8qMRYWKGBy7rCPKKl4t628R8ViNLYyd3UBrOIwG5kOj2gcOY2qpivnBC4eZdpuQURQJ590X8qzk7TVQS+HqbhpYtEXFyx5bVeHbqtdlif1IQfCQT71m8P6Wcp+svPY2dZu9iExM6HCA+AxBpHHYGpIw8QacYOW542EuKPAYmCqsPHTWg2ewDw0mLlA/7ifeKp4uEjCVxB6RPUzE06z8O39s3F/C2CxsCB/8AU8mT/kxJgdJ+1VB+Bmd9OFmFLQTpdHRrcJAK+9a6ZVhdX1G3JgPIyfar3YPa2Jh4mnSCxVlABQE7c2nhypePKejZ9cXmPwhm0nuAxvpIaPEKTFZWZ7LxlIDKQYtNiR0FexZ/PkqMTvhgO+IkFRxhxpkD9xWa/aeUcMjjCPPTOET17hUct6cbfsLJ8eSvlnG6keR+1WMLtBl/NqH6Wv6HcV6Bi9n4ZdfhlNBOkhlDkEglQpDI14i7Tfepv/TmG6F0ZMUAEsqO2G6gCYOFjByx8GvW/TOa4Zfh43yga/0mA3kdm/lqqYuQIPdN+Iazfb6V1Z7Lw7aXKAyVGJhsthHFNUmZ2B2B41Gio7jDxAH4Sshx1UEBiOhFWzfbM/pxz4LjdSOsfvSfAaJgHwIrsM32I6GcNviJE90HWo/zYfzeYB8qysbCVge8muDBGpXnYcPrU6z4dr9Z+VGMvyq4HIkAe4qb4et8JcUBNTQ5EA6ZXvH1JpmXzWgsuKt7d6JYXEkiYbx+tOzWVlRpYMDBnbgPv/4qfLFni6of050ax8usIfEgkewNQsKmbMGNIPd1agOsaQfSokWTEx5E+wrM361cXuzMYgwBJ5Dj0I286lzK31aWQNYwO75H148POo8v2e28BrSpUmZHT+xqbEzrAwy2sSCLXmDDRzJBrTIzrpp0gKGXiLyN9xvcn2qlggCJiYtvNTqyqCV1NdfUTcQec+9Jj5vExGmN/GIv96ghxEJGpiq+xJtyBNVxbb2mpcfLMvzkg9QaiVRzNFIxO/8AParxd1GoOeNiZ+tV8PBBgkmOJEGPLhw3qfFRAsgtJXiLGQJggjieVTti9bU2X7QxGIAAYnYbH1mKv5lsbCVWxsDEw1cAqzIQrBhqGljAaRe1Y2RMMOcNbe+kx717RlvxJgP/AIdhh1PwcTU4BBI+HlcVSCu45bVjl/NeFy+sWfxyzY8sw+0Eb80eNqn+On6h6inf8RMRG7QzLIoVdagADSLIoJjqQT51y+o867ceexjo18PFdtl6bCJ8TvUiI7bR9fDap1xB9+PvUmqb8BJ9d61I52ofgsD8w6iDM8dzSHDYtExzJAqZcUMYBvtx/alzCsoEd6TFiJH3rSGjKOAWUhhxMJ+6zUeHhvMyFtJkLMDpEeVOTMlRqbuHhNibx/PCrBEgEqDaZ8b7jxphpuEzsSuo8PyiTO9uFNzKgbEE7Hup7WmrAxzAYyATBK8AOpuR96V8NQJ1EgxsAOnKhqmMJBGxk7aAY4TwFTPlVmJXlfDUeljtS4mXcbCVNxe9uY01KmEpuRPAAmeG/dPhVxNQodBEaQeWkqfaKkxc9iEaSFb/AFa3jj+ZjFRpl8YMSIHQKAbWFjvU2JrgAFl4QQpB6EEfyaY12qRO2MZZEnvCCCwZD/sYEDyp6FHnExMMGCAVVtJafmJEghfA71UZXCae7uNhB9jS6mUEyHsbRpYGBHHaSfIVOp2bfZuBldSvivhIQLIuvDhjxLsW1MviADeDWnnMrl8NNQxXVSCFZXLTqBsu82na1cthDUF7l2O1/WfvSphJuI3/AJ1peLU5NnM4zvg4DsQIZkAYap2MgcRNrTFqlfsXMsJV8NxvA16uoBPy+BrMXEi5QN1k3961cr2xpgRpi0iR958KUitnsfFQqowGRYhgxDozc1BkCoPiqZL4RvuVLLp6iDY+Mi1dInaasNLIGn8ykavNDAPtVfFyqPJw2g8gCrf9J/asrjle0sumKe6sLGzaXaeetFBFulZWJknQjSNSgjuyCdMEMI3Mgn0rrMzlXX50DdRv9/rVRgCInyYAj6ftUxXH5nAWbjQbjiBI4hTeLR51AcmwbSSBuQSe6Y5GuxxMva6SP8pt6VUxclhta6nhHdI8OHtU6prLfEaIJVW2AjfadRgCeFzyFQ4+IjnvSjxuZYNsJk7CJ2HD00MfscHZ/UavcER6caibshysAo0CANYUm83Dx125+VTKrKLaSe9AIBgQQZBtG1pp5zLbIN54Sb8j4Te1aOJl3RQGwGOkCCBKzG8iT+3rWUSAIujDeZn034CgQ5d5llNpmdxAm496c+WazREiRYgEcwePGr2Jn3CgsZJ1ROnYaReNx0qHCwXfvMrEyIEEX5SeFZ81rfCkEIJkGyn7elSNmTp0ySOTAHnx3rVTK4xMEoo4b25CwJ+tNzODZlbBVoAPxMMtxsDDEar9B+9LL+JOTHhTG6zyuPQ396nQNbSwYCwBgx4Brek7VI2SVjpwmLH9JGlvffyqrjZd0MMrKZO4i8WqbK0TMuxJLTqJBMzPveq9WPimImRyIBG1/Cm6x+hf+7/9VYjUfLodifCSKEy9tKmAfKek1Z+Hy+9Iic5rvkcdpcrlxwEQLsrQfX7VH8Vg+lLiLSdRva9WkwDyPibfW1SMmm6m432+opiFyeVRCDjkFj8q7qOtxvTMy7HE1ALpYd2ePDbpQuZPj1I28KQH+fzeriatPgLpWWMxawAE8rWqJUuBq3Np425U1VJFSjDqh7BVMXPvRiYiGxkyOIFRpgQdhE8h9ONSviGwsQOlBFoBPdXba0QOFxeKmw2jc2HA6jbnHGmOxIIBgdLfSmjUDe68v770EeNiqt4m+4WPpT9KxLIROxBJHtNWPhpwPlf2nhUbKRvAvxHGgiGKjdwMRwgki59DRmcSb6lInaA1uNjUkXkgHrPHwqFEWbhYvIAIbpfY0FdXYtpDheRgnrEGrmXLEw7wbAELIP8ALVWxcRFMGflDQASb8LWpMbMGAqhQSJ7wJM8hY9Kng8rozLgwgZjMWETNwRc8IqdO2Is5BI4EXE9RWTlBiKHOuQbNvPI3PS3Kn5fKhJKmV3kmTvHDYi/tzqZq9sdLlu2+B28fod/rVlsfBf5t+ZmfW9c4jrISDqJi4iOG9rVIMCSAribyCTw8qdfxe362nynFG9Z+oqs+ER8y/v7isjLdpn8rW+1X17V/UPMUxrYR8sh2t4f2qJ8s3Az4ifpVsYiN+aD6Umk8CD9frUGdoYbexqx/iD6dDaWXkyIfeJqVm5j1tTHSdqZDao5lFf8AIFPNCyH0BK+1Z2LksUGcPELdCx1eF4B9q2HwelRthVMXWeubZYXGDK0yNSkCYgERvUmecfDJBvKnqZMeVWjO245GCPQ1SzmVVuGn/T3R/wBO3pFXziZNZ+exDpXxP0pct2k9kMEXUBu8o1DSYDfLvwio8fKPAEhgJ6G/MeXOqqJDKGt3hPhNcbx/W5VvNZFhfTA57qfMbedV/wCnbl7itMZw6Y8PqKZ/VdB6CmCdMUciKsJiQOI86qKn8tUqxxNd3JYDz1pSaiDjnUgIohMNAOtIiTTxFKDWkTJbanF6iFOFA5mNKF40k0a6CVFHIDzvTtQ51EMTpSa+lAmIgbcT/OdOXDNhqIA4fN433ptE0ErR+W/PhFNdSLmI5mPrUZbpel4QSDPDegVGETbyg+Oxprut9STex0yb703By6Bg0RE7R+9PfGLmy6YtYT+1BAmasMNibi0KNUbQQZj0pMwQqKpUwBEBfmE2J/v6VMF57+lKQZnl/L0FTFw2ZkUWLASNxB6b7zVn4aozALqP6j0PDlBj+9McDUWIMwLg8uEcqlDd0ne0gTc34Tyk0iVRwcNixZ1gabQAvK5jztTsymixYGAJ3ESBFovV/s/FDfMImVg3F+IH7dKg7URQ5VV1gMO9+q51A8B/YUzwsvlT0EbeO/DbYCrGDmGXZ/KahxWmyjSOVpvveP5NMw7fMpYRG4BHjaiytJO0J3irKshEhoPrWNjBIBUnwP8AL+1RHMACxE2tsb24eFZsalbmojc0GDy8qz8HNNsw+hqZMdDwg9KCwU5GonSlZuoPsaaH60ET4Q5VC+XU2Nx1q2Wpu9BmY+QX8pI9xVT+hfmK2mWkvWesXtVBNv51pwoorTJzU9KKKIkWpFooqwTLtQtFFVCn96VaKKBppy0UUDxtQKKKCQUGiighaqXaWKyjumNqKKl9EWwe6D0p2LY+RpKKoZQqD4n+w8TRRSey+lIsVLQSLLxPKK1c0NOGoFrD3aiik9JfcYAc/EYTx/er2G1qKKkbpXQXtUegCbcP3oopAw/Kg6ge9Lji/hNFFREuUO3SD9Ks5jfxJooosV0c86dzooop602iiiP/2Q==">
   </div>
  
 </div>
</template>

<script>
 export default {
  name: 'SignUp',
 }
</script>
