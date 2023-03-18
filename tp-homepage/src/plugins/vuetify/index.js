import { createVuetify } from 'vuetify'
import defaults from './defaults'
// import { icons } from './icons'
import theme from './theme'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Styles
// import '../../@core/scss/libs/vuetify/index.scss'
import 'vuetify/styles'
export default createVuetify({
  defaults,
  components,
  directives,
  // icons,
  theme,
})
