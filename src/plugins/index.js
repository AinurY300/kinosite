/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import vuerouter from'./vuerouter'
import pinia from './pinia'

export function registerPlugins (app) {
  loadFonts()
  app.use(vuetify)
  app.use(vuerouter)
  app.use(pinia)
}
