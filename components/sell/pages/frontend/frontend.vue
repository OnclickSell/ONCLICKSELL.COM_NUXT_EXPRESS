<template>
   <div class='l-project'>

      <os-error-panel :show="inputErrors.length !== 0" class="l-project_errors">
          <p v-for="error in inputErrors" :key="error.field">{{error.error}}</p>
      </os-error-panel>

      <div class='project_items basic-info__input' v-for="(input, index) in inputs">
          <label class="project_items-titles">{{input.title}}</label>
          <os-input
            :data-vv-name="input.name"
            :data-vv-value-path="input.name"
            :InputHolder='input.placeholder' 
            :InputType="input.type"
            :InputName="input.name"
            :data="input.data"
            :error="isError(index)"
            v-on:input="(value) => {inputChangeHandler(value, index)}"/>
      </div>


      <div class="l-project_items-buttons">
        <button class="project_items-buttons" @click="switch_page('os-backend')">Next</button>
        <button class="project_items-buttons" @click="switch_page('os-basic-details')">Back</button>
      </div>


  </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'
import ErrorPanel from '@/components/UI/error/error_panel.vue'
import Mixins from '@/mixins/sell.js'

export default {
  methods: {
    check() {
      this.data['frontend'] = {}
      this.inputs.map(value => this.data.frontend[value.name] = value.value)
      // this.inputs = this.inputs.filter(item => item.title !== 'Framework Versions')
      // const value = this.inputs[0].value
      // switch(value.toUpperCase()) {
      //   case 'Frame'
      //   this.inputs.push({
      //       name: 'subType',
      //       type: 'dropdown',
      //       rules: [{name: 'required', value: ''}, {name: 'max', value: 10}],
      //       touched: false,
      //       title: 'Sub Type',
      //       placeholder: 'e.g Static',
      //       data: [
      //         {name: 'Website', value: 'Website', key: 1},
      //         {name: 'Web Application', value: 'Web Application', key: 2},
      //         {name: 'Static Website', value: 'Static Website', key: 3}
      //       ],
      //       value: ''
      //     })
      // }
    }
  },
  data () {
    return {
      inputs: [
          {
            name: 'plateform',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Plateform',
            placeholder: 'e.g JavaScript',
            data: '',
            value: ''
          },
          {
            name: 'plateform_v',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Plateform Versions',
            placeholder: '1.2.42.3',
            data: '',
            value: ''
          },
          {
            name: 'framework',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Framework',
            placeholder: 'e.g Angular',
            data: '',
            value: ''
          },
          {
            name: 'framework_v',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Framework Versions',
            placeholder: '1.2.3.2',
            data: '',
            value: ''
          },
          {
            name: 'hasLibrary',
            type: 'radio',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Do you have Library',
            placeholder: 'Axious',
            data: [
              {title: 'Yes', value: true, name: 'library', checked: true},
              {title: 'No', value: false, name: 'library'}
            ],
            value: ''
          },
          {
            name: 'libraries',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Thid-party-libraries',
            placeholder: 'Axious',
            data: [],
            value: ''
          },
          {
            name: 'html',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'HTML Version',
            placeholder: '1.2.3.2',
            data: [],
            value: ''
          },
          {
            name: 'css',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'CSS Version',
            placeholder: 'e.g CSS 3.1',
            data: [],
            value: ''
          }
        ]
    }
  },
  created() {
    const values = this.technologies.frontend
    this.inputs[0].data = values.plateform.map(value => ({name: value.name, value: value.name, key: value.id}))
    this.inputs[1].data = values.plateform.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[2].data = values.framework.map(value => ({name: value.name, value: value.name, key: value.id}))
    this.inputs[3].data = values.framework.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[5].data = values.libraries.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[6].data = values.html.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[7].data = values.css.map(value => ({name: value.version, value: value.version, key: value.id}))
  },
  components: {
    'os-input': Input,
    'os-error-panel': ErrorPanel
  },
  mixins: [Mixins]
}
</script>

<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';




.l-project {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    padding: 5px;

    @media screen and (min-width: 768px) {
      justify-content: space-between;
    }
}

.project_items {
   width: 80%;
   margin: auto;
   margin-top: 10%;
   @media screen and (min-width: 768px) {
      width: 40%;
    }
}




.project_items-titles {
  display: inline-block;
  padding: 10px 0px;
  @include workSans_light;
}

.l-project_items-buttons {
  width: 80%;
  margin: 10% auto 10% auto;
  @media screen and (min-width: 768px) {
      width: 90%;
  }
}

.project_items-buttons {
  width: 100%;
  margin: 10px 0;
  background: #3dc053;
  color: #FFFFFF;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 12px;

  @media screen and (min-width: 768px) {
      width: 40%;
      margin-left: auto;
      margin-right: 0;
      display: block;
  }
}


.l-project_errors {
  margin-top: 20%;
  width: 80%;
  margin: auto;
  @media screen and (min-width: 768px) {
      width: 90%;
  }
}

</style>
