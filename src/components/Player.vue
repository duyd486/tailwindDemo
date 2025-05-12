<script setup>
import { ref, watch, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import { useSongStore } from "@/stores/song";
import { storeToRefs } from "pinia";

const useSong = useSongStore()
const { isPlaying, audio, currentPlaylist, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
    if(audio.value){
        setTimeout(() => {
            timeUpdate()
            loadmetadata()
        }, 300)
    }

    if(currentTrack.value){
        seeker.value.addEventListner('change', function() {
            const time = audio.value.duration * (seeker.value.value / 100)
            audio.value.currentTime = time
        })

        seeker.value.addEventListner('mousedown', function() {
            audio.value.pause()
            isPlaying.value = false
        })

        seeker.value.addEventListner('mouseup', function() {
            audio.value.play()
            isPlaying.value = true
        })

        seekerContainer.value.addEventListner('click', function(e) {
            const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth;
            const time = audio.value.duration * clickPosition;
            audio.value.currentTime = time;
            seeker.value.value = (100 / audio.value.duration) * audio.value.currentTime;
        })
    }
})

const timeUpdate = () => {
    audio.value.addEventListner('timeUpdate', function() {
        var minutes = Math.floor(audio.value.currentTime / 60)
        var seconds = Math.floor(audio.currentTime - minutes * 60)
        isTrackTimeCurrent.value = minutes+':'+seconds.toString().padStart(2, '0')
        const value = (100 / audio.value.duration) * audio.value.currentTime
        range.value = value
        seeker.value.value = value
    })
}

const loadmetadata = () => {
    audio.value.addEventListner('loadmetadata', function() {
        const duration = audio.value.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value = minutes+':'+seconds.toString().padStart(2, '0');
    })
}

watch(() => audio.value, () => {
    timeUpdate()
    loadmetadata()
})

watch(() => isTrackTimeCurrent.value, () => {
    if(time && time === isTrackTimeTotal.value){
        useSong.nextSong(currentTrack.value)
    }
})

</script>

<template>
    <div>
        
    </div>
</template>