/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '../main.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme'),
    themes: {
      dark: {
        colors: {
          primary: '#1B1BB3'
        }
      },
      light: {
        colors: {
          primary: '#1B1BB3',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})