<!-- この画面では、ユーザーが感情分析を行いたいテキストを入力するフォーム(InputForm)が表示されます。
    ユーザーが入力を完了し、「送信」ボタンをクリックすると、submit関数が実行されます。
    この関数では、入力されたテキストをChatGPT APIに送信し、分析結果を取得します。
    取得した結果は、Piniaストアに保存され、結果表示画面（ResultView.vue）に遷移します。 -->

<script setup>
// こちらにInputFormをimportしてください
import axios from "axios"
import { useRouter } from "vue-router"
import {useStore} from '@/stores/store.js'

const router = useRouter()
const store = useStore()

const submit = async (text) => {
    const response = await callChatGPTAPI(text)
    store.setResponse(response)
    // 上記のstore.setResponseを参考に,storeにtextをセットしてください
    router.push({ name: "ResultView" })
}

async function callChatGPTAPI(text) {
    const apiUrl = process.env.VUE_APP_API_URL
    try {
        let response = await axios.post(apiUrl, { input: text })
        return response["data"]
    } catch (error) {
        // console.log()でerrorを表示してください
        return error
    }
}
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="8">
                <!-- 子コンポーネントを表示してください。また、子からのemit("submit")を v-onでハンドリングしてください -->
            </v-col>
        </v-row>
    </v-container>
</template>