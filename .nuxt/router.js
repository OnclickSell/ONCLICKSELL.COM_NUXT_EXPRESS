import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _bfa868fc = () => import('..\\pages\\tickets\\index.vue' /* webpackChunkName: "pages_tickets_index" */).then(m => m.default || m)
const _45db6900 = () => import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */).then(m => m.default || m)
const _958a49a4 = () => import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages_subscription_index" */).then(m => m.default || m)
const _2fa95e68 = () => import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */).then(m => m.default || m)
const _1295814a = () => import('..\\pages\\purchase\\index.vue' /* webpackChunkName: "pages_purchase_index" */).then(m => m.default || m)
const _2baa8d00 = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _041e34f3 = () => import('..\\pages\\sell\\technologies.vue' /* webpackChunkName: "pages_sell_technologies" */).then(m => m.default || m)
const _e694b244 = () => import('..\\pages\\register\\preview.vue' /* webpackChunkName: "pages_register_preview" */).then(m => m.default || m)
const _158e5e42 = () => import('..\\pages\\subscription\\success.vue' /* webpackChunkName: "pages_subscription_success" */).then(m => m.default || m)
const _717c84a6 = () => import('..\\pages\\test\\cookie.vue' /* webpackChunkName: "pages_test_cookie" */).then(m => m.default || m)
const _8ceeae46 = () => import('..\\pages\\listings\\_id\\_title.vue' /* webpackChunkName: "pages_listings__id__title" */).then(m => m.default || m)
const _14547e5b = () => import('..\\pages\\about_us\\index.vue' /* webpackChunkName: "pages_about_us_index" */).then(m => m.default || m)
const _13f27ba5 = () => import('..\\pages\\select_plan.vue' /* webpackChunkName: "pages_select_plan" */).then(m => m.default || m)
const _34e70caa = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _bfa868fc,
			name: "tickets"
		},
		{
			path: "/profile",
			component: _45db6900,
			name: "profile"
		},
		{
			path: "/subscription",
			component: _958a49a4,
			name: "subscription"
		},
		{
			path: "/register",
			component: _2fa95e68,
			name: "register"
		},
		{
			path: "/purchase",
			component: _1295814a,
			name: "purchase"
		},
		{
			path: "/login",
			component: _2baa8d00,
			name: "login"
		},
		{
			path: "/sell/technologies",
			component: _041e34f3,
			name: "sell-technologies"
		},
		{
			path: "/register/preview",
			component: _e694b244,
			name: "register-preview"
		},
		{
			path: "/subscription/success",
			component: _158e5e42,
			name: "subscription-success"
		},
		{
			path: "/test/cookie",
			component: _717c84a6,
			name: "test-cookie"
		},
		{
			path: "/listings/:id?/:title?",
			component: _8ceeae46,
			name: "listings-id-title"
		},
		{
			path: "/about:us",
			component: _14547e5b,
			name: "aboutus"
		},
		{
			path: "/select:plan",
			component: _13f27ba5,
			name: "selectplan"
		},
		{
			path: "/",
			component: _34e70caa,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
