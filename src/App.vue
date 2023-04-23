<script setup>
import "vuetify/dist/vuetify.min.css"
import { ref } from "vue"
import { useRouter } from "vue-router"
const drawer = ref(false)
const router = useRouter()
const items = [
  {title:"Home",link:{name:"InputView"},subtitle:"ホームへ戻ります"},
  {title:"Other",link:{name:"OtherView"},subtitle:"その他メニュー"},
]
const navigateTo = (link) => {
  router.push(link)
  drawer.value = false
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-subheader>MENU</v-list-subheader>
        <v-list-item v-for="item in items" :key="item.title" :title="item.title" :subtitle="item.subtitle"
        @click="navigateTo(item.link)" class="mt-3" />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>感情分析アプリケーション</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>