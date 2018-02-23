<template>
    <div>
        <div class='frontend'>
            <div class='frontend__item fluid'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>

            <div class='backend__item fluid frontend__item--top-margin'><os-input-help/></div>
            <div class='frontend__item'>
                <os-input--drop-down item="name" v-if="added_technologies.plateform !== 'false'" :placeholder="frontend_tehnologies.plateform.name" v-model="setPlateform" :items="technologies.frontend.plateform"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down item="version" v-if="added_technologies.plateform !== 'false'" :placeholder="frontend_tehnologies.plateform.version" v-model="set_plateform_version" :items="get_plateform_version"/>
            </div>

            <!-- <div class='backend__item fluid'><os-input-help/></div> -->
            <div class='frontend__item fluid'>
                <os-input--checkbox v-model="added_technologies.framework" title='Have you used any framework?' :options="[{title: 'Yes', value: true}, {title: 'No', value: false}]"/>
            </div>

                    
            <div class='frontend__item'>
                <os-input--drop-down v-if="added_technologies.framework !== 'false'" item="name" :placeholder="frontend_tehnologies.framework.name" v-model="setFramework" :items="technologies.frontend.framework"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down v-if="added_technologies.framework !== 'false'" item="version" :placeholder="frontend_tehnologies.framework.version" v-model="set_framework_version" :items="get_framework_version"/>
            </div>



            <div class='frontend__item fluid'>
                <os-input--checkbox v-model="added_technologies.libraries" title='Have you used any third-party libraries?' :options="[{title: 'Yes', value: true}, {title: 'No', value: false}]"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down v-if="added_technologies.libraries !== 'false'" item="name" :placeholder="frontend_tehnologies.libraries.name" v-model="setLibraries" :items="technologies.frontend.framework"/>
            </div>

            <div class='frontend__item'>
                <os-input--drop-down v-if="added_technologies.libraries !== 'false'" item="version" :placeholder="frontend_tehnologies.libraries.version" v-model="set_libraries_version" :items="get_libraries_version"/>
            </div>


            <!-- <div class='frontend__item fluid'>
                <os-input--drop-down placeholder="plateform" :items="['PHP', 'ASP.NET', 'Node.js']"/>
            </div>

            <div class='frontend__item fluid'>
                <os-input placeholder="title" />
            </div> -->

            <div class='frontend__item frontend__item--float'>
                <os-input--checkbox title='What version of  HTML is used in this app?' :options="['HTML 3.2', 'HTML 4.01', 'XHTML', 'HTML5']"/>
            </div>
  
            <div class='frontend__item frontend__item--float'>
                <os-input--checkbox title='What version of  HTML is used in this app?' :options="['HTML 3.2', 'HTML 4.01', 'XHTML', 'HTML5']"/>
            </div>
  
            <div class='frontend__item fluid'>
                <os-button title='NEXT'/>
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
import PrograssBar from '@/components/sell/Progress--bar.vue'
import Input from '@/components/sell/input.vue'
import Textarea from '@/components/sell/textarea.vue'
import Button from '@/components/sell/button.vue'
import InputHelp from '@/components/sell/input--help.vue'
import Plan from '@/components/sell/plan.vue'
import DropDown from '@/components/sell/input--drop-down.vue'
import InputCheckbox from '@/components/sell/input--checkbox.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  fetch({store}) {
    return store.dispatch('listings/fetchTechnologies')
  },
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      added_technologies: {
          plateform: true,
          framework: true,
          libraries: true
      },
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
        }
      }
    }
  },
  methods: {
  },
  components: {
    'os-progress-bar': PrograssBar,
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
