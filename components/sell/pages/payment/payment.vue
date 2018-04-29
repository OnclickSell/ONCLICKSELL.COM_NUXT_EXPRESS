<template>
   <div class="l-payment">


      <os-error-panel :show="inputErrors.length !== 0" class="l-project_errors">
          <p v-for="error in inputErrors" :key="error.field">{{error.error}}</p>
      </os-error-panel>

      <div class="payment_items">
        <h1 class="payment_items-title">Your Billing Cycle</h1>
        <div v-for="(input, index) in inputs" v-if="index < 1">
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
      </div>

       <div class="payment_items">
        <h1 class="payment_items-title">Your Basic Informations</h1>
        <div v-for="(input, index) in inputs" v-if="(index > 0 && index < 3)" class="payment_items-input">
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
      </div>

       <div class="payment_items">
        <h1 class="payment_items-title">Your Account Credentials</h1>
        <div v-for="(input, index) in inputs" v-if="index > 2 && index < 5" class="payment_items-input">
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
      </div>

       <div class="payment_items">
        <h1 class="payment_items-title">Your Payment Information</h1>
        <no-ssr>
        <os-stripe 
          v-on:errorAdded="cardErrorAdded" 
          v-on:errorRemoved="cardErrorRemoved" 
          v-on:TokenCreated="storeTokenHandler"></os-stripe>
        </no-ssr>
      </div>

      <div class="l-project_items-buttons">
        <button class="project_items-buttons" @click="submit">Next</button>
        <button class="project_items-buttons" @click="switch_page('os-basic-details')">Back</button>
      </div>
   </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'
import ErrorPanel from '@/components/UI/error/error_panel.vue'
import Stripe_payment from '@/components/payment/stripe--input.vue'
import Mixins from '@/mixins/sell.js'
export default {
  data() {
    return {
      inputs: [
          {
            name: 'billing_cycles',
            type: 'radio',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: null,
            placeholder: null,
            data: [
              {title: 'Monthly', value: 30, name: 'billing_cycles', checked: true},
              {title: 'Anually', value: 360, name: 'billing_cycles'}
            ],
            value: ''
          },
          {
            name: 'FirstName',
            type: 'text',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Your First Name',
            placeholder: 'e.g Aliakbar',
            data: '',
            value: ''
          },
          {
            name: 'LastName',
            type: 'text',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Last Name',
            placeholder: 'e.g Sultani',
            data: '',
            value: ''
          },
          {
            name: 'EmailAddress',
            type: 'text',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Email Address',
            placeholder: 'e.g Ali.su@myself.com',
            data: '',
            value: ''
          },
          {
            name: 'password',
            type: 'text',
            rules: [{name: 'required', value: ''}],
            touched: false,
            title: 'Account Password',
            placeholder: '***********',
            data: '',
            value: ''
          }
        ]
    }
  },
  methods: {
    check() {
    this.inputs.map(value => this.data[value.name] = value.value)
    },
    cardErrorAdded(error) {
      this.addError(error.error, error.field)
    },
    cardErrorRemoved(error) {
      this.removeError(error)
    },
    storeTokenHandler(token) {
      this.data['token'] = token
      if(this.data.token == undefined)
          this.submit()
        this.switch_page('os-screenshot')
      },
    submit() {
      this.$bus.$emit('createToken')
    }
  },
  components: {
    'os-input': Input,
    'os-error-panel': ErrorPanel,
    'os-stripe': Stripe_payment
  },
  mixins: [Mixins]
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-payment {
  padding: 12px;
}

.payment_items {
  width: 90%;
  margin: auto;
  padding: 12px;
  border-bottom: 1px solid #f3f3f3;
}


.payment_items-title {
  color: grey;
  font-size: 1.1em;
}

.payment_items-input {
  width: 100%;
  margin: 10px 0;
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
