<template>
    <div class="l-admin">
      

        <div class="admin">
            <h1 class="admin_headings">Customers</h1>
        </div>

        <div class="admin">
            <h1 class="admin_headings">Products</h1>
            <div v-for="product in products">
                <p>{{product.id}}</p>
            </div>
        </div>

        <div class="admin">
            <h1 class="admin_headings">Plans</h1>
        </div>

    </div>         
</template>
<script>

import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'main--layout',
  middleware: ['checkAuth'],
  async asyncData ({ params, store }) {

    const { data } = await axios.get(`http://127.0.0.1:4000/api/v1/admin/GetProducts?token=${store.state.authentication.token}`)
    return { products: data.Context.data }
  },
  methods: {

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
    min-height: 200px;
}

.admin_headings {
    padding: 12px;
    margin: 0;
    font-size: 1.1em;
    text-transform: uppercase;
    color: #666666;
    border-bottom: 1px solid #dedede;
}

</style>