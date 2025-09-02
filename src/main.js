import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faCalendarCheck, faShieldAlt, faFlag, faBiohazard, faCar, faSeedling, faCamera, faCrown, faStar, faStarHalfAlt, faHashtag, faLightbulb, faMask, faUserShield, faRocket, faUserTie, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe, faCalendarCheck, faShieldAlt, faFlag, faBiohazard, faCar, faSeedling, faCamera, faCrown, faStar, faStarHalfAlt, faHashtag, faLightbulb, faMask, faUserShield, faRocket, faUserTie, faQuestionCircle, faDiscord)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
