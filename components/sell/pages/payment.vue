<template>
    <div>
        <div class='frontend'>

            <div class='backend__item fluid frontend__item--top-margin'><os-input-help/></div>
          

            <div class='frontend__item frontend__item--float'>
               <os-stripe--input v-on:createToken="storeToken"></os-stripe--input>
            </div>

            <div class='frontend__item'>
                <os-button v-on:clicked="switch_page('os-subscription')" title='PREVIOUS'/>
                <os-button v-on:clicked="switch_page('os-payment')" title='NEXT'/>
                <os-button v-on:clicked="submit" title='Create Listing'/>
            </div>

  
        </div>
    
       
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/sell/input.vue'
import Textarea from '@/components/sell/textarea.vue'
import Button from '@/components/sell/button.vue'
import InputHelp from '@/components/sell/input--help.vue'
import Plan from '@/components/sell/plan.vue'
import DropDown from '@/components/sell/input--drop-down.vue'
import InputCheckbox from '@/components/sell/input--checkbox.vue'
import StripeInput from '@/components/payment/stripe--input.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'




export default {
//   head: {
//     script: [
//       { src: 'https://js.stripe.com/v3/'}
//     ]
//   },
  layout: 'main--layout',
  fetch({store}) {
    return store.dispatch('listings/fetchTechnologies')
  },
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      paymentDetails: {
        token: ''
      }
    }
  },
  mounted() {
  },
  methods: {
    switch_page(page) {
      this.$emit('switched', {page: page, context: {payment: this.paymentDetails.token }})
    },
    submit() {
      this.$emit('submit', {context: {payment: this.paymentDetails.token }})
    },
    storeToken(token) {
      this.paymentDetails.token = token
    }
  },
  components: {
    'os-input': Input,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-explainer': Explainer,
    'os-input-help': InputHelp,
    'os-plan': Plan,
    'os-input--drop-down': DropDown,
    'os-input--checkbox': InputCheckbox,
    'os-stripe--input': StripeInput
  },
  computed: {
    ...mapGetters({
      technologies: 'listings/getTechnologies'
    }),
    get_framework_version: {
      get: function() {
        let selectedVersions = []
        this.technologies.frontend.framework.map((value) => {
            if(this.frontend_tehnologies.framework.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    setFramework: {
      get: function() {
        return this.frontend_tehnologies
      },
      set: function (value) {
        this.frontend_tehnologies.framework = value
      }
    },
    set_framework_version: {
      get: function() {
        return this.frontend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.frontend_tehnologies.framework}
        new_value.version = value.version
        this.frontend_tehnologies.framework = new_value
      }
    },
    setPlateform: {
      get: function() {
        return this.frontend_tehnologies.plateform
    },
      set: function (value) {
        this.frontend_tehnologies.plateform = value
      }
    },
    set_plateform_version: {
      get: function() {
        return this.frontend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.frontend_tehnologies.plateform}
        new_value.version = value.version
        this.frontend_tehnologies.plateform = new_value
      }
    },
     get_plateform_version: {
      get: function() {
        let selectedVersions = []
        this.technologies.frontend.plateform.map((value) => {
            if(this.frontend_tehnologies.plateform.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    setLibraries: {
      get: function() {
        return this.frontend_tehnologies.libraries
    },
      set: function (value) {
        this.frontend_tehnologies.libraries = value
      }
    },
    set_libraries_version: {
      get: function() {
        return this.frontend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.frontend_tehnologies.libraries}
        new_value.version = value.version
        this.frontend_tehnologies.libraries = new_value
      }
    },
    get_libraries_version: {
      get: function() {
        let selectedVersions = []
        this.technologies.frontend.framework.map((value) => {
            if(this.frontend_tehnologies.libraries.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    get_html() {
      let html_versions = []
      this.technologies.frontend.html.map((item) => {
          html_versions.push(item.version)
      })
      return html_versions
    },
    get_css() {
      let css_versions = []
      this.technologies.frontend.css.map((item) => {
          css_versions.push(item.version)
      })
      return css_versions
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




.frontend {
    @include layout--container;
    width: 100%;
    padding: 20px;

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(3, 1);
    }
}

.frontend__item {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    padding: 12px 8px;
    margin: 0;
}

.frontend__item--float {
    width: layout--item--width(1, 12, true);
    margin: 0;

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
    }

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(2, 5, false);
    }
}

.frontend__item--top-margin {
    margin-top: 10%;
}

</style>
