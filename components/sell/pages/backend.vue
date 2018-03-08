<template>
    <div>
        <div class='backend'>
    
            <div class='backend__item fluid backend__item--top-margin'><os-input-help/></div>
            <div class='backend__item'>
                <span>Backend Plateform</span>
                <os-input--drop-down item="name" :placeholder="backend_tehnologies.plateform.name" v-model="backend_tehnologies.plateform" :items="backendContext.backend.plateform"/>
            </div>

            <div class='backend__item'>
                <os-input--drop-down item="version" :placeholder="backend_tehnologies.plateform.version" v-model="set_plateform_version" :items="get_plateform_version"/>
            </div>

             <!-- <div class='backend__item fluid'>
                <os-input--checkbox v-model="added_technologies.framework" title='Have you used any framework?' :options="['Yes','No']"/>
            </div> -->

                    
            <div class='backend__item'>
                <span>Backend Framework</span>
                <os-input--drop-down item="name" :placeholder="backend_tehnologies.framework.name" v-model="backend_tehnologies.framework" :items="backendContext.backend.framework"/>
            </div>

            <div class='backend__item'>
                <os-input--drop-down  item="version" :placeholder="backend_tehnologies.framework.version" v-model="set_framework_version" :items="get_framework_version"/>
            </div>



           <!--  <div class='backend__item fluid'>
                <os-input--checkbox v-model="added_technologies.libraries" title='Have you used any third-party libraries?' :options="['Yes','No']"/>
            </div> -->

            <div class='backend__item'>
                <span>Third Party Libraries</span>
                <os-input--drop-down item="name" :placeholder="backend_tehnologies.libraries.name" v-model="backend_tehnologies.libraries" :items="backendContext.backend.libraries"/>
            </div>

            <div class='backend__item'>
                <os-input--drop-down item="version" :placeholder="backend_tehnologies.libraries.version" v-model="set_libraries_version" :items="get_libraries_version"/>
            </div>

             <div class='backend__item fluid'>
                <os-button v-on:clicked="switch_page('os-frontend')" title='PREVIOUS'/>
                <os-button v-on:clicked="switch_page('os-screenshot')" title='NEXT'/>
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

export default {
  props: ['backendContext'],
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      backend_tehnologies: {
        framework: {
            version: "Select Version",
            name: "Framework"
        },
        plateform: {
            name: "Select Framework",
            version: "Version"
        },
        libraries: {
            name: "Third-party Library",
            version: "Version"
        }
      }
    }
  },
  methods: {
    switch_page(page) {
      this.$emit('switched', {page: page, context: {backend: this.backend_tehnologies}})
    }
  },
  computed: {
    get_framework_version: {
      get: function() {
        let selectedVersions = []
        this.backendContext.backend.framework.map((value) => {
            if(this.backend_tehnologies.framework.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    set_framework_version: {
      get: function() {
        return this.backend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.backend_tehnologies.framework}
        new_value.version = value.version
        this.backend_tehnologies.framework = new_value
      }
    },
    set_plateform_version: {
      get: function() {
        return this.backend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.backend_tehnologies.plateform}
        new_value.version = value.version
        this.backend_tehnologies.plateform = new_value
      }
    },
     get_plateform_version: {
      get: function() {
        let selectedVersions = []
        this.backendContext.backend.plateform.map((value) => {
            if(this.backend_tehnologies.plateform.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    set_libraries_version: {
      get: function() {
        return this.backend_tehnologies
      },
      set: function (value) {
        let new_value = {...this.backend_tehnologies.libraries}
        new_value.version = value.version
        this.backend_tehnologies.libraries = new_value
      }
    },
     get_libraries_version: {
      get: function() {
        let selectedVersions = []
        this.backendContext.backend.framework.map((value) => {
            if(this.backend_tehnologies.libraries.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
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
    'os-input--checkbox': InputCheckbox
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




.backend {
    @include layout--container;
    width: 100%;
    padding: 20px;

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(3, 1);
    }
}

.backend__item {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    padding: 12px 8px;
    margin: 0;
}

.backend__item--float {
    width: layout--item--width(1, 12, true);
    margin: 0;

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
    }

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(2, 5, false);
    }
}

.backend__item--top-margin {
    margin-top: 10%;
}

</style>
