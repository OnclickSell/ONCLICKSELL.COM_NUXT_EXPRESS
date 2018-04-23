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
        <button class="project_items-buttons" @click="switch_page('os-pricing')">Next</button>
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
      this.data['backend'] = {}
      this.inputs.map(value => this.data.backend[value.name] = value.value)
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
        ]
    }
  },
  components: {
    'os-input': Input,
    'os-error-panel': ErrorPanel
  },
  created() {
    const values = this.technologies.backend
    this.inputs[0].data = values.plateform.map(value => ({name: value.name, value: value.name, key: value.id}))
    this.inputs[1].data = values.plateform.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[2].data = values.framework.map(value => ({name: value.name, value: value.name, key: value.id}))
    this.inputs[3].data = values.framework.map(value => ({name: value.version, value: value.version, key: value.id}))
    this.inputs[5].data = values.framework.map(value => ({name: value.version, value: value.version, key: value.id}))
  },
  mixins: [Mixins]
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';




.l-project {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    padding: 5px;
}

.project_items {
   width: 80%;
   margin: auto;
   margin-top: 10%;
}




.project_items-titles {
  display: inline-block;
  padding: 10px 0px;
  @include workSans_light;
}

.l-project_items-buttons {
  width: 80%;
  margin: 10% auto 10% auto;
}

.project_items-buttons {
  width: 100%;
  margin: 10px auto;
  background: #3dc053;
  color: #FFFFFF;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 12px;
}


.l-project_errors {
  margin-top: 10%;
  width: 80%;
}

</style>
