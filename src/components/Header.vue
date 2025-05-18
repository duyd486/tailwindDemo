<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'

let openMenu = ref(false);

</script>
<template>
    <div>
    <div class="
      w-[100%] 
      h-[64px] 
      fixed 
      right-0 
      z-20 
      bg-black 
      flex 
      items-center 
      justify-between 
    ">
      <div class="flex items-center ml-6">
        <RouterLink to="/" type="button" class="rounded-full p-[1px] cursor-pointer">
          <i class="fa-solid fa-chevron-left text-white"></i>
        </RouterLink>
        <RouterLink to="/" type="button" class="rounded-full p-[1px] ml-6 cursor-pointer">
          <i class="fa-solid fa-chevron-right text-white"></i>
        </RouterLink>
      </div>
      <button 
      @click="openMenu = !openMenu" type="button" 
      class="bg-[#282828] rounded-full p-1.5 mr-6 mt-0.5 cursor-pointer">
        <div class="flex items-center">
          <img class="rounded-full" width="30" src="https://shorturl.at/LS0mQ" alt="">
        </div>
      </button>
      <span v-if="openMenu" class="fixed bg-[#282828] w-[200px] z-50 top-[64px] right-1 p-1">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2 hover:bg-[#3E3D3D] cursor-pointer">Tài khoản</li>
          <li class="px-3 py-2 hover:bg-[#3E3D3D] cursor-pointer">Tài khoản</li>
          <li class="px-3 py-2 hover:bg-[#3E3D3D] cursor-pointer">Tài khoản</li>
        </ul>
      </span>
    </div>
  </div>
</template>