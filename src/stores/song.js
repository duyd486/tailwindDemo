import { defineStore } from "pinia";
import Playlist from "@/components/Playlist.vue";

export const useSongStore = defineStore("song", {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentPlaylist: null,
    currentTrack: null,
  }),
  actions: {
    loadSong(playlist, track) {
      this.currentPlaylist = playlist;
      this.currentTrack = track;

      if (this.audio && this.audio.src) {
        this.audio.pause();
        this.isPlaying = false;
        this.audio.src = "";
      }

      this.audio = new Audio();
      this.audio.src = track.path;

      setTimeout(() => {
        this.isPlaying = true;
        this.audio.play();
      }, 200);
    },

    playOrPauseSong() {
      if (this.audio.paused) {
        this.isPlaying = true;
        this.audio.play();
      } else {
        this.isPlaying = false;
        this.audio.pause();
      }
    },

    playOrPauseThisSong(playlist, track) {
      if (!this.audio || !this.audio.src || this.currentTrack.id !== track.id) {
        this.loadSong(playlist, track);
        return;
      }
      this.playOrPauseSong();
    },

    prevSong(currentTrack) {
      let track = Playlist.tracks[currentTrack.id - 2];
      this.loadSong(Playlist, track);
    },

    nextSong(currentTrack) {
      if (currentTrack.id === Playlist.track.length) {
        this.loadSong(Playlist, Playlist.tracks[0]);
      } else {
        this.loadSong(Playlist, Playlist.tracks[currentTrack.id]);
      }
    },

    playFromFirst() {
      this.loadSong(Playlist, Playlist.tracks[0]);
    },

    resetState() {
      isPlaying = false;
      audio = null;
      currentPlaylist = null;
      currentTrack = null;
    },
  },
});
