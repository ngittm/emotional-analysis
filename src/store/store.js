import { createStore } from "vuex"
export default createStore({
    state: {
        response: null,
        text: null,
    },
    mutations: {
        setResponse(state, response) {
            state.response = response
        },
        setText(state, text) {
            state.text = text
        },
    },
    actions: {
        updateResponse({ commit }, response) {
            commit("setResponse", response)
        },
        updateText({ commit }, text) {
            commit("setText", text)
        },
    },
})