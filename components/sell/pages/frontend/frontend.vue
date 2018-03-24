<template>
    <div>
        <div class='frontend'>
            

            <div class='backend__item fluid frontend__item--top-margin'><os-input-help/></div>
            <div class='frontend__item'>
              <p>Framework</p>
              <os-input
                 data-vv-name="framework"
                 v-validate="'required'"
                 :InputHolder='frontend_tehnologies.framework.title' 
                 InputType="dropdown"
                 InputName="project type"
                 :InputError="errors.first('framework')"
                 :tooltip="{position: 'top', distance: 35}"
                 :options="Framework"
                 v-model="Framework"/>
            </div>

            <div class='frontend__item'>
              <p>Framework Version</p>
              <os-input
                 :InputHolder='frontend_tehnologies.framework.version' 
                 InputType="dropdown"
                 InputName="project type"
                 :tooltip="{position: 'top', distance: 35}"
                 :options="FrameworkVersion"
                 v-model="FrameworkVersion"/>
            </div> 


                    
            <div class='frontend__item'>
                <p>Plateform</p>
                <os-input
                   data-vv-name="plateform"
                   v-validate="'required'"
                   :InputHolder='frontend_tehnologies.plateform.title' 
                   InputType="dropdown"
                   InputName="project type"
                   :InputError="errors.first('plateform')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="Plateform"
                   v-model="Plateform"/>
            </div>

            <div class='frontend__item'>
                <p>Plateform Version</p>
                <os-input
                   :InputHolder='frontend_tehnologies.plateform.version' 
                   InputType="dropdown"
                   InputName="project type"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="PlateformVersion"
                   v-model="PlateformVersion"/>
            </div>


            <div class='frontend__item'>
                <p>Third Party Libraries</p>
                <os-input
                   data-vv-name="libraries"
                   v-validate="'required'"
                   :InputHolder='frontend_tehnologies.libraries.title' 
                   InputType="dropdown"
                   InputName="project type"
                   :InputError="errors.first('libraries')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="Libraries"
                   v-model="Libraries"/>
            </div>

            <div class='frontend__item'>
                <p>Library's Version</p>
                <os-input
                   :InputHolder='frontend_tehnologies.libraries.version' 
                   InputType="dropdown"
                   InputName="libraries"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="LibrariesVersion"
                   v-model="LibrariesVersion"/>
            </div>


            <div class='frontend__item'>
                <p>HTML</p>
                <os-input
                   data-vv-name="html"
                   v-validate="'required'"
                   InputType="radio"
                   InputName="html"
                   :InputError="errors.first('html')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="HTML"
                   v-model="HTML"/>
            </div>
  
            <div class='frontend__item'>
                <p>CSS</p>
                <os-input
                   data-vv-name="css"
                   v-validate="'required'"
                   InputType="radio"
                   InputName="css"
                   :InputError="errors.first('css')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="CSS"
                   v-model="CSS"/>
            </div>
  
            <div class='frontend__item fluid'>
              <os-input
               InputHolder='NEXT' 
               InputType="button"
               v-on:clicked="switch_page('os-backend')"
               :tooltip="{position: 'top', distance: 100}"
               InputName="submit"/>

               <os-input
                 InputHolder='BACK' 
                 InputType="button"
                 v-on:clicked="switch_page('os-basic_details')"
                 :tooltip="{position: 'top', distance: 100}"
                 InputName="submit"/>
            </div>

          
        </div>
    
       
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'

export default {
  props: ['frontendContext'],
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      frontend_tehnologies: {
        framework: {
            value: '',
            title: ""
        },
        plateform: {
            value: 3,
            title: "Version"
        },
        libraries: {
            value: 3,
            title: "Third-Party-Library"
        },
        html: {
          checked: true
        },
        css: ''
      }
    }
  },
  methods: {
   switch_page(page) {
      this.$validator.validateAll().then((result) => {
        if(result)
          this.$emit('switched', {page: page, context: {frontend: this.frontend_tehnologies }})
      })
    }
  },
  components: {
    'os-input': Input,
    'os-explainer': Explainer
  },
  computed: {
    Framework: {
      get: function () {
        let Frameworks = []
        this.frontendContext.frontend.framework.map(framework => {
          Frameworks.push({
            title: framework.name, 
            value: framework.id,
            version: framework.version
          })
        })
        return Frameworks
      },
      set: function(value) {
        this.Framework.map(framework => {
          if (framework.value == value)
            this.frontend_tehnologies.framework = framework
        })
      }
    },
    FrameworkVersion: {
      get: function () {
        let FrameworkVersions = []
        this.Framework.map(framework => {
          if (framework.title == this.frontend_tehnologies.framework.title)
            FrameworkVersions.push({title: framework.version, value: framework.version})
        })
        return FrameworkVersions
      },
      set: function(value) {
        this.frontend_tehnologies.framework.version = value
      }
    },
    Plateform: {
      get: function () {
        let Plateforms = []
        this.frontendContext.frontend.plateform.map(plateform => {
          Plateforms.push({
            title: plateform.name, 
            value: plateform.id,
            version: plateform.version
          })
        })
        return Plateforms
      },
      set: function(value) {
        this.Plateform.map(plateform => {
          if (plateform.value == value)
            this.frontend_tehnologies.plateform = plateform
        })
      }
    },
    PlateformVersion: {
      get: function () {
        let PlateformVersions = []
        this.Plateform.map(plateform => {
          if (plateform.title == this.frontend_tehnologies.plateform.title)
            PlateformVersions.push({title: plateform.version, value: plateform.version})
        })
        return PlateformVersions
      },
      set: function(value) {
        this.frontend_tehnologies.plateform.version = value
      }
    },
    Libraries: {
      get: function () {
        let Libraries = []
        this.frontendContext.frontend.libraries.map(libraries => {
          Libraries.push({
            title: libraries.name,
            value: libraries.id,
            version: libraries.version
          })
        })
        return Libraries
      },
      set: function(value) {
        this.Libraries.map(libraries => {
          if (libraries.value == value)
            this.frontend_tehnologies.libraries = libraries
        })
      }
    },
    LibrariesVersion: {
      get: function () {
        let LibrariesVersions = []
        this.Libraries.map(libraries => {
          if (libraries.title == this.frontend_tehnologies.libraries.title)
            LibrariesVersions.push({title: libraries.version, value: libraries.version})
        })
        return LibrariesVersions
      },
      set: function(value) {
        this.frontend_tehnologies.libraries.version = value
      }
    },
    HTML: {
      get: function () {
        let HTML = []
        this.frontendContext.frontend.html.map(html => {
          HTML.push({
            title: html.version, 
            value: html.id,
            version: html.version,
            name: 'HTML',
            checked: false
          })
        })
        return HTML
      },
      set: function(value) {
        this.HTML.map(html => {
          if (html.value == value)
            this.frontend_tehnologies.html = html
        })
      }
    },
    CSS: {
      get: function () {
        let CSS = []
        this.frontendContext.frontend.css.map(css => {
          CSS.push({
            title: css.version, 
            value: css.id,
            version: css.version,
            name: 'CSS',
            checked: false
          })
        })
        return CSS
      },
      set: function(value) {
        this.CSS.map(css => {
          if (css.value == value)
            this.frontend_tehnologies.css = css
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>

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
