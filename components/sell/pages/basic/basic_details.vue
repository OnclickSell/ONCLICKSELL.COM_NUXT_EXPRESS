<template>

  <div class='l-basic-info'>

      <div v-if="errors.any()" class="basic-input-errors">
          <p v-for="error in errors.all()">{{error}}</p>
      </div>

      <div class='basic-info__item basic-info__input' v-for="(input, index) in inputs">
          <label class="input_title">{{input.title}}</label>
          <os-input
            :data-vv-name="input.name"
            :data-vv-value-path="input.name"
            v-validate="input.rules"
            :InputHolder='input.placeholder' 
            :InputType="input.type"
            :InputName="input.name"
            :data="input.data"
            v-model="input.value"/>
      </div>


      <div class="l_input_buttons">
        <button class="input_buttons" @click="switch_page('os-frontend')">Next</button>
        <button class="input_buttons" @click="switch_page('os-basic-details')">Back</button>
      </div>


  </div>

</template>

<script>
import Explainer from '@/components/others/explainer'
import Input from '@/components/UI/sell/form/element'



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
            name: 'Project_type',
            type: 'dropdown',
            rules: 'required',
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
            name: 'Project_title',
            type: 'input',
            rules: 'required',
            title: 'Project Title',
            placeholder: 'Some Title',
            data: '',
            value: ''
          },
          {
            name: 'Project_summary',
            type: 'textarea',
            rules: 'required',
            title: 'Project Summary',
            placeholder: 'Project Summary',
            data: '',
            value: ''
          },
          {
            name: 'Project_description',
            type: 'textarea',
            rules: 'required',
            title: 'Project Description',
            placeholder: 'Put something in!',
            data: '',
            value: ''
          }
        ]
      }
  },
  components: {
    'os-input': Input
  },
  methods: {
    switch_page(page) {
      // this.$validator.validateAll().then((result) => {
      //   if(result)
          this.$emit('switched', {page: page, context: 'safsafsaf'})
      // })
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-basic-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    padding: 5px;
}

.basic-info__item {
   width: 80%;
   margin: auto;
}

.basic-info__input {
    margin-top: 10%;
}

.basic-info__textarea {
    margin-top: 20%;
}

.basic__info--explainer {
    margin-top: 20%;
}

.input_title {
  display: inline-block;
  padding: 10px 0px;
  @include workSans_light;
}


.l_input_buttons {
  width: 80%;
  margin: 20px 0;
}

.input_buttons {
  width: 100%;
  margin: 10px auto;
  background: #3dc053;
  color: #FFFFFF;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 12px;
}
</style>
