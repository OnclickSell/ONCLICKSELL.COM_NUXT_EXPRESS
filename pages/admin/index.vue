<template>
    <div class="l-admin">
      

        <div class="admin">
            <h1 class="admin_headings">Customers</h1>
            <div v-for="customer in data.customers.list">
                {{customer}}
            </div>
            <div class="form_group">
                <label class="form_titles">email</label>
                <input type="text" class="form_inputs" v-model="customers.email">
                <label class="form_titles">description</label>
                <textarea type="textarea" class="form_inputs" v-model="customers.description"></textarea>
                <button @click="addCustomer" type="button" class="form_button">Submit</button>
            </div>
        </div>

        <div class="admin">
            <h1 class="admin_headings">Subscriptions</h1>
            <div v-for="subscription in data.subscriptions.list">
                {{subscription}}
            </div>
            <div class="form_group">
                <label class="form_titles">customer Id</label>
                <input type="text" class="form_inputs" v-model="subscriptions.customer_id">
                <label class="form_titles">plan Id</label>
                <input type="text" class="form_inputs" v-model="subscriptions.planId">
                <label class="form_titles">quantity</label>
                <input type="text" class="form_inputs" v-model="subscriptions.quantity">
                <label class="form_titles">Trial End</label>
                <input type="text" class="form_inputs" v-model="subscriptions.trialEnd">
                <label class="form_titles">capture Charges</label>
                <input type="text" class="form_inputs" v-model="subscriptions.captureCharges">
                <button @click="createSubscription" type="button" class="form_button">Submit</button>
            </div>
        </div>

        <div class="admin">
            <h1 class="admin_headings">Plans</h1>
            <div v-for="plan in data.plans.list">
                {{plan}}
            </div>
            <div class="form_group">
                <label class="form_titles">Name</label>
                <input type="text" class="form_inputs" v-model="plans.name">
                <label class="form_titles">Amount</label>
                <input type="text" class="form_inputs" v-model="plans.amount">
                <label class="form_titles">Currency</label>
                <input type="text" class="form_inputs" v-model="plans.currency">
                <label class="form_titles">Interval Count</label>
                <input type="text" class="form_inputs" placeholder="e.g 1 or 2 or 3" v-model="plans.intervalCount">
                <label class="form_titles">Interval</label>
                <input type="text" class="form_inputs" placeholder="e.g hour, day" v-model="plans.interval">
                <label class="form_titles">Trial Period Days</label>
                <input type="text" class="form_inputs" v-model="plans.trialPeriodDays">
                <label class="form_titles">Billing Cycle</label>
                <input type="text" class="form_inputs" placeholder="Number of day before 1st charge" v-model="plans.billingCycles">
                <label class="form_titles">Recurs to Plan</label>
                <input type="text" class="form_inputs" v-model="plans.recursTo">
                <button @click="addPlan" type="button" class="form_button">Submit</button>
            </div>
        </div>

    </div>         
</template>
<script>

import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'main--layout',
  middleware: ['checkAuth'],
  data() {
    return {
        plans: {
            name: '',
            amount: '',
            currency: '',
            intervalCount: '',
            interval: '',
            trialPeriodDays: '',
            billingCycles: '',
            recursTo: ''
        },
        customers: {
            email: '',
            description: ''
        },
        subscriptions: {
            customer_id: '',
            planId: '',
            quantity: '',
            trialEnd: '',
            captureCharges: '',
            card: ''
        }
    }
  },
  async asyncData ({ params, store }) {

    const { data } = await axios.get(`http://127.0.0.1:4000/api/v1/admin?token=${store.state.authentication.token}`)
    return { data: data.Context }
  },
  methods: {
    async addPlan() {
        const result = await axios.post(`http://127.0.0.1:4000/api/v1/admin/createPlan?token=${this.token}`, this.plans)
        console.log(result)
    },
    async addCustomer() {
        const result = await axios.post(`http://127.0.0.1:4000/api/v1/admin/createCustomer?token=${this.token}`, this.customers)
        console.log(result)
    },
    async createSubscription() {
        const result = await axios.post(`http://127.0.0.1:4000/api/v1/admin/createSubscription?token=${this.token}`, this.customers)
        console.log(result)
    }
  },
  computed: {
     ...mapGetters({
      token: 'authentication/getToken'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-admin {
    padding: 20px;
    height: 100%;
    min-height: 100%;
}

.admin {
    padding: 12px;
    background-color: #f1f1f1;
    border-radius: 3px;
    margin: 10px 0;
  /*  min-height: 500px;*/
}

.admin_headings {
    padding: 12px;
    margin: 0;
    font-size: 1.1em;
    text-transform: uppercase;
    color: #666666;
    border-bottom: 1px solid #dedede;
}

.form_group {
    width: 40%;
    padding: 12px;
}

.form_titles {
    padding: 5px;
    margin-top: 10px;
    display: block;
}

.form_inputs {
    display: block;
    width: 100%;
    border: none;
    border: 1px solid #666666;
    border-radius: 5px;
    padding: 12px;
}

.form_button {
    padding: 12px;
    width: 110px;
    border: none;
    color: white;
    background-color: green;
    border-radius: 5px;
    margin-top: 20px;
}

</style>