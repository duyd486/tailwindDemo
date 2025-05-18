<script setup>
import { ref, onMounted } from "vue";
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Player from "@/components/Player.vue";

import HomePage from "@/components/HomePage.vue"
import PlaylistPage from '@/components/PlaylistPage.vue'

import { useViewStore } from "@/stores/view";
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";

const useSong = useSongStore()
const { currentTrack } = storeToRefs(useSong)

const useView = useViewStore()
const { currentComponent } = storeToRefs(useView)

const components = {
  HomePage,
  PlaylistPage,
};

</script>

<template>
  <div class="bg-black">
    <Header />
    <Sidebar />
    <div
      class="fixed right-0 top-[64px] left-[420px] w-[100%-420px] overflow-auto h-full bg-gradient-to-b from-[#202020] to-black ">
      <component :is="components[currentComponent]" ></component>
    </div>
    <Player v-if="currentTrack" />
  </div>
</template>
