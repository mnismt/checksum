import Vue from 'vue'

import App from './App'
import router from './router'
import Vuetify from 'vuetify'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
