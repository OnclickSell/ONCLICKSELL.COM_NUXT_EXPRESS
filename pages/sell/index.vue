<template>
    <div>

    
        <!-- <os-progress-bar step='1'>
            <h1 slot='title'>Bassic informatin about your listing</h1>
            <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
        </os-progress-bar> -->
        
       
        <keep-alive>

            <component 
              v-bind:is="current_page" 
              v-on:switched="switch_page"
              v-on:submit="submit"/>

        </keep-alive>

    </div>
</template>

<script>
import PrograssBar from '@/components/sell/Progress--bar.vue'
import BasicDetails from '@/components/sell/pages/basic/basic_details'
import Frontend from '@/components/sell/pages/frontend/frontend'
import Backend from '@/components/sell/pages/backend/backend'
import Screenshot from '@/components/sell/pages/screenshot/screenshot'
import Pricing from '@/components/sell/pages/pricing/pricing.vue'
import Subscription from '@/components/sell/pages/subscription/subscription'
import Payment from '@/components/sell/pages/payment/payment'
import Preview from '@/components/sell/pages/project_preview/index.vue'
import { mapGetters } from 'vuex'
import swal from 'sweetalert'

export default {
  layout: 'main--layout',
  head: {
    // script: [
    //   { src: 'https://js.stripe.com/v3/'}
    // ]
  },
  fetch({store}) {
    return store.dispatch('listings/FetchCreateListing')
  },
  data() {
      return {
        listing_details: {},
        pages: [
            'os-basic-details',
            'os-frontend',
            'os-backend',
            'os-screenshot',
            'os-pricing',
            'os-preview'
        ],
        current_page: 'os-basic-details'
      }
  },
  components: {
    'os-progress-bar': PrograssBar,
    'os-basic-details': BasicDetails,
    'os-frontend': Frontend,
    'os-backend': Backend,
    'os-screenshot': Screenshot,
    'os-pricing': Pricing,
    'os-subscription': Subscription,
    'os-payment': Payment,
    'os-preview': Preview
  },
  methods: {
    switch_page (value) {
        alert(value.page)
      this.listing_details = {...this.listing_details, ...value.context}
      this.current_page = value.page
    },
    submit() {
      const that = this
      const jsonData = JSON.stringify({...that.listing_details, screenshots: null})
      let form = this.listing_details.screenshots
      form.append('data', jsonData)
      this.$store.dispatch('listings/submit', form)
    }
  },
  beforeRouteLeave (to, from, next) {
     swal("By navigating away from this page all the data might be lost!", {
        buttons: {
          continue: "Continue Anyway",
          stay: "Stay"
        },
      })
      .then((value) => {
        switch (value) {
          case "continue":
            next()
            break
          case "stay":
            break
        }
      })
  },
  computed: {
    ...mapGetters({
      technologies: 'listings/getTechnologies'
    })
  },
  created() {
    // this.$bus.$on('project_done', () => this.submit)
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



</style>
