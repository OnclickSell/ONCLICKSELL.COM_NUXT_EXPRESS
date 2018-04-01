<template>
  <div class="auth_reset_password">
      <os-auth-panel>

          <div slot="controlls" class="auth_reset_password-controlls">
              <os-auth-errors
                v-on:closed="cancelError"
                v-show="errors.any()" 
                :errors="errors.items" />
                    <os-input 
                      class="auth_reset_password-input"
                      title="New Password"
                      v-model="credentials.password"
                      InputType='text'
                      v-validate="'required'"
                      InputName='password'
                      data-vv-value-path="innerValue"
                      data-vv-name="password"
                      InputHolder="**********"/>

                    <os-input 
                      class="auth_reset_password-input"
                      title="Confirm Password"
                      v-model="credentials.password"
                      InputType='password'
                      v-validate="'required'"
                      InputName='password'
                      data-vv-value-path="innerValue"
                      data-vv-name="password"
                      InputHolder="re-type your password"/>


                  <os-auth-buttons 
                    class="auth_reset_password-input"
                    v-on:clicked="reset_password"
                    v-on:linkClicked="signup"
                    text="Reset" 
                    link="Sign In"/>
                </div>


            <div slot="describtion" class="auth_reset_password-description">
              <h1 class="auth_reset_password-title">Reset Your Password</h1>
              <p class="auth_reset_password-body">Make sure your new password is not the same as your old password</p>
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
    reset_password () {
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


.auth_reset_password {
  position: relative;
  width: 100%;
}

.auth_reset_password-input {
  margin-top: 25px;
}


.auth_reset_password-title {
  text-align: left;
  color: #FFFFFF;
  margin: 0;
  padding: 5px;
}

.auth_reset_password-body {
  text-align: left;
  color: grey;
  padding: 5px;
  margin: 0;
}

.auth_reset_password-controlls {
  padding: 12%;
}

.auth_reset_password-description {
  padding: 12%;
}

</style>