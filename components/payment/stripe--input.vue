<template>
    <form class='l-payment_gateway' action="" method="post">
      <div class="payment_gateway-items" id="l-cardNumber">
        <label for="cardNumber" class="payment_gateway-titles" >Card Number</label>
        <input
         type="text" 
         size="20" 
         data-securionpay="number" 
         id="cardNumber" 
         :class="{'error': Allfields.cardNumber.error}" 
         @input="validateCardNumber()"  
         v-model="newFields.cardNumber"/>
      </div>

      <div class="payment_gateway-items" id="l-cardExpiry">
        <label for="cardExpiry" class="payment_gateway-titles">Expiry</label>
        <input
         type="text" 
         size="2" 
         data-securionpay="expMonth" 
         id="cardMonth" :class="{'error': Allfields.cardMonth.error}"
         @input="validateCardMonth" 
         v-model="newFields.cardMonth"/>

        <input
         type="text" 
         size="4" 
         data-securionpay="expYear"
         id="cardYear" :class="{'error': Allfields.cardYear.error}"  
         @input="validateCardYear" 
         v-model="newFields.cardYear"/>
        
       <!--  <div  ref="cardExpiry"></div> -->
      </div>


     


      <div class="payment_gateway-items" id="l-cardCVC">
        <label for="cardCvc" class="payment_gateway-titles" >CVC</label>
        <input 
          type="text" 
          size="4" 
          data-securionpay="cvc" 
          id="cardCvc" 
          :class="{'error': Allfields.cardCvc.error}" 
          @input="validateCardCvc" 
          v-model="newFields.cardCvc"/>
      </div>
      <!-- <div class="payment_gateway-items l-payment_gateway-button">
        <button @click="makePayment" class="payment_gateway-button">Pay Now</button>
      </div> -->
    </form>
</template>

<script>

// let stripe, elements, card, cardNumber, cardExpiry, cardCvc

// if(process.client) {
//     stripe = Stripe(`pk_test_h5jTkhh7fGyGO6YrjfyfRTId`)
//     elements = stripe.elements()
// }

if(process.client)
  Securionpay.setPublicKey('pk_test_f9Hx57eCgfGO4ZUjMFz7ffLz')

export default {
  data () {
    return {
      cardDetails: {
        token: ''
      },
      Allfields: {
        cardNumber: {
          error: ''
        },
        cardMonth: {
          error: ''
        },
        cardYear: {
          error: ''
        },
        cardCvc: {
          error: ''
        }
      },
      newFields: {
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvc: ''
      }
    }
  },
  created() {
    const that = this
    this.$bus.$on('createToken', () => {
      that.makePayment()
      // console.log('triggred')
    })
  },
  mounted() {
     let form = document.querySelector('.l-payment_gateway')
    form.addEventListener('submit', (event) => event.preventDefault())
  },
  methods: {
    makePayment() {
      let form = document.querySelector('.l-payment_gateway')
      Securionpay.createCardToken(form, this.createCardTokenCallback);
    },
    createCardTokenCallback(token) {
      // Check for errors
      if (token.error) {
        console.log(token.error)
        switch(token.error.code.toUpperCase()) {
          case 'INVALID_NUMBER':
            this.addError('cardNumber', 'The card number is not valid')
          break
          case 'INVALID_EXPIRY_MONTH':
            this.addError('cardMonth', 'The card expiry month is not valid')
          break
          case 'INVALID_EXPIRY_YEAR':
            this.addError('cardYear', 'The card expiry year is not valid')
          break
          case 'INVALID_CVC':
            this.addError('cardCvc', 'The card CVC is not valid')
          break;
          default:
            return 
        }
      } else {
        this.$emit('TokenCreated', token.id)
        console.log(token)
      }
    },
    validateCardNumber() {
      if (this.newFields.cardNumber.length > 19) {
        // this.newFields.cardNumber.slice(0, -1)
        this.addError('cardNumber', 'The card number is not valid')
      }else
        this.removeError('cardNumber', 'The card number is not valid')
    },
    validateCardMonth() {
        if (this.newFields.cardMonth.length > 4)
          this.addError('cardMonth', 'The card expiry month is not valid')
        else
          this.removeError('cardMonth', 'The card expiry month is not valid')
    },
    validateCardYear() {
        if (this.newFields.cardYear.length > 4)
          this.addError('cardYear', 'The card expiry year is not valid')
        else
          this.removeError('cardYear', 'The card expiry year is not valid')
    },
    validateCardCvc() {
        if (this.newFields.cardCvc.length > 4)
          this.addError('cardCvc', 'The card CVC is not valid')
        else
          this.removeError('cardCvc', 'The card CVC is not valid')
    },
    addError(field, error) {
      this.Allfields[field].error = error
      this.$emit('errorAdded', {field: field, error: error})
    },
    removeError(field, error) {
      this.$emit('errorRemoved', error)
      this.Allfields[field].error = null
    }
  },
  beforeDestroy() {
    const form = document.querySelector('.l-payment_gateway')
    form.removeEventListener('submit', (event) => event.preventDefault())
  }
 
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';



.l-payment_gateway {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.payment_gateway-titles {
  width: 100%;
  padding: 5px 0;
  display: block;
  @include workSans_medium;
  color: #666666;
}

.payment_gateway-items {
  margin: 10px auto 10px auto;
}

#l-cardNumber {
  display: block;
  width: 100%;
}

#cardNumber {
  width: 100%;
}

#l-cardExpiry {
  display: flex;
  flex-wrap: wrap;
  width: 45%;
  margin-left: 0;
  margin-right: auto;
}

#l-cardCVC {
  display: block;
  width: 45%;
  margin-right: 0;
  margin-left: auto;

}

#cardNumber, #cardMonth, #cardYear, #cardCvc {
  display: block;
  padding: 10px 5px;
  border: none;
  border-bottom: 5px solid #3dbf57;
  background-color: #eee;
  color: #666666;
}

.l-payment_gateway-button {
  width: 100%;
  padding: 10px 0;
}

.payment_gateway-button {
  width: 100%;
  padding: 12px;
  color: #FFFFFF;
  background-color: #3dc053;
  border: none;
  border-radius: 3px;
  text-align: center;
}



.error {
  border-bottom: 5px solid red !important;
}


</style>
