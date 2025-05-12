<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Playlist from '@/components/Playlist.vue'

let openMenu = ref(false);

</script>

<template>
  <div class="bg-black">
    <Header />
    <Sidebar />
    <Playlist />
  </div>
</template>
