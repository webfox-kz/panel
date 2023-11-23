import type { App } from 'vue'
import 'vue-toastification/dist/index.css'
import Toast, { POSITION, type PluginOptions } from 'vue-toastification'

const options: PluginOptions = {
  hideProgressBar: true,
  position: POSITION.TOP_CENTER
}

export function setupToasts(app: App) {
  app.use(Toast, options)
}
