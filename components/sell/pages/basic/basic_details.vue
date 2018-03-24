<template>
  <div>
    <div class='l-basic-info'>
        
        <div class='basic-info__item basic-info__input'>
            <p>Project Type</p>
            <os-input
               data-vv-name="project_type"
               v-validate="'required'"
               :InputHolder='basicInfo.type' 
               InputType="dropdown"
               InputName="project type"
               :InputError="errors.first('type')"
               :tooltip="{position: 'top', distance: 35}"
               :options="[
                {title: 'Website', value: 'Website'},
                {title: 'Web Application', value: 'Web Application'},
                {title: 'Static Website', value: 'Static Website'}
               ]"
               v-model="basicInfo.type"/>
        </div>


        <div class='basic-info__item basic-info__input' v-if="basicInfo.type == 'Website'">
            <p>Website Type</p>
            <os-input
               data-vv-name="subType"
               v-validate="'required'"
               :InputHolder='basicInfo.subType' 
               InputType="dropdown"
               InputName="subType"
               :InputError="errors.first('subType')"
               :tooltip="{position: 'top', distance: 35}"
               :options="[
                {title: 'Static Website', value: 'Static Website'},
                {title: 'Dynamic Website', value: 'Dynamic Website'},
                {title: 'E-commerce', value: 'E-commerce'}
               ]"
               v-model="basicInfo.subType"/>
        </div>
 


        <div class='basic-info__item basic-info__input'>
            <p>Listing Title</p>
            <os-input
               data-vv-name="title"
               v-validate="'required|min:20|max:120'"
               InputHolder='e.g. My First Project...' 
               InputType="text"
               InputName="project type"
               :InputError="errors.first('title')"
               :tooltip="{position: 'top', distance: 35}"
               v-model="basicInfo.title"/>
        </div>



        <div class='basic-info__item basic-info__input'>
            <p>Listing Description</p>
            <os-input
               data-vv-name="description"
               v-validate="'required|min:200|max:3000'"
               InputHolder='Some Description About Your Listing...' 
               InputType="textarea"
               InputName="description"
               :InputError="errors.first('description')"
               :tooltip="{position: 'top', distance: 100}"
               v-model="basicInfo.description"/>
        </div>


        <div class='basic-info__item basic-info__input'>
            <p>Listing Summary</p>
            <os-input
               data-vv-name="summary"
               v-validate="'required|min:100|max:2000'"
               InputHolder='Describe what your project is about in a minimum of 100 words...' 
               InputType="textarea"
               InputName="summary"
               :InputError="errors.first('summary')"
               :tooltip="{position: 'top', distance: 100}"
               v-model="basicInfo.summary"/>
        </div>
      

        <div class='basic-info__item basic-info__input'>
            <os-input
               InputHolder='NEXT' 
               InputType="button"
               v-on:clicked="switch_page('os-frontend')"
               :tooltip="{position: 'top', distance: 100}"
               InputName="submit"/>
        </div>

        <div class='basic-info__item basic-info__input'>
            <os-input
               InputHolder='BACK' 
               InputType="button"
               v-on:clicked="switch_page('os-basic-details')"
               :tooltip="{position: 'top', distance: 100}"
               InputName="submit"/>
        </div>

           <!--  <div class='basic-info__item basic-info__input--top-margin'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
            </div>  -->

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
        project_type: [
          {type: 'Web Application', subType: ''},
          {type: 'Website', subType: [{type: 'Static'}, {type: 'Dynamic'}]},
          {type: 'E-commerce', subType: ''}
        ],
        project_sub_type: '',
        basicInfo: {
          type: 'Website',
          subType: '',
          title: '',
          summary: '',
          description: ''
        }
      }
  },
  components: {
    'os-input': Input
  },
  methods: {
    switch_page(page) {
      this.$validator.validateAll().then((result) => {
        if(result)
          this.$emit('switched', {page: page, context: this.basicInfo})
      })
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
    margin-top: 10%;
}

.basic-info__textarea {
    margin-top: 20%;
}

.basic__info--explainer {
    margin-top: 20%;
}

</style>
