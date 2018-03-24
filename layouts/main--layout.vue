<template>
  <div class="main__layout">
      <os-navbar/>
    <nuxt/>
      <os-loader v-if="loading"/>
      <os-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'
import Loader from '@/components/UI/loader/loader'
import swal from 'sweetalert'
import { mapGetters } from 'vuex'

export default {
  middleware: 'checkAuth',
  computed: {
    ...mapGetters({
      loading: 'isLoading'
    })
  },
  components: {
    'os-navbar': Navbar,
    'os-footer': Footer,
    'os-loader': Loader
  }
}
</script>
<style lang="scss">
.main__layout {
    min-height: 100%;
}
</style>
