import { defineStore } from "pinia";

export const useViewStore = defineStore("view", {
  state: () => ({
    currentComponent: "HomeComponent",
  }),

  actions: {
    setComponent(name) {
      this.currentComponent = name;
    },
  },
});
