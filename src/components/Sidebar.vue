<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import playlist from '@/assets/playlist.json'

const filter = ref('playlist');
const search = ref('');
const selected = ref(null);

const items = ref([
  {
    name: 'Bài hát đã thích',
    type: 2,
    owner: '4 bài hát',
    albumCover: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
  },
  playlist
]);

function selectItem(item) {
  selected.value = item;
}

</script>


<template>
    <div class="w-[420px] h-[100%] fixed bottom-0 top-[64px] left-0 z-50 p-6 bg-[#121212] ">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-white text-lg font-bold">Thư viện</h2>
            <div class="flex items-center gap-2">
                <button class="text-white text-sm hover:underline">Tạo</button>
                <button class="text-sm text-white">+</button>
            </div>
        </div>

        <div class="flex gap-2 mb-4">
            <button class="px-3 py-1 text-sm bg-white/10 text-white rounded-full hover:bg-white/20">
                Danh sách phát
            </button>
            <button class="px-3 py-1 text-sm bg-white/10 text-white rounded-full hover:bg-white/20">
                Nghệ sĩ
            </button>
        </div>

        <input type="text" v-model="search" placeholder="Tìm kiếm"
            class="w-full px-3 py-1.5 rounded bg-white/10 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-white/20" />

        <div class="space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
            <div v-for="(item, index) in items" :key="index"
                class="flex items-center gap-3 p-2 rounded hover:bg-white/10 cursor-pointer" @click="selectItem(item)"
                :class="{ 'bg-white/10': selected === item }">
                <img :src="item.albumCover" class="w-10 h-10 rounded object-cover" v-if="item.albumCover" />
                <div v-else class="w-10 h-10 bg-white/10 flex items-center justify-center rounded">
                    🎵
                </div>

                <div>
                    <div class="text-white font-medium leading-4">{{ item.name }}</div>
                    <div class="text-gray-400 text-xs">
                        {{ item.type === 2 ? 'Danh sách phát • ' + item.owner : 'Nghệ sĩ' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>