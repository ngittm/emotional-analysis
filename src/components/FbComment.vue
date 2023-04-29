<!-- このコンポーネントは、入力されたテキストと感情分析結果のコメントを表示するカードを提供します。
プロパティで渡されたテキストとコメントが、それぞれv-card-textタグ内に表示されます。-->

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
<!-- propsのプロパティにアクセスして、マスタッシュ構文でテキスト展開してください。 -->
</template>