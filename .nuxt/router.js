import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2f86693c = () => import('..\\pages\\tickets\\index.vue' /* webpackChunkName: "pages_tickets_index" */).then(m => m.default || m)
const _783a3160 = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _cda27164 = () => import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages_subscription_index" */).then(m => m.default || m)
const _66b7052c = () => import('..\\pages\\purchase\\index.vue' /* webpackChunkName: "pages_purchase_index" */).then(m => m.default || m)
const _25234b60 = () => import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */).then(m => m.default || m)
const _2c8f4af0 = () => import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */).then(m => m.default || m)
const _23f4fef9 = () => import('..\\pages\\sell\\index.vue' /* webpackChunkName: "pages_sell_index" */).then(m => m.default || m)
const _a83b9602 = () => import('..\\pages\\subscription\\success.vue' /* webpackChunkName: "pages_subscription_success" */).then(m => m.default || m)
const _1a7adb5e = () => import('..\\pages\\sell\\front-end.vue' /* webpackChunkName: "pages_sell_front-end" */).then(m => m.default || m)
const _e47d3326 = () => import('..\\pages\\sell\\payment.vue' /* webpackChunkName: "pages_sell_payment" */).then(m => m.default || m)
const _5551358d = () => import('..\\pages\\test\\cookie.vue' /* webpackChunkName: "pages_test_cookie" */).then(m => m.default || m)
const _0213ca04 = () => import('..\\pages\\register\\preview.vue' /* webpackChunkName: "pages_register_preview" */).then(m => m.default || m)
const _09c5e7c4 = () => import('..\\pages\\sell\\back-end.vue' /* webpackChunkName: "pages_sell_back-end" */).then(m => m.default || m)
const _4c27765a = () => import('..\\pages\\sell\\technologies.vue' /* webpackChunkName: "pages_sell_technologies" */).then(m => m.default || m)
const _6c81e9c6 = () => import('..\\pages\\sell\\subscription.vue' /* webpackChunkName: "pages_sell_subscription" */).then(m => m.default || m)
const _5b17b6de = () => import('..\\pages\\sell\\plans.vue' /* webpackChunkName: "pages_sell_plans" */).then(m => m.default || m)
const _4670f42d = () => import('..\\pages\\sell\\pricing.vue' /* webpackChunkName: "pages_sell_pricing" */).then(m => m.default || m)
const _21e64bba = () => import('..\\pages\\sell\\code_sample.vue' /* webpackChunkName: "pages_sell_code_sample" */).then(m => m.default || m)
const _70320cfd = () => import('..\\pages\\listings\\_id\\_title.vue' /* webpackChunkName: "pages_listings__id__title" */).then(m => m.default || m)
const _63390b0a = () => import('..\\pages\\about_us\\index.vue' /* webpackChunkName: "pages_about_us_index" */).then(m => m.default || m)
const _e7b6f076 = () => import('..\\pages\\select_plan.vue' /* webpackChunkName: "pages_select_plan" */).then(m => m.default || m)
const _827bc46a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/tickets",
			component: _2f86693c,
			name: "tickets"
		},
		{
			path: "/login",
			component: _783a3160,
			name: "login"
		},
		{
			path: "/subscription",
			component: _cda27164,
			name: "subscription"
		},
		{
			path: "/purchase",
			component: _66b7052c,
			name: "purchase"
		},
		{
			path: "/profile",
			component: _25234b60,
			name: "profile"
		},
		{
			path: "/register",
			component: _2c8f4af0,
			name: "register"
		},
		{
			path: "/sell",
			component: _23f4fef9,
			name: "sell"
		},
		{
			path: "/subscription/success",
			component: _a83b9602,
			name: "subscription-success"
		},
		{
			path: "/sell/front-end",
			component: _1a7adb5e,
			name: "sell-front-end"
		},
		{
			path: "/sell/payment",
			component: _e47d3326,
			name: "sell-payment"
		},
		{
			path: "/test/cookie",
			component: _5551358d,
			name: "test-cookie"
		},
		{
			path: "/register/preview",
			component: _0213ca04,
			name: "register-preview"
		},
		{
			path: "/sell/back-end",
			component: _09c5e7c4,
			name: "sell-back-end"
		},
		{
			path: "/sell/technologies",
			component: _4c27765a,
			name: "sell-technologies"
		},
		{
			path: "/sell/subscription",
			component: _6c81e9c6,
			name: "sell-subscription"
		},
		{
			path: "/sell/plans",
			component: _5b17b6de,
			name: "sell-plans"
		},
		{
			path: "/sell/pricing",
			component: _4670f42d,
			name: "sell-pricing"
		},
		{
			path: "/sell/code:sample",
			component: _21e64bba,
			name: "sell-codesample"
		},
		{
			path: "/listings/:id?/:title?",
			component: _70320cfd,
			name: "listings-id-title"
		},
		{
			path: "/about:us",
			component: _63390b0a,
			name: "aboutus"
		},
		{
			path: "/select:plan",
			component: _e7b6f076,
			name: "selectplan"
		},
		{
			path: "/",
			component: _827bc46a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
