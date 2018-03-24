<template>
    <div>
        <div class='backend'>
    
            <div class='backend__item fluid backend__item--top-margin'><os-input-help/></div>
            <div class='backend__item'>
              <p>Framework</p>
              <os-input
                 data-vv-name="framework"
                 v-validate="'required'"
                 :InputHolder='backend_tehnologies.framework.title' 
                 InputType="dropdown"
                 InputName="project type"
                 :InputError="errors.first('framework')"
                 :tooltip="{position: 'top', distance: 35}"
                 :options="Framework"
                 v-model="Framework"/>
            </div>

            <div class='backend__item'>
              <p>Framework Version</p>
              <os-input
                 :InputHolder='backend_tehnologies.framework.version' 
                 InputType="dropdown"
                 InputName="project type"
                 :tooltip="{position: 'top', distance: 35}"
                 :options="FrameworkVersion"
                 v-model="FrameworkVersion"/>
            </div> 


                    
            <div class='backend__item'>
                <p>Plateform</p>
                <os-input
                   data-vv-name="plateform"
                   v-validate="'required'"
                   :InputHolder='backend_tehnologies.plateform.title' 
                   InputType="dropdown"
                   InputName="project type"
                   :InputError="errors.first('plateform')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="Plateform"
                   v-model="Plateform"/>
            </div>

            <div class='backend__item'>
                <p>Plateform Version</p>
                <os-input
                   :InputHolder='backend_tehnologies.plateform.version' 
                   InputType="dropdown"
                   InputName="project type"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="PlateformVersion"
                   v-model="PlateformVersion"/>
            </div>


          <!--   <div class='backend__item'>
                <p>Third Party Libraries</p>
                <os-input
                   data-vv-name="libraries"
                   v-validate="'required'"
                   :InputHolder='backend_tehnologies.libraries.title' 
                   InputType="dropdown"
                   InputName="project type"
                   :InputError="errors.first('libraries')"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="Libraries"
                   v-model="Libraries"/>
            </div>

            <div class='backend__item'>
                <p>Library's Version</p>
                <os-input
                   :InputHolder='backend_tehnologies.libraries.version' 
                   InputType="dropdown"
                   InputName="libraries"
                   :tooltip="{position: 'top', distance: 35}"
                   :options="LibrariesVersion"
                   v-model="LibrariesVersion"/>
            </div> -->

  
            <div class='backend__item fluid'>
              <os-input
               InputHolder='NEXT' 
               InputType="button"
               v-on:clicked="switch_page('os-screenshot')"
               :tooltip="{position: 'top', distance: 100}"
               InputName="submit"/>

               <os-input
                 InputHolder='BACK' 
                 InputType="button"
                 v-on:clicked="switch_page('os-frontend')"
                 :tooltip="{position: 'top', distance: 100}"
                 InputName="submit"/>
            </div>

          
        </div>

        </div>
    
       
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'

export default {
  props: ['backendContext'],
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      backend_tehnologies: {
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
          this.$emit('switched', {page: page, context: {backend: this.backend_tehnologies}})
      })
    }
  },
  computed: {
    Framework: {
      get: function () {
        let Frameworks = []
        this.backendContext.backend.framework.map(framework => {
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
            this.backend_tehnologies.framework = framework
        })
      }
    },
    FrameworkVersion: {
      get: function () {
        let FrameworkVersions = []
        this.Framework.map(framework => {
          if (framework.title == this.backend_tehnologies.framework.title)
            FrameworkVersions.push({title: framework.version, value: framework.version})
        })
        return FrameworkVersions
      },
      set: function(value) {
        this.backend_tehnologies.framework.version = value
      }
    },
    Plateform: {
      get: function () {
        let Plateforms = []
        this.backendContext.backend.plateform.map(plateform => {
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
            this.backend_tehnologies.plateform = plateform
        })
      }
    },
    PlateformVersion: {
      get: function () {
        let PlateformVersions = []
        this.Plateform.map(plateform => {
          if (plateform.title == this.backend_tehnologies.plateform.title)
            PlateformVersions.push({title: plateform.version, value: plateform.version})
        })
        return PlateformVersions
      },
      set: function(value) {
        this.backend_tehnologies.plateform.version = value
      }
    }
    // Libraries: {
    //   get: function () {
    //     let Libraries = []
    //     this.backendContext.backend.libraries.map(libraries => {
    //       Libraries.push({
    //         title: libraries.name,
    //         value: libraries.id,
    //         version: libraries.version
    //       })
    //     })
    //     return Libraries
    //   },
    //   set: function(value) {
    //     this.Libraries.map(libraries => {
    //       if (libraries.value == value)
    //         this.backend_tehnologies.libraries = libraries
    //     })
    //   }
    // },
    // LibrariesVersion: {
    //   get: function () {
    //     let LibrariesVersions = []
    //     this.Libraries.map(libraries => {
    //       if (libraries.title == this.backend_tehnologies.libraries.title)
    //         LibrariesVersions.push({title: libraries.version, value: libraries.version})
    //     })
    //     return LibrariesVersions
    //   },
    //   set: function(value) {
    //     this.backend_tehnologies.libraries.version = value
    //   }
    // },
  },
  components: {
    'os-input': Input,
    'os-explainer': Explainer
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
