<template>
    <div>
      <keep-alive>
        <component 
          :is="ActiveComponent" 
          :errors="errors"
          :data="credentials"
          v-on:submit="submit" 
          v-on:switchComponent="switchComponent"></component>
      </keep-alive>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import FromInput from '@/components/form/input.vue'
import swal from 'sweetalert'
import Signup from '@/components/auth/signup/signup'
import Signin from '@/components/auth/signin/signin'

export default {
  layout: 'main--layout',
  middleware: 'notAuth',
  data () {
    return {
      ActiveComponent: this.$route.query.state? 'os-' + this.$route.query.state : 'os-signin' ,
      url: '/signin',
      errors: '',
      credentials: {
        full_name: '',
        email: '',
        sex: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'isLoading'
    })
  },
  watch: {
    ActiveComponent: function (val) {
      this.url = val == 'os-signup'? '/signUp' : '/signIn'
    }
  },
  methods: {
    async submit(data) {
      try {
        this.$store.commit('startLoading')
        await this.$store.dispatch('authentication/authentication', { values: data, url: this.url })
        this.$store.commit('stopLoading')
        this.$route.push('/')
      }catch(err) {
        this.$store.commit('stopLoading')
        console.log(err)
      }
      
         
    },
    switchComponent(data) {
      this.credentials = data.values
      this.ActiveComponent = data.component
      
    }
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  components: {
      'os-input': FromInput,
      'os-signup': Signup,
      'os-signin': Signin
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


</style>