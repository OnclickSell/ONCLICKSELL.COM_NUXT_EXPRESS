import Vue from 'vue'
import Hamburger from '~/assets/icons/hamburger.vue'
import Eye from '~/assets/icons/eye.vue'
import Filter from '~/assets/icons/filter.vue'
import Rating from '~/assets/icons/rating.vue'
import Heart from '~/assets/icons/heart.vue'
// import VueEventBus from 'vue-event-bus'

// Registering global icons
Vue.component('os-filter', Filter)
Vue.component('os-hamburger', Hamburger)
Vue.component('os-eye', Eye)
Vue.component('os-rating', Rating)
Vue.component('os-heart', Heart)
Vue.component('os-filter')

// Event bus
// Vue.use(VueEventBus)
