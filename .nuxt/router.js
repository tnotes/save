import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28efc57b = () => interopDefault(import('../client/pages/bai-viet-facebook/index.vue' /* webpackChunkName: "pages/bai-viet-facebook/index" */))
const _5b59dc62 = () => interopDefault(import('../client/pages/phan-loai-trang/index.vue' /* webpackChunkName: "pages/phan-loai-trang/index" */))
const _781fc488 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bai-viet-facebook",
    component: _28efc57b,
    name: "bai-viet-facebook"
  }, {
    path: "/phan-loai-trang",
    component: _5b59dc62,
    name: "phan-loai-trang"
  }, {
    path: "/",
    component: _781fc488,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
