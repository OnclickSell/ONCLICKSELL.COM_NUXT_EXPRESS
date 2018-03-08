<template>
    <div>
        <div class='frontend'>
            

            <div class='backend__item fluid frontend__item--top-margin'><os-input-help/></div>
            <div class='frontend__item'>
                <h1>Front-end Plateform</h1>
                <os-input--drop-down item="name" :placeholder="frontend_tehnologies.plateform.name" v-model="frontend_tehnologies.plateform" :items="frontendContext.frontend.plateform"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down item="version" :placeholder="frontend_tehnologies.plateform.version" v-model="set_plateform_version" :items="get_plateform_version"/>
            </div>


           <!--  <div class='frontend__item fluid'>
                <os-input--checkbox v-model="added_technologies.framework" title='Have you used any framework?' :options="['Yes', 'No']"/>
            </div> -->

                    
            <div class='frontend__item'>
                <h1>Front-end Framework</h1>
                <os-input--drop-down item="name" :placeholder="frontend_tehnologies.framework.name" v-model="frontend_tehnologies.framework" :items="frontendContext.frontend.framework"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down  item="version" :placeholder="frontend_tehnologies.framework.version" v-model="set_framework_version" :items="get_framework_version"/>
            </div>



            <!-- <div class='frontend__item fluid'>
                <os-input--checkbox v-model="added_technologies.libraries" title='Have you used any third-party libraries?' :options="['Yes', 'No']"/>
            </div> -->

            <div class='frontend__item'>
                <h1>Third Pary Libraries</h1>
                <os-input--drop-down  item="name" :placeholder="frontend_tehnologies.libraries.name" v-model="frontend_tehnologies.libraries" :items="frontendContext.frontend.libraries"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down  item="version" :placeholder="frontend_tehnologies.libraries.version" v-model="set_libraries_version" :items="get_libraries_version"/>
            </div>


            <!-- <div class='frontend__item fluid'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='frontend__item fluid'>
                <os-input placeholder="title" />
            </div> -->

            <div class='frontend__item frontend__item--float'>
                <os-input--checkbox v-model="frontend_tehnologies.css" title='What version of  HTML is used in this app?' :options="get_css"/>
            </div>
  
            <div class='frontend__item frontend__item--float'>
                <os-input--checkbox v-model="frontend_tehnologies.html" title='What version of  HTML is used in this app?' :options="get_html"/>
            </div>
  
            <div class='frontend__item fluid'>
                <os-button v-on:clicked="switch_page('os-basic-details')" title='PREVIOUS'/>
                <os-button v-on:clicked="switch_page('os-backend')" title='NEXT'/>
            </div>

            <div class='frontend__item fluid'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
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
  props: ['frontendContext'],
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      frontend_tehnologies: {
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
        },
        html: '',
        css: ''
      }
    }
  },
  methods: {
   switch_page(page) {
      this.$emit('switched', {page: page, context: {frontend: this.frontend_tehnologies }})
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
  },
  computed: {
    get_framework_version: {
      get: function() {
        let selectedVersions = []
        this.frontendContext.frontend.framework.map((value) => {
            if(this.frontend_tehnologies.framework.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
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
        this.frontendContext.frontend.plateform.map((value) => {
            if(this.frontend_tehnologies.plateform.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
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
        this.frontendContext.frontend.framework.map((value) => {
            if(this.frontend_tehnologies.libraries.name === value.name) {
              selectedVersions.push({version: value.version})
            }
        })
        return selectedVersions
      }
    },
    get_html() {
      let html_versions = []
      this.frontendContext.frontend.html.map((item) => {
          html_versions.push(item.version)
      })
      return html_versions
    },
    get_css() {
      let css_versions = []
      this.frontendContext.frontend.css.map((item) => {
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
