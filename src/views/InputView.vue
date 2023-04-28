<script setup>
import InputForm from "@/components/InputForm.vue"
import axios from "axios"
import { useRouter } from "vue-router"
import {useStore} from '@/stores/store.js'

const router = useRouter()
const store = useStore()

const submit = async (text) => {
    const response = await callChatGPTAPI(text)
    store.setResponse(response)
    store.setText(text)
    router.push({ name: "ResultView" })
}

async function callChatGPTAPI(text) {
    const apiUrl = process.env.VUE_APP_API_URL
    try {
        let response = await axios.post(apiUrl, { input: text })
        return response["data"]
    } catch (error) {
        console.log(error)
        return error
    }
}
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="8">
                <InputForm @submit="submit" />
            </v-col>
        </v-row>
    </v-container>
</template>