<script setup>
import PieChart from "@/components/PieChart.vue"
import FbComment from "@/components/FbComment.vue"
import {ref} from "vue"
import {useStore} from "vuex"

const store=useStore()
// vuexからの値読み出し
let response = store.state.response
const text = store.state.text

const emotions = ref([])
const comment = ref()
const visible = ref(false)

if(response != "error_code=1") {
    visible.value = true
    response = JSON.parse(response)
    emotions.value = {
        "喜び":response["joy"],
        "悲しみ":response["sadness"],
        "怒り":response["anger"],
        "不安":response["anxiety"],
        "嫌悪":response["disgust"],
        "驚き":response["surprise"],
        "無関心":response["indifference"],
        "緊張":response["tension"],
        "恥ずかしさ":response["embrassment"],
    }
    comment.value = response["comment"]
} else{
    comment.value = "あなたの文章からは感情を読み取ることができませんでした。再度入力してください。"
}
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="5">
                <PieChart v-if="visible" :emotions="emotions" />
            </v-col>
            <v-col cols="8">
                <FbComment :text="text" :comment="comment" />
            </v-col>
        </v-row>
    </v-container>
</template>