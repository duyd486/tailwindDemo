<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { useViewStore } from "@/stores/view";

let openMenu = ref(false);

const useView = useViewStore()

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
      <div class="flex items-center gap-4 ml-8">
        <i class="fa-solid fa-poo w-8 h-8 text-white text-[32px]"></i>
      </div>

      <!-- Home & Search -->
      <div class="flex self-center items-center gap-2">
        <button class="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700" @click="useView.setComponent('HomePage'); useView.selectItem(this)">
          <i class="fa-solid fa-house w-[24px] h-[24px] text-[20px] mt-[4px]" :class="useView.currentComponent === 'HomePage' ? 'text-white' : 'text-gray-400'"></i>
        </button>

        <!-- Search Box -->
        <div class="flex items-center bg-neutral-800 text-sm text-white rounded-full px-3 py-1 w-80 h-11">
          <i class="fa-solid fa-magnifying-glass text-[18px] w-4 h-4 mr-4 ml-1 text-gray-400"></i>
          <input type="text" placeholder="Bạn muốn phát nội dung gì?"
            class="bg-transparent focus:outline-none w-full" />
          <button class="ml-2">
            <!-- <TrashIcon class="w-4 h-4 text-gray-400" /> -->
          </button>
        </div>
      </div>


      <!-- Right Controls -->
      <div class="flex items-center gap-4">
        <button class="bg-white text-black font-semibold px-4 py-1 rounded-full text-sm hover:bg-neutral-200">
          Khám phá Premium
        </button>
        <i class="fa-solid fa-bell w-5 h-5 text-gray-400"></i>
        <div class="w-8 h-8 mr-[10px] rounded-full flex items-center justify-center text-white font-bold">
          <button @click="openMenu = !openMenu" type="button" class=" cursor-pointer">
            <div class="flex items-center">
              <img class="rounded-full" width="30"
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327906584_1623414034763055_2313595742443607128_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHU7kPK7H2yzZUnTlh8ZMxVOMNfpq35Qsw4w1-mrflCzMYLokSXxT9J2NllOm6moxIp2TS6fKMX1p8w3b7z9m_q&_nc_ohc=nRmSn2BIUxwQ7kNvwGlh4B8&_nc_oc=AdmeH6EkPvPHiDDMzv4fs5mYVufKYGAt-P-PW8-hxM6Qy6ipvVZoJnbJ0lMczr6MdDKbxbXhT1Bsy8lvwrKEGdAY&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=lCIC4Bx56CiH104oBXlJ1Q&oh=00_AfJEry-lRiRTpncqdE8Ipt728bj62-uIybneG90y_Zv5NA&oe=682F775F"
                alt="">
            </div>
          </button>
          <span v-if="openMenu" class="fixed bg-[#282828] w-[200px] z-50 top-[64px] right-1 p-1">
            <ul class="text-gray-200 font-semibold text-[14px]">
              <li class="px-3 py-2 hover:bg-[#3E3D3D] cursor-pointer" @click="">Hồ sơ</li>
              <li class="px-3 py-2 hover:bg-[#3E3D3D] cursor-pointer">Đăng xuất</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>