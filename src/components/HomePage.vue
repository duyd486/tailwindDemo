<script setup>
import { ref } from 'vue';

import FujiiKazeAlbum from "@/assets/FujiiKazeAlbum.json"
import FavPlaylist from "@/assets/FavPlaylist"

import { useViewStore } from "@/stores/view";
import { storeToRefs } from "pinia";
import { useSongStore } from "@/stores/song";

const useView = useViewStore();
const useSong = useSongStore();

const filter = ref(1);
const search = ref('');

const recentlyPlayed = [
    FavPlaylist,
    FujiiKazeAlbum,
];

// const popularRadios = [
//     { title: 'Dangrangto', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Wxrdie, Obito, Shiki...' },
//     { title: 'Obito', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với RPT MCK, Wxrdie...' },
//     { title: 'Hà Anh Tuấn', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Noo Phước Thịnh...' },
//     { title: 'Sơn Tùng M-TP', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Da LAB, AMEE...' },
//     { title: 'tlinh', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với RPT MCK, GREY D...' },
//     { title: 'Đen', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Binz, Vũ...' },
//     { title: 'Đen', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Binz, Vũ...' },
//     { title: 'Đen', image: 'https://i.pinimg.com/474x/e9/c0/42/e9c042d4188dbe5a8873348903eef8c7.jpg', description: 'Với Binz, Vũ...' },
// ];

</script>

<template>
    <div class="text-white p-6 space-y-10">
        <div class="overflow-x-auto scrollbar-hide">
            <h2 class="text-xl font-bold mb-4">Gần đây</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div v-for="item in recentlyPlayed" :key="item.name"
                    class="bg-neutral-800 rounded overflow-hidden hover:bg-neutral-700 transition cursor-pointer">
                    <div @click="useView.selectItem(item); useView.setComponent('PlaylistPage') ; useView.setPlaylistData(item);">
                        <img :src="item.albumCover" class="w-[180] h-[180] p-2 rounded-xl object-cover" >
                        <div class="p-3 text-sm font-medium">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div>
            <h2 class=" text-2xl font-bold mb-4 hover:underline cursor-pointer">Radio phổ biến</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div v-for="radio in popularRadios" :key="radio.title"
                    class="bg-neutral-800 rounded p-3 hover:bg-neutral-700 transition cursor-pointer">
                    <img :src="radio.image" class="w-[180] h-[180] p-2 rounded-xl object-cover">
                    <div class="font-bold text-sm mb-1">{{ radio.title }}</div>
                    <div class="text-xs text-neutral-400">{{ radio.description }}</div>
                </div>
            </div>
        </div> -->

    </div>
</template>