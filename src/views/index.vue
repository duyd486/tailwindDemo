<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Playlist from '@/components/Playlist.vue'
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
    <Playlist />
    <Player />
  </div>
</template>
