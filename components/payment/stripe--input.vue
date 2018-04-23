<template>
    <div class='l-payment_gateway'>
      <div class="payment_gateway-items" id="l-cardNumber">
        <label for="cardNumber" class="payment_gateway-titles">Card Number</label>
        <div id="cardNumber" :class="{'error': Allfields.cardNumber.error}" ref="cardNumber"></div>
      </div>

      <div class="payment_gateway-items" id="l-cardExpiry">
        <label for="cardExpiry" class="payment_gateway-titles">Expiry</label>
        <div id="cardExpiry" :class="{'error': Allfields.cardExpiry.error}" ref="cardExpiry"></div>
      </div>

      <div class="payment_gateway-items" id="l-cardCVC">
        <label for="cardCvc" class="payment_gateway-titles">CVC</label>
        <div id="cardCvc" :class="{'error': Allfields.cardCvc.error}" ref="cardCvc"></div>
      </div>

      <!-- <div class="payment_gateway-items l-payment_gateway-button">
        <button @click="makePayment" class="payment_gateway-button">Pay Now</button>
      </div> -->
    </div>
</template>

<script>

let stripe, elements, card, cardNumber, cardExpiry, cardCvc

if(process.client) {
    stripe = Stripe(`pk_test_h5jTkhh7fGyGO6YrjfyfRTId`)
    elements = stripe.elements()
}

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
        cardExpiry: {
          error: ''
        },
        cardCvc: {
          error: ''
        }
      }
    }
  },
  mounted() {
    this.createElements()
  },
  created() {
    const that = this
    this.$bus.$on('createToken', () => {
      that.makePayment()
    })
  },
  methods: {
    createElements () {
      // Create a card number filed
      cardNumber = elements.create('cardNumber')
      cardNumber.on("change", (event) => this.validateCardNumber(event))

      // Create a card expiry field
      cardExpiry = elements.create('cardExpiry')
      cardExpiry.on("change", (event) => this.validateCardExpiry(event))

      // Create a card Cvc field
      cardCvc = elements.create('cardCvc')
      cardCvc.on("change", (event) => this.validateCardCvc(event))


      // Mount the element to the DOM
      cardNumber.mount(this.$refs.cardNumber)
      cardExpiry.mount(this.$refs.cardExpiry)
      cardCvc.mount(this.$refs.cardCvc)
    },
    validateCardNumber(event) {
        if (event.error)
          this.addError('cardNumber', 'The card number is not valid')
        else
          this.removeError('cardNumber', 'The card number is not valid')
    },
    validateCardExpiry(event) {
        if (event.error)
          this.addError('cardExpiry', 'The card Expiry is not valid')
        else
          this.removeError('cardExpiry', 'The card Expiry is not valid')
    },
    validateCardCvc(event) {
        if (event.error)
          this.addError('cardCvc', 'The card CVC is not valid')
        else
          this.removeError('cardCvc', 'The card CVC is not valid')
    },
    makePayment() {
      let that = this
      stripe.createToken(cardNumber).then(function(result) {
          if(!result.error) {
            that.$emit('TokenCreated', result.token)
          }
      })
    },
    addError(field, error) {
      this.Allfields[field].error = error
      this.$emit('errorAdded', {field: field, error: error})
    },
    removeError(field, error) {
      this.$emit('errorRemoved', error)
      this.Allfields[field].error = null
    }
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
  padding: 5px 0;
  display: block;
  @include workSans_medium;
  color: #666666;
}

.payment_gateway-items {
  margin: 10px auto 10px auto;
}

#l-cardNumber {
  width: 100%;
}

#l-cardExpiry {
  width: 45%;
  margin-left: 0;
  margin-right: auto;
}

#l-cardCVC {
  width: 45%;
  margin-right: 0;
  margin-left: auto;

}

#cardNumber, #cardExpiry, #cardCvc {
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
