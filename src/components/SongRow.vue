<script setup>
import { ref, toRefs, onMounted } from 'vue'
import { Icon } from '@iconify/vue';
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";

const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false);
let isTrackTime = ref(null);

const props = defineProps({
    track: Object,
    playlist: Object,
    index: Number
})

const { track, playlist, index } = toRefs(props);

onMounted(() => {
    const audio = new Audio(track.value.path);
    audio.addEventListener('loadedmetadata', function () {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes + ':' + seconds.toString().padStart(2, '0');
    })
})

</script>
<template>
<li class="flex items-center justify-between rounded-md hover:bg-[#2A2929]" @mouseenter="isHover = true"
        @mouseleave="isHover = false">
        <div class="flex items-center w-full py-1.5">
            <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
                <Icon icon="material-symbols:play-arrow-rounded" v-if="!isPlaying" class="size-7 text-white"
                    @click="useSong.playOrPauseThisSong(playlist, track)"/>
                <Icon icon="material-symbols:play-arrow-rounded" v-else-if="isPlaying && currentTrack.name !== track.name"
                    class="size-7 text-white" @click="useSong.loadSong(playlist, track)"/>
                <Icon icon="material-symbols:pause-rounded" v-else class="size-7 text-white"
                    @click="useSong.playOrPauseSong(playlist, track)"/>
            </div>
            <div v-else class="text-white font-semibold w-[40px] ml-5 p-1">
                <span :class="{ 'text-green-500': currentTrack && currentTrack.name == track.name }">
                    {{ index }}
                </span>
            </div>
            <div>
                <div :class="{ 'text-green-500': currentTrack && currentTrack.name == track.name }"
                    class="text-white font-semibold ">
                    {{ track.name }}
                </div>
                <span class="text-sm font-semibold text-gray-400">{{ track.artist }}</span>
            </div>
        </div>
        <div class="flex items-center">

            <div v-if="isTrackTime" class="text-xs mx-5 text-gray-400">
                {{ isTrackTime }}
            </div>
        </div>
    </li>
</template>