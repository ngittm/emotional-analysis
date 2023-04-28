import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "store",
    state: () => ({
        response: null,
        text: null,
    }),
    actions: {
        setResponse(response) {
            this.response = response;
        },
        setText(text) {
            this.text = text;
        },
    },
});
