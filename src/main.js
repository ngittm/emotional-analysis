import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router.js'
import { loadFonts } from './plugins/webfontloader'
import {createPinia} from 'pinia'

loadFonts()

const store = createPinia()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
