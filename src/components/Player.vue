<script setup>
import { ref, watch, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";
import PlayerVolume from "./PlayerVolume.vue";

const useSong = useSongStore()
const { isPlaying, audio, currentPlaylist, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
    // currentTrack = null
    if (audio.value) {
        setTimeout(() => {
            timeupdate()
            loadmetadata()
        }, 300)
    }
    if (currentTrack.value) {
        seeker.value.addEventListener('change', function () {
            const time = audio.value.duration * (seeker.value.value / 100)
            audio.value.currentTime = time
        })

        seeker.value.addEventListener('mousedown', function () {
            audio.value.pause()
            isPlaying.value = false
        })

        seeker.value.addEventListener('mouseup', function () {
            audio.value.play()
            isPlaying.value = true
        })

        seekerContainer.value.addEventListener('click', function (e) {
            const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
            const time = audio.value.duration * clickPosition;
            audio.value.currentTime = time;
            seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
        })
    }
})

const timeupdate = () => {
    audio.value.addEventListener('timeupdate', function () {
        var minutes = Math.floor(audio.value.currentTime / 60)
        var seconds = Math.floor(audio.value.currentTime - minutes * 60)
        isTrackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
        const value = (100 / audio.value.duration) * audio.value.currentTime
        range.value = value
        seeker.value.value = value
    })
}

const loadmetadata = () => {
    audio.value.addEventListener('loadedmetadata', function () {
        const duration = audio.value.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value = minutes + ':' + seconds.toString().padStart(2, '0');
    })
}

watch(() => audio.value, () => {
    timeupdate()
    loadmetadata()
})

watch(() => isTrackTimeCurrent.value, (time) => {
    if (time && time == isTrackTimeTotal.value) {
        console.log("Song over")
        useSong.nextSong(currentTrack, currentPlaylist)
    }
})

</script>

<template>
    <div id="MusicPlayer"
        class="fixed bottom-0 flex items-center justify-between w-full z-50 h-[90px] bg-black border-t border-t-[#272727]">
        <div class=" flex items-center w-1/4 ">
            <div class="flex items-center ml-4">
                <img class="rounded-sm shadow-2xl" width="55" :src="currentPlaylist['albumCover']" />
                <div class="ml-4">
                    <div class="text-[14px] text-white hover:underline cursor-pointer">
                        {{ currentTrack.name }}
                    </div>
                    <div class="text-[11px] text-gray-400 hover:text-white hover:underline cursor-pointer">
                        {{ currentTrack.artist }}
                    </div>
                </div>
            </div>
            <div class="flex items-center ml-8">
                <i class="fa-regular fa-square-plus text-white text-[20px]" color="#1BD760"></i>
            </div>
        </div>

        <div class="max-w-[35%] mx-auto w-2/4 mb-3">
            <div class=" flex-col items-center justify-center">
                <div class="flex items-center justify-center h-[30px]">
                    <button class="mx-2" @click="useSong.prevSong(currentTrack, currentPlaylist)">
                        <i class="fa-solid fa-backward-step text-white text-[25px]"></i>
                    </button>
                    <button class="p-1 rounded-full mx-3 bg-white"
                        @click="useSong.playOrPauseThisSong(currentPlaylist, currentTrack)">
                        <i v-if="!isPlaying" class="fa-solid fa-circle-play text-[30px]"></i>
                        <i v-else class="fa-solid fa-circle-pause text-[30px]"></i>
                    </button>
                    <button class="mx-2" @click="useSong.nextSong(currentTrack, currentPlaylist)">
                        <i class="fa-solid fa-forward-step text-white text-[25px]"></i>
                    </button>
                </div>
            </div>

            <div class="flex items-center h-[25px]">
                <div class="text-white text-[12px] pr-2 pt-[11px]">
                    {{ isTrackTimeCurrent }}
                </div>
                <div ref="seekerContainer" class="w-full relative mt-2 mb-3" @mouseenter="isHover = true"
                    @mouseleave="isHover = false">
                    <input v-model="range" ref="seeker" type="range"
                        class="absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white">
                    <div class=" pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0"
                        :style="'width: ${range}%;'" :class="isHover ? 'bg-green-500' : 'bg-white'"></div>
                    <div class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full">
                    </div>
                </div>
                <div class="text-white text-[12px] pl-2 pt-[11px]">
                    {{ isTrackTimeTotal }}
                </div>
            </div>
        </div>

        <div class="flex items-center w-1/4 justify-end pr-10">
            <PlayerVolume />
        </div>
    </div>
</template>