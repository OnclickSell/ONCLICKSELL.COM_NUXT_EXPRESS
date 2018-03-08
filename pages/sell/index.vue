<template>
    <div>

<<<<<<< HEAD
        <div class='l-basic-info'>

            <div class='basic-info__item'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>

            <div class='basic-info__item basic-info__input'>
                <os-input-help/>
                <os-input placeholder='Laravel 5.5.5 Full Api' title='Project title' v-model="basicInfo.title"/>
            </div>

            <div class='basic-info__item basic-info__textarea'>
                <os-input-help/>
                <os-textarea v-model="basicInfo.summary" title='Application  Description'/>
            </div>

            <div class='basic-info__item'>
                <button @click="next">safjsakf</button>
                <os-button title='NEXT' v-on:clicked="next"/>
            </div>

            <div class='basic-info__item basic-info__input--top-margin'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
            </div> 

        </div>
=======
    
        <!-- <os-progress-bar step='1'>
            <h1 slot='title'>Bassic informatin about your listing</h1>
            <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
        </os-progress-bar> -->

       <!--  <os-basic-details/>
        <os-frontend :context="technologies"/>
        <os-backend/>
        <os-screenshot/> -->

        
       
        <keep-alive>
            <component v-bind:is="current_page" 
            :frontendContext="technologies"
            :backendContext="technologies"
            v-on:switched="switch_page"
            v-on:submit="submit"
            />
        </keep-alive>

        <!-- <input type="text" v-model="test1" name="fsafs"/> -->
        <button @click="switch_page">Test switch</button>
>>>>>>> devlop
    </div>
</template>

<script>
import PrograssBar from '@/components/sell/Progress--bar.vue'
import BasicDetails from '@/components/sell/pages/basic_details'
import Frontend from '@/components/sell/pages/frontend'
import Backend from '@/components/sell/pages/backend'
import Screenshot from '@/components/sell/pages/screenshot'
import Pricing from '@/components/sell/pages/pricing'
import Subscription from '@/components/sell/pages/subscription'
import Payment from '@/components/sell/pages/payment'
import { mapGetters } from 'vuex'

export default {
  layout: 'main--layout',
  fetch({store}) {
    return store.dispatch('listings/fetchTechnologies')
  },
  data() {
      return {
        listing_details: {},
        pages: [
            'os-basic-details',
            'os-frontend',
            'os-backend',
            'os-screenshot'
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
    'os-payment': Payment
  },
  methods: {
    switch_page (value) {
        alert(value.page)
      this.listing_details = {...this.listing_details, ...value.context}
      this.current_page = value.page
    },
    submit(value) {
      this.listing_details = {...this.listing_details, ...value.context}
      this.$store.dispatch('listings/submit', this.listing_details.screenshot)
    }
  },
  computed: {
    ...mapGetters({
      technologies: 'listings/getTechnologies'
    })
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



</style>
