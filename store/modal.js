import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    showMemorialModal: false,
    hasSeenMemorialModal: false,
  }),

  actions: {
    initializeMemorialModal() {
      // Only run on client side
      if (typeof window !== "undefined") {
        const hasSeen = localStorage.getItem("hasSeenMemorialModal");
        this.hasSeenMemorialModal = hasSeen === "true";
        this.showMemorialModal = !this.hasSeenMemorialModal;
      }
    },

    closeMemorialModal() {
      this.showMemorialModal = false;
      this.hasSeenMemorialModal = true;

      if (typeof window !== "undefined") {
        localStorage.setItem("hasSeenMemorialModal", "true");
      }
    },

    resetMemorialModal() {
      this.showMemorialModal = false;
      this.hasSeenMemorialModal = false;

      if (typeof window !== "undefined") {
        localStorage.removeItem("hasSeenMemorialModal");
      }
    },
  },
});
