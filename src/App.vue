<!-- このコードは、アプリケーションのメインレイアウトを定義しています。アプリケーションには以下の3つの主要な部分が含まれています。

サイドナビゲーションドロワー（v-navigation-drawer）
アプリバー（v-app-bar）
メインコンテンツ領域（v-main）

サイドナビゲーションドロワー（v-navigation-drawer）
この部分は、アプリケーションのナビゲーションメニューを提供します。
drawerは、ドロワーが開いているか閉じているかを制御するrefです。v-model="drawer"を使って、ドロワーの状態と同期させています。
メニューアイテムは、items配列からループして生成されます。各アイテムのタイトル、リンク、サブタイトルは、v-forディレクティブでバインドされています。
navigateTo関数は、指定されたリンクに画面遷移し、ドロワーを閉じます。

アプリバー（v-app-bar）
この部分は、アプリケーションのヘッダーを提供します。
ヘッダーには、アイコン（v-app-bar-nav-icon）とタイトル（v-toolbar-title）が表示されます。
アイコンがクリックされると、ドロワーの状態が切り替わります。@click="drawer = !drawer"によって、ドロワーの開閉が制御されています。

メインコンテンツ領域（v-main）
この部分は、アプリケーションのメインコンテンツを表示する領域です。
メインコンテンツは、Vue Router を使用して制御され、<router-view/>タグで表示されます。アプリケーションの異なるページ（ビュー）が、この領域内で切り替わります。
このレイアウトは、アプリケーションの全体的な構造を定義し、ナビゲーション機能を提供しています。 -->

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