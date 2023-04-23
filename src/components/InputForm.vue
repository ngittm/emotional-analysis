<script setup>
import { ref, defineEmits, computed } from "vue"
const loading = ref(false)
const MAX_LENGTH = 300
const rules = [
    (value) => !/[<>;]/.test(value) || "不正な文字が含まれています",
    (value) => value.length <= MAX_LENGTH || `$(MAX_LENGTH)文字以内で入力してください`,
    (value) => value.length != 0 || "必須の入力項目です"
]
const text = ref("")
const emit = defineEmits({"submit":(payload) => typeof payload === "string"})
const submit = () => {
    if(text.value) {
        loading.value = true
        emit("submit",text.value)
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