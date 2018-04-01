<template>
  <div class="auth_forgot_password">
      <os-auth-panel>

          <div slot="controlls" class="auth_forgot_password-controlls">
              <os-auth-errors
                v-on:closed="cancelError"
                v-show="errors.any()" 
                :errors="errors.items" />
                    <os-input 
                      class="auth_forgot_password-input"
                      title="Email Address"
                      v-model="credentials.email"
                      InputType='email'
                      v-validate="'required|email'"
                      InputName='password'
                      data-vv-value-path="innerValue"
                      data-vv-name="email"
                      InputHolder="e.g Al.Su@Myself.com"/>


                  <os-auth-buttons 
                    class="auth_forgot_password-input"
                    v-on:clicked="forgot_password"
                    v-on:linkClicked="signup"
                    text="Sign In" 
                    link="Sign Up"/>
                </div>


            <div slot="describtion" class="auth_forgot_password-description">
              <h1 class="auth_forgot_password-title">Forgot Your Password?</h1>
              <p class="auth_forgot_password-body">You can easily reset your password now</p>
            </div>
      </os-auth-panel>

    </div>         
</template>
<script>
import { mapGetters } from 'vuex'
import FromInput from '@/components/auth/input/index'
import swal from 'sweetalert'
import AuthPanel from '@/components/auth/panel/index'
import AuthButtons from '@/components/auth/buttons/index'
import AuthErrors from '@/components/auth/errors/index'

export default {
  props: ['data'],
  data () {
    return {
      credentials: this.data
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading'
    })
  },
  methods: {
    cancelError() {
      this.errors.clear()
    },
    forgot_password () {
      // swal({
      //   title: "Good job!",
      //   text: "You clicked the button!",
      //   icon: "success",
      //   button: "Aww yiss!",
      // })
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$emit('submit', { ...this.credentials })
        }
      })
    },
    signup() {
      // this.$emit('switchComponent', { component: 'signup', values: this.credentials })
      this.$router.push('/auth/signup')
    }
  },
  components: {
      'os-input': FromInput,
      'os-auth-panel': AuthPanel,
      'os-auth-buttons': AuthButtons,
      'os-auth-errors': AuthErrors
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.auth_forgot_password {
  position: relative;
  width: 100%;
}

.auth_forgot_password-input {
  margin-top: 25px;
}


.auth_forgot_password-title {
  text-align: left;
  color: #FFFFFF;
  margin: 0;
  padding: 5px;
}

.auth_forgot_password-body {
  text-align: left;
  color: grey;
  padding: 5px;
  margin: 0;
}

.auth_forgot_password-controlls {
  padding: 12%;
}

.auth_forgot_password-description {
  padding: 12%;
}

</style>