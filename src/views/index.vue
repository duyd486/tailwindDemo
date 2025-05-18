<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Playlist from '@/components/PlaylistPage.vue'
import Player from "@/components/Player.vue";

import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let openMenu = ref(false);

onMounted(() => {

})

</script>

<template>
  <div class="bg-black">
    <Header />
    <Sidebar />
    <div
      class="fixed right-0 top-[64px] left-[420px] w-[100%-420px] overflow-auto h-full bg-gradient-to-b from-[#202020] to-black ">
      <Playlist />
    </div>
    <Player v-if="currentTrack" />
  </div>
</template>
