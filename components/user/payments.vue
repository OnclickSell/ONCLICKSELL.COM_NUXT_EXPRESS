<template>
    <div class='payments'>
        <os-modal :open="modal" v-if='modal'><os-payment--plan @closeModal="toggleModal" class='profile__plan--change'/></os-modal>
        <div class='payments__title'>
            <h3>Payment plan:</h3>
            <span class='payment__plan'>Monthly</span>
            <button class='payment__button' @click="change">Change</button>
        </div>

        <div class='payment__history'>
            <h3 class='payment__title'>Payments History</h3>
            <div class='payment'>
                <span class='payment__date'>12/05/2017  12:33 pm</span>
                <span class='payment__amount'>$ 1400 USD</span>
            </div>
        </div>

        <div class='payment__-future-payments'>
            <h3 class='payment__title'>Future Payments</h3>
            <div class='payment'>
                <span class='payment__date'>12/05/2017  12:33 pm</span>
                <span class='payment__amount'>$ 1400 USD</span>
            </div>
            <div class='payment'>
                <span class='payment__date'>12/05/2017  12:33 pm</span>
                <span class='payment__amount'>$ 1400 USD</span>
            </div>
            <div class='payment'>
                <span class='payment__date'>12/05/2017  12:33 pm</span>
                <span class='payment__amount'>$ 1400 USD</span>
            </div>
        </div>

    </div>
</template>
<script>
import PaymentPlanDialog from './payment--plan-dialog.vue'
import PaymentPlan from './payment--plan.vue'
import Modal from '@/components/modal/modal.vue'
export default {
  data () {
    return {
      modal: false
    }
  },
  methods: {
    change () {
      this.modal = true
    },
    toggleModal () {
      this.modal = !this.modal
    }
  },
  components: {
    'os-payment--plan-dialog': PaymentPlanDialog,
    'os-payment--plan': PaymentPlan,
    'os-modal': Modal
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.payments {
    padding: 25px 12px 12px 12px;
}

.payments__title {
    @include layout--container;
    position: relative;
    color: #666666;
    padding: 10px 1px;
    border-bottom: 2px solid #eee;
    margin-bottom: 25px;

    h3, .payment__plan, .payment__button {
        @include layout--item;
        display: block;
        margin: 0;
    }
    
}

.payment__plan {
    padding-top: 2px;
    padding-left: 7px;
    color: #3EA98D;
}

.payment__button {
    background-color: #ffffff;
    border: none;
    color: #4D80B5;
    position: absolute;
    right: 0;
    top: 57%;
    cursor: pointer;
}


.payment__title {
    color: #666666;
    margin-bottom: 10px;
    font-size: 1.2em;
    font-weight: normal;
}

.payment {
    background-color: #F2F2F2;
    padding: 7px 5px;
    border-radius: 3px;
    margin: 10px;
    margin-left: 0;
}

.payment__date, .payment__amount {
    color: #c7c4c4;
    padding: 4px;
}

.payment__amount {
    width: 40%;
    text-align: right;
    display: inline-block;
}


.profile__plan--change {
    margin: 120px auto 0 auto;
    width: 280px;

    @media all and (min-width: 768px) {
        width: 300px;
        margin: 130px auto 0 auto;
    }
}




</style>