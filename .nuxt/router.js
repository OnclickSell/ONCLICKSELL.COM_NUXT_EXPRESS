import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _bfa868fc = () => import('..\\pages\\tickets\\index.vue' /* webpackChunkName: "pages_tickets_index" */).then(m => m.default || m)
const _2baa8d00 = () => import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */).then(m => m.default || m)
const _958a49a4 = () => import('..\\pages\\subscription\\index.vue' /* webpackChunkName: "pages_subscription_index" */).then(m => m.default || m)
const _1295814a = () => import('..\\pages\\purchase\\index.vue' /* webpackChunkName: "pages_purchase_index" */).then(m => m.default || m)
const _45db6900 = () => import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */).then(m => m.default || m)
const _2fa95e68 = () => import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */).then(m => m.default || m)
const _a87a1a4e = () => import('..\\pages\\sell\\index.vue' /* webpackChunkName: "pages_sell_index" */).then(m => m.default || m)
const _158e5e42 = () => import('..\\pages\\subscription\\success.vue' /* webpackChunkName: "pages_subscription_success" */).then(m => m.default || m)
const _606bdf3e = () => import('..\\pages\\sell\\front-end.vue' /* webpackChunkName: "pages_sell_front-end" */).then(m => m.default || m)
const _59e1e24d = () => import('..\\pages\\sell\\payment.vue' /* webpackChunkName: "pages_sell_payment" */).then(m => m.default || m)
const _717c84a6 = () => import('..\\pages\\test\\cookie.vue' /* webpackChunkName: "pages_test_cookie" */).then(m => m.default || m)
const _e694b244 = () => import('..\\pages\\register\\preview.vue' /* webpackChunkName: "pages_register_preview" */).then(m => m.default || m)
const _99e7e784 = () => import('..\\pages\\sell\\back-end.vue' /* webpackChunkName: "pages_sell_back-end" */).then(m => m.default || m)
const _041e34f3 = () => import('..\\pages\\sell\\technologies.vue' /* webpackChunkName: "pages_sell_technologies" */).then(m => m.default || m)
const _d2984c34 = () => import('..\\pages\\sell\\subscription.vue' /* webpackChunkName: "pages_sell_subscription" */).then(m => m.default || m)
const _5a421871 = () => import('..\\pages\\sell\\plans.vue' /* webpackChunkName: "pages_sell_plans" */).then(m => m.default || m)
const _1291700d = () => import('..\\pages\\sell\\pricing.vue' /* webpackChunkName: "pages_sell_pricing" */).then(m => m.default || m)
const _7ccc6603 = () => import('..\\pages\\sell\\code_sample.vue' /* webpackChunkName: "pages_sell_code_sample" */).then(m => m.default || m)
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
			path: "/login",
			component: _2baa8d00,
			name: "login"
		},
		{
			path: "/subscription",
			component: _958a49a4,
			name: "subscription"
		},
		{
			path: "/purchase",
			component: _1295814a,
			name: "purchase"
		},
		{
			path: "/profile",
			component: _45db6900,
			name: "profile"
		},
		{
			path: "/register",
			component: _2fa95e68,
			name: "register"
		},
		{
			path: "/sell",
			component: _a87a1a4e,
			name: "sell"
		},
		{
			path: "/subscription/success",
			component: _158e5e42,
			name: "subscription-success"
		},
		{
			path: "/sell/front-end",
			component: _606bdf3e,
			name: "sell-front-end"
		},
		{
			path: "/sell/payment",
			component: _59e1e24d,
			name: "sell-payment"
		},
		{
			path: "/test/cookie",
			component: _717c84a6,
			name: "test-cookie"
		},
		{
			path: "/register/preview",
			component: _e694b244,
			name: "register-preview"
		},
		{
			path: "/sell/back-end",
			component: _99e7e784,
			name: "sell-back-end"
		},
		{
			path: "/sell/technologies",
			component: _041e34f3,
			name: "sell-technologies"
		},
		{
			path: "/sell/subscription",
			component: _d2984c34,
			name: "sell-subscription"
		},
		{
			path: "/sell/plans",
			component: _5a421871,
			name: "sell-plans"
		},
		{
			path: "/sell/pricing",
			component: _1291700d,
			name: "sell-pricing"
		},
		{
			path: "/sell/code:sample",
			component: _7ccc6603,
			name: "sell-codesample"
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
