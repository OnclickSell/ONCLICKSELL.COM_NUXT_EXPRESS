<template>
  <div class="l-auth">
      <keep-alive>
        <component 
          :is="ActiveComponent" 
          :errors="errors"
          :data="credentials"
          v-on:submit="submit" 
          v-on:switchComponent="switchComponent"></component>
      </keep-alive>
    </div>

  </div>         
</template>
<script>
import { mapGetters } from 'vuex'
import FromInput from '@/components/form/input.vue'
import swal from 'sweetalert'

import Signup from '@/components/auth/signup/signup'
import Signin from '@/components/auth/signin/signin'
import ForgotPassword from '@/components/auth/forgot_password/index'
import ResetPassword from '@/components/auth/reset_password/index'

export default {
  props: ['data'],
  data () {
    return {
      errors: '',
      credentials: {
        url: '/signin',
        name: '',
        email: '',
        sex: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'isLoading',
      ActiveComponent: 'authentication/GetAuthModuleState'
    })
  },
  methods: {
    async submit(data) {
      try {
        this.$store.commit('startLoading')
        await this.$store.dispatch('authentication/authentication', data)
        this.$store.commit('stopLoading')
        this.$route.push('/')
      }catch(err) {
        this.$store.commit('stopLoading')
        console.log(err)
      }
      
         
    },
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
      'os-input': FromInput,
      'signup': Signup,
      'signin': Signin,
      'reset-password': ResetPassword,
      'forgot-password': ForgotPassword
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';




.l-auth {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-image: url('https://www.pixelstalk.net/wp-content/uploads/images1/Blur-Background-Simple-Images-Wallpaper-Of-Nature-Download.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    margin: 0;

    @media all and (min-width: 599px) {
      height: 100%;
    }
}

</style>