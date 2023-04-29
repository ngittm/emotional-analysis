// このファイルでは、Piniaを使用してアプリケーションの状態管理ストアが定義されています。
//ストアには、感情分析結果（response）と入力テキスト（text）が保存されています。
//また、setResponseとsetTextというアクションが定義されており、これらを使ってストアの状態を更新することができます。

import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "store",
    state: () => ({
        response: null,
        text: null,
    }),
    actions: {
        setResponse(response) {
            this.response = response;
        },
        setText(text) {
            this.text = text;
        },
    },
});
