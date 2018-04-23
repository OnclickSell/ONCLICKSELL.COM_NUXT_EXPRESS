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
        <button class="project_items-buttons" @click="switch_page('os-frontend')">Next</button>
        <button class="project_items-buttons" @click="switch_page('os-basic-details')">Back</button>
      </div>


  </div>

</template>

<script>
import Explainer from '@/components/others/explainer'
import Input from '@/components/UI/sell/form/element'
import ErrorPanel from '@/components/UI/error/error_panel.vue'
import Mixins from '@/mixins/sell.js'


export default {
  layout: 'main--layout',
  data() {
      return {
        basicInfo: {
          type: 'Website',
          subType: '',
          title: '',
          summary: '',
          description: ''
        },
        inputs: [
          {
            name: 'type',
            type: 'dropdown',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Project Type',
            placeholder: 'Project Type',
            data: [
              {name: 'Website', value: 'Website', key: 1},
              {name: 'Web Application', value: 'Web Application', key: 2},
              {name: 'Static Website', value: 'Static Website', key: 3}
            ],
            value: ''
          },
          {
            name: 'title',
            type: 'input',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Project Title',
            placeholder: 'Some Title',
            data: '',
            value: ''
          },
          {
            name: 'summary',
            type: 'textarea',
            rules: [{name: 'required', value: ''}, {name: 'min', value: 10}],
            touched: false,
            title: 'Project Summary',
            placeholder: 'Project Summary',
            data: '',
            value: ''
          },
          {
            name: 'description',
            type: 'textarea',
            rules: [{name: 'required', value: ''}, {name: 'max', value: 10}],
            touched: false,
            title: 'Project Description',
            placeholder: 'Put something in!',
            data: '',
            value: ''
          }
        ]
      }
  },
  components: {
    'os-input': Input,
    'os-error-panel': ErrorPanel
  },
  methods: {
    check() {
      this.inputs.map(value => this.data[value.name] = value.value)
      // this.inputs = this.inputs.filter(item => item.title !== 'Sub Type')
      // const value = this.inputs[0].value
      // const oldValue = {...this.inputs[0]}
      // if (value.toUpperCase() === 'WEBSITE')
      //   this.inputs = this.inputs.splice(0, 1, oldValue, {
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
    }
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
