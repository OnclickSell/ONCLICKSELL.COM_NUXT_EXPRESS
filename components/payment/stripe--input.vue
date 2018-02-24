<template>
    <div>
        <div class='frontend'>
          

            <div class='frontend__item frontend__item--float'>
                <label for="cardNumber">Card Number</label>
                <div id="cardNumber" ref="cardNumber"></div>
                <span class="fields__error" v-if="fields.cardNumber">{{fields.cardNumber.error}}</span>

                <label for="cardExpiry">Expiry</label>
                <div id="cardExpiry" ref="cardExpiry"></div>
                <span class="fields__error" v-if="fields.cardExpiry">{{fields.cardExpiry.error}}</span>

                <label for="cardCvc">CVC</label>
                <div id="cardCvc" ref="cardCvc"></div>
                <span class="fields__error" v-if="fields.cardCvc">{{fields.cardCvc.error}}</span>

                <button @click="makePayment">Pay Now</button>
            </div>
  
          

        </div>
    
       
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
      fields: {
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
        if (event.error) {
            this.fields.cardNumber.error = event.error.message
        } else {
            this.fields.cardNumber.error = ''
        }
    },
    validateCardExpiry(event) {
        if (event.error) {
            this.fields.cardExpiry.error = event.error.message
        } else {
            this.fields.cardExpiry.error = ''
        }
    },
    validateCardCvc(event) {
        if (event.error) {
            this.fields.cardCvc.error = event.error.message
        } else {
            this.fields.cardCvc.error = ''
        }
    },
    makePayment() {
      let that = this
      stripe.createToken(cardNumber).then(function(result) {
          if(!result.error) {
              that.$emit('createToken', result.token)
          }
      })
    }
  }
 
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.fields__error {
    color: red;
    font-size: 0.8em;
    display: block;
}

.frontend {
    @include layout--container;
    width: 100%;
    padding: 20px;

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(3, 1);
    }
}

.frontend__item {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    padding: 12px 8px;
    margin: 0;
}

.frontend__item--float {
    width: layout--item--width(1, 12, true);
    margin: 0;

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
    }

    @media only screen  and (min-width : 960px) {
        width: layout--item--width(2, 5, false);
    }
}

.frontend__item--top-margin {
    margin-top: 10%;
}

</style>
