<template>
    <div>
            
        <div class='set-price'>

            <div class='set-price__item'>
                <div class='set-price__alert-box'>
                    <h1 class='set-price__alert-box--title'>Consider referral fee in your price</h1>
                    <p class='set-price__alert-box--content'>OnclickSell.com will charge you a referral fee plus a flat rate per successfull sale, and deposites the remain amount to your account,  these values could change, depending on the plan you choose. </p>
                </div>
            </div>

           <!--  <div class='set-price__item set-price__input'>
                <os-input-help/>
               <os-input :fill='false' v-model="data.id" placeholder='$ How much your website worth?'/>
            </div>
 -->
            <div class='set-price__item'>
                <os-plan v-for="plan in plans" :plan="plan" v-on:selected="PlanSelected"/>


                <div class='set-price__table'>
                    <ul class='set-price__list'>
                        <li class='set-price__list--title'>Initial price</li>
                        <li class='set-price__list--title'>Flate rate</li>
                        <li class='set-price__list--title'>Referral fee</li>
                        <li class='set-price__list--title'>Referral fee</li>
                        <li class='set-price__list--item'>$400</li>
                        <li class='set-price__list--item'>$0</li>
                        <li class='set-price__list--item'>15%</li>
                        <li class='set-price__list--item'>$390</li>
                    </ul>
                </div>

            </div>

            <div class='set-price__item'>
                <div class="set-price__info-panel">
                    <h1 class="set-price__info-panel--title">How does it work?</h1>
                    <p class="set-price__info-panel--content">The price that you set for your application is the price that will display on your listed items. After the buyer purchased your item the fees will subtract from the actual price and the Deposit amount will be Deposit to your account based on the plane you choose.</p>
                </div>
            </div>

            <div class='set-price__item set-price__button'>
               <os-input
                   InputHolder='NEXT' 
                   InputType="button"
                   v-on:clicked="switch_page('os-payment')"
                   :tooltip="{position: 'top', distance: 100}"
                   InputName="submit"/>
                <os-input
                   InputHolder='BACK' 
                   InputType="button"
                   v-on:clicked="switch_page('os-pricing')"
                   :tooltip="{position: 'top', distance: 100}"
                   InputName="submit"/>
            </div>
        </div>
    
       
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'
import Plan from './plan/plan'
import { mapGetters } from 'vuex'


export default {
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size',
      data: {
        id: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      plans: 'listings/GetPlans'
    })
  },
  methods: {
    switch_page(page) {
      this.$emit('switched', {page: page, context: {plan:  this.data}})
    },
    PlanSelected(plan) {
      this.data.id = plan.id
      this.switch_page('os-payment')
    }
  },
  components: {
    'os-input': Input,
    'os-explainer': Explainer,
    'os-plan': Plan
  }
}
</script>

<style lang='scss' >

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




.set-price {
    @include layout--container;
    width: 100%;
    padding: 20px;
}

.set-price__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);

    @media only screen  and (min-width : 540px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(1, 1);
    }

}


.set-price__alert-box {
    width: 100%;
    border-radius: 4px;
    padding: 5px;
    margin: 30px 0 0 0;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);

    @media only screen  and (min-width : 768px) {
        margin: 50px 0 0 0;
    }
}

.set-price__alert-box--title {
    color: #666666;
    margin: 0;
    padding: 3px;
    font-size: 1.3em;
}

.set-price__alert-box--content {
    color: #666666;
    margin: 0;
    padding: 8px 4px;
    font-size: 0.9em;
}


.set-price__input {
    margin-top: 40px;
    margin-bottom: 40px;

    @media only screen  and (min-width : 768px) { 
       margin-top: 50px;
       width: 60%;
    }
}



.plan-container {
    width: 100%;
    background-color: #199ED8;
    border-radius: 4px;
    margin: 10px 0 40px 0;
    @media only screen  and (min-width : 768px) { 
        width: layout--item--width(2, 5, false);
        @include layout--item;
        margin: 30px 0 50px 5%;
    }
}

.plane__title {
    margin: 0;
    padding: 5px;
    color: #FFFFFF;
    border-bottom: 4px solid #FFFFFF;
}

.plan__features--list {
    color: #FFFFFF;
}

.plan__description {
    color: #FFFFFF;
    padding: 5px;
}

.set-price__table {
    width: 90%;
    margin: 10px auto 10px auto;

    @media only screen  and (min-width : 768px) { 
        width: layout--item--width(2, 5, false);
        @include layout--item;
        margin: 30px auto 50px 10%;
    }
}

.set-price__list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: 3px 3px 0 0;
    @include layout--container;
}

.set-price__list--title, .set-price__list--item {
    @include layout--item;
    width: layout--item--width(4, 3, true);
    padding: 15px 5px;
    text-align: center;
    background: #D7D7D7;
    margin: 0;
    height: 50px;
    font-size: 12px;
    color: #666666;
    font-weight: bold;
}

.set-price__list--item {
    background-color: #F2F2F2;
    font-weight: normal;
}

.set-price__info-panel {
    width: 100%;
    margin: 40px 0 0 0;
    background-color: #F2F2F2;
    padding: 5px;
    border-radius: 4px;

    @media only screen  and (min-width : 768px) { 
        margin: 40px 0 30px 0;
    }
}

.set-price__info-panel--title {
    color: #666666;
    margin: 0;
    padding: 5px;
    font-size: 1.3em;
}

.set-price__info-panel--content {
    color: #666666;
    padding: 5px;
    font-size: 0.9em;
}

.set-price__button {
   margin-top: 20px;
}


</style>
