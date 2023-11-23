import 'nprogress/nprogress.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupToasts } from './lib/toasts'
import setupIcons from './lib/fontawesome'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setupToasts(app)
setupIcons(app)

app.mount('#app')
