import { defineStore } from "pinia";
import { ref } from "vue";

export const useViewStore = defineStore("view", {
  state: () => ({
    currentComponent: "HomePage",
    selected: null,
    playlistData: null,
    userData: null,
  }),

  actions: {
    setComponent(name) {
      this.currentComponent = name;
    },
    selectItem(item) {
      this.selected = item;
    },
    setPlaylistData(playlist){
      this.playlistData = playlist;
    },
  },
});
