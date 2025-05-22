<script setup>
import { ref, watch, onMounted } from "vue";
import { useSongStore } from "@/stores/song";
import { useViewStore } from "@/stores/view";
import { storeToRefs } from "pinia";

const useSong = useSongStore();
const useView = useViewStore();
const { audio } = storeToRefs(useSong);

let isHover = ref(false);
let vol = ref(80);
let volume = ref(null);

onMounted(() => {
  volume.value.addEventListener('input', (e) => {
    audio.value.volume = e.currentTarget.value / 100;
  })
})

</script>

<template>
  <i v-if="vol == 0" class="fa-solid fa-volume-xmark text-white text-[20px]"></i>
  <i v-else class="fa-solid fa-volume-high text-white text-[20px]"></i>
  <div class="flex items-center ml-2 w-[150px] relative mt-2 mb-[23px]" @mouseenter="isHover = true"
    @mouseleave="isHover = false">
    <input v-model="vol" ref="volume" type="range"
      class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white" />
    <div class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0" :style="'width: ${vol}%;'"
      :class="isHover ? 'bg-green-500' : 'bg-white'"></div>
    <div class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"></div>
  </div>
  <div class=" ml-4" >
    <i v-if="useView.isFullscreen"  class="fa-solid fa-compress text-white text-xl mt-1 cursor-pointer" @click="useView.toggleFullscreen"></i>
    <i v-else class="fa-solid fa-expand text-white text-xl mt-1 cursor-pointer" @click="useView.toggleFullscreen"></i>
  </div>
</template>
