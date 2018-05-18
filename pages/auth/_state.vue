<template>
    <os-auth/>   
</template>
<script>
import { mapGetters } from 'vuex'
import Auth from '@/components/auth/index'

export default {
  layout: 'main--layout',
  middleware: 'onlyNotAuth',
  data () {
    return {
      url: '/signin'
    }
  },
  computed: {
    ...mapGetters({
      ActiveComponent: 'authentication/GetAuthModuleState'
    })
  },
  methods: {
    switchComponent(data) {
      this.credentials = data.values
      const CurrentState = this.$router.params.state
      this.$store.commit('UpdateAuthModuleState', CurrentState)
      
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const CurrentState = to.params.state
      vm.$store.commit('authentication/UpdateAuthModuleState', CurrentState)
    })
  },
  beforeRouteUpdate(to, from, next) {
    const CurrentState = to.params.state
    this.$store.commit('authentication/UpdateAuthModuleState', CurrentState)
    next()
  },
  components: {
    'os-auth': Auth
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


</style>