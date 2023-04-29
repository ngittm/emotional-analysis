<!-- この画面では、入力されたテキストと、感情分析の結果が表示されます。
    感情分析結果は、円グラフ（PieChartコンポーネント）として表示され、コメントも表示されます。
    結果がPiniaストアから読み取られ、画面に表示されます。 
-->


<script setup>
import PieChart from "@/components/PieChart.vue"
import FbComment from "@/components/FbComment.vue"
import {ref} from "vue"
import {useStore} from "@/stores/store"

const store=useStore()
let response = store.response
const text = store.text

const emotions = ref([])
const comment = ref()
const visible = ref(false)

visible.value = true
response = JSON.parse(response)
// console.log(response)でresponseの中身を見てみましょう
// 下のemotions.valueに足りていないものがあるので、追加してください
emotions.value = {
    "不安":response["anxiety"],
    "嫌悪":response["disgust"],
    "驚き":response["surprise"],
    "無関心":response["indifference"],
    "緊張":response["tension"],
    "恥ずかしさ":response["embrassment"],
}
comment.value = response["comment"]
// このコードだとresponseに上記のものが含まれていない場合、エラーになります
// 解消するにはf12で開発者ツールを開いてレスポンスを見る必要があります

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