<script setup>
import { defineProps } from "vue"
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <v-card variant="outlined" class="pa-1">
        <v-card-item>
            <v-card-title>あなたの入力した文章</v-card-title>
            <v-card-text>{{ props["text"] }}</v-card-text>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-item>
            <v-card-title>コメント</v-card-title>
            <v-card-text>{{ props["comment"] }}</v-card-text>
        </v-card-item>
    </v-card>
</template>