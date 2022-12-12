/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

// Components
import { VBtn } from 'vuetify/components'

export default createVuetify({
  blueprint: md3,
  aliases: {
    VBtnAlt: VBtn,
  },
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'black',
      height: 44,
      minWidth: 190,
    },
    VBtnAlt: {
      color: 'primary',
      height: 48,
      minWidth: 190,
      variant: 'outlined',
    },
  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    
  },
})
