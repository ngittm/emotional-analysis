<!-- このコンポーネントは、ユーザーが感情分析を行いたいテキストを入力するためのフォームを提供します。
    submit関数が、入力されたテキストを親コンポーネント（InputView.vue）に送信するために使用されます。 -->

<script setup>
import { ref, defineEmits, computed } from "vue"
const loading = ref(false)
const MAX_LENGTH = 300
const rules = [
    (value) => !/[<>;]/.test(value) || "不正な文字が含まれています",
    (value) => value.length <= MAX_LENGTH || `$(MAX_LENGTH)文字以内で入力してください`,
    // ここに必須の入力項目のルールを追加してください。0か否かを判断する必要があります
]
const text = ref("")
const emit = defineEmits({"submit":(payload) => typeof payload === "string"})
const submit = () => {
    if(text.value) {
        loading.value = true
        // emit()でsubmitイベントを親にemitしてください.text.valueも送ってください
    } else {
        loading.value = false
    }
}
const btnDisabled = computed(() => {
    if(text.value) return false
    else return true
})
</script>

<template>
    <v-card class="pa-5">
        <v-textarea v-model="text" :rules="rules" label = "日記を300文字以内で入力してください" :counter="MAX_LENGTH" required/>
        <v-card-actions>
            <v-btn width="200" id="submit" @click="submit" :loading="loading" variant="outlined" :disabled="btnDisabled">送信</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style>
#submit{
    background-color: white;
    color:black;
}
#submit:hover{
    background-color: green;
    color:white
}
</style>