# 座学パート

## HelloWorld.vue
```vue:HelloWorld.vue
<script setup>
const message = 'Hello World'
</script>
 <template>
  <h1>{{ message }}</h1>
</template>
 <style>
h1{
  color:red;
}
</style>
```

## ディレクティブ
```vue:Vue3Directive.vue

<script setup>
import { ref, computed } from 'vue'

// 条件付きレンダリングのための ref を定義
const show = ref(true)

// リストレンダリングのための ref を定義
const items = ref(['Item 1', 'Item 2', 'Item 3'])

// 双方向データバインディングのための ref を定義
const newItem = ref('')

// イベントハンドリング: show の値を切り替える関数
const toggleShow = () => {
  show.value = !show.value
}

// イベントハンドリング: newItem の値を items に追加する関数
const addItem = () => {
  if (newItem.value.trim() !== '') {
    items.value.push(newItem.value)
    newItem.value = ''
  }
}
</script>
<template>
  <!-- 条件付きレンダリング: show の値が true の場合に表示 -->
  <div v-if="show">追加でリストの追加、切り替えで可視性が変わるよ!</div>

  <!-- リストレンダリング: items の各要素をリストに表示 -->
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>

  <!-- イベントハンドリング: ボタンをクリックすると toggleShow 関数が実行される -->
  <button @click="toggleShow">切り替え</button>

  <!-- 双方向データバインディング: input 要素と newItem 変数を同期させる -->
  <input v-model="newItem" />

  <!-- イベントハンドリング: ボタンをクリックすると addItem 関数が実行される -->
  <button @click="addItem">追加</button>
</template>
```

# 感情分析アプリ作成パート

## アプリの要件
- 短い時間でなるべくVueの基礎をおさえつつ実施できる
    - 画面数は少なくシンプルな構成に
- APIとのリクエスト/レスポンスは実施する
- ToDoList"以外"

## 感情分析アプリの画面
- テキスト入力画面　：　ユーザからの入力を受け付ける。適切にバリデーションを行う
- 結果表示画面　：　APIからのレスポンスを表示する。結果だけではなく、ユーザの入力も同時に表示する

## フォルダ構成

今回は以下のような構成になっています。  

どこまでコンポーネントを細かく設計するかですが、結論から言えばプロジェクトによります。  
例えば今回は「画面数を2にしてなるべくシンプルに」という要件に沿って、いたって標準的な構成にしました。
しかし状況によっては1コンポーネントをボタン1つ単位にすることもあるでしょうし、APIとのやりとりを行う
ロジックを別だしする用のフォルダを作ることも考えられます。

```
.
├── node_modules/　：　npmパッケージがインストールされるフォルダ。  
├── public/.　：　静的ファイルを格納するフォルダ。  
│   └── index.html ：　アプリケーションのエントリーポイント。   
├── src/.   
│   ├── assets/　：　静的なリソース（画像、フォント、スタイルなど）を格納。    
│   ├── components/　：　再利用可能なUIコンポーネントを格納。.vueの画面パーツはこちらに入れる。  
│   ├── plugins/　：　グローバルで使用するVue.jsプラグインを格納。   
│   ├── router/　：　Vue Routerの設定とルート定義を格納。   
│   ├── store/　：　Vuexのストアとモジュールを格納。    
│   ├── views/　：　router.jsに記載がある各ルートに対応するページコンポーネントを格納。   
│   ├── App.vue　：　アプリケーションのルートコンポーネント。   
│   └── main.js　：　Vueインスタンスの作成とマウント、その他パッケージの使用を宣言する。   
├── .env　：　環境変数を定義するファイル。今回はこちらにAPIのURLを記載する。   
├── .gitignore　：　Gitでバージョン管理から除外するファイルやフォルダを指定。   
├── .babel.config.js　：　Babelの設定ファイル。JSのトランスパイル設定を記述。   
├── jsconfig.json　：　JSプロジェクトの設定ファイル。パスエイリアスやエディタの設定を記述。   
├── package-lock.json　：　npmが自動的に生成するファイル、依存関係の詳細とバージョンを記述する。  
├── package.json　：　プロジェクトの設定ファイル、依存関係やスクリプトなどが記述される。   
├── README.md　：　プロジェクトの概要やセットアップ方法などが記載されたドキュメントファイル。   
└── vue.config.js　：　Vue CLIのプロジェクト設定ファイル。ビルドや開発サーバーの設定を記述する。   

```

## 今回触るフォルダとファイル

src/components
- InputForm.vue　：　テキストエリアとボタンからなる入力フォーム
- PieChart.vue　：　受け取ったデータをchart.jsの機能を使ってグラフィカルに表示する
- FbComment.vue　：　受け取ったデータ（FBコメント）を表示する

src/router
- router.js　：　vue-routerの設定ファイル。views内の画面コンポーネントを設定する

src/store
- store.js　：　vuexの設定ファイル

src/views
- InputView.vue　：　InputForm.vueからなる画面コンポーネント。APIとのやり取りとストア(vuex)への保存、ResultView.vueへの遷移まで行う
- ResultView.vue　：　PieChart.vueとFbComment.vueからなるコンポーネント。vuexからデータを取得して表示する
- OtherView　：　その他

src/App.vue
- アプリ共通で使用するナビゲーションドロワーを置く

src/main.js
- パッケージの使用を宣言する

.env
- APIのURLを記載する

