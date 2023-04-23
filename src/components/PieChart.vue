<script setup>
import { ref,defineProps } from "vue"
import { Chart } from "chart.js/auto"
import { Pie } from "vue-chartjs"

Chart.register()
const props = defineProps({"emotions":Object})
const chartOptions = ref({
    responsive:true,
})
const chartData = ref({
    labels: Object.keys(props["emotions"]),
    datasets:[
        {
            label:"あなたの感情割合",
            data:Object.values(props["emotions"]),
            backgroundColor:[
                "#FF6384",
                "#36A2EB",
                "#FF0000",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#808080",
                "#2EB82E",
                "#80BFFF",
            ],
        }
    ]
})
</script>

<template>
    <Pie :data="chartData" :options="chartOptions" />
</template>