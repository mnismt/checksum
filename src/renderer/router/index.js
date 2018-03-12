import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (page) {
  return require(`@/pages/${page}`).default
}

export default new Router({
  routes: [
    { path: '/', component: load('index') }
  ]
})
