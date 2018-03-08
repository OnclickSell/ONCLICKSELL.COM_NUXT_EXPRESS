<template>
    <div>

        <div class='l-basic-info'>


            <os-input--drop-down placeholder="Project Type" v-model="set_project_type" item="type" :items="project_type"/>

            <os-input--drop-down v-if="project_sub_type"  v-model="set_project_sub_type" placeholder="Sub Type" item="type" :items="project_sub_type"/>

            <div class='basic-info__item basic-info__input'>
                <os-input-help/>
                <os-input placeholder='Laravel 5.5.5 Full Api' title='Project title' v-model="basicInfo.title"/>
            </div>

             <div class='basic-info__item basic-info__textarea'>
                <os-input-help/>
                <os-textarea v-model="basicInfo.summary" title='Project Summary'/>
            </div>

            <div class='basic-info__item basic-info__textarea'>
                <os-input-help/>
                <os-textarea v-model="basicInfo.description" title='Project Description'/>
            </div>

            <div class='basic-info__item'>
                <os-button title='BACK' v-on:clicked="switch_page('os-basic-details')"/>
                <os-button title='NEXT' v-on:clicked="switch_page('os-frontend')"/>
            </div>

            <div class='basic-info__item basic-info__input--top-margin'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
            </div> 

        </div>
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer'
import Input from '@/components/sell/input'
import Textarea from '@/components/sell/textarea'
import Button from '@/components/sell/button'
import InputHelp from '@/components/sell/input--help'
import DropDown from '@/components/sell/input--drop-down'

export default {
  layout: 'main--layout',
  data() {
      return {
        project_type: [
          {type: 'Web Application', subType: ''},
          {type: 'Website', subType: [{type: 'Static'}, {type: 'Dynamic'}]},
          {type: 'E-commerce', subType: ''}
        ],
        project_sub_type: '',
        basicInfo: {
          type: '',
          subType: '',
          title: '',
          summary: '',
          description: ''
        }
      }
  },
  components: {
    'os-input': Input,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-explainer': Explainer,
    'os-input-help': InputHelp,
    'os-input--drop-down': DropDown
  },
  methods: {
    switch_page(page) {
      this.$emit('switched', {page: page, context: this.basicInfo})
    }
  },
  computed: {
    set_project_type: {
      set: function (newValue) {
        let subType
        this.project_type.map(type => {
          if (type === newValue)
            subType = type.subType
        })

        if(!subType == '')
          this.project_sub_type = subType

        else 
          this.project_sub_type = ''
        

        this.basicInfo.type = newValue.type
      },
      get: function (value) {
        this.basicInfo.type
      }
    },
    set_project_sub_type: {
      set: function (newValue) {
        this.basicInfo.subType = newValue.type
      },
      get: function (value) {
        this.basicInfo.subType
      }
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-basic-info {
    @include layout--container;
    position: relative;
    padding: 5px;
}

.basic-info__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    margin-top: 5%;

    @media all and (min-width: 599px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(1, 1);
    }

    @media all and (min-width: 960px) {
        width: layout--item--width(1, 9, false);
        @include layout--item--offset(8, 2);
    }
}

.basic-info__input {
    margin-top: 40%;
}

.basic-info__textarea {
    margin-top: 20%;
}

.basic__info--explainer {
    margin-top: 20%;
}

</style>
