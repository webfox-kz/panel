import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faArrowRightFromBracket, faImage } from '@fortawesome/free-solid-svg-icons'

const icons = [faUser, faArrowRightFromBracket, faImage]

icons.forEach((icon) => {
  library.add(icon)
})

function setupIcons(app: App) {
  app.component('f-icon', FontAwesomeIcon)
}

export default setupIcons
