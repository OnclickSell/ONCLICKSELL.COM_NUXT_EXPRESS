<template>
    <div>

         <div class='l-register' v-if="!isAuth">
            <div class='register'>
                <div class='l-register__header'>
                    <p class='register__heading'>Sell your first<br/> project today!</p>
                </div>

                <div class="l-register__inputs">

                    <div class='l-register__github'>
                        <div class='register__github register__github--button' @click="signin">Login With GitHub Account</div>
                    </div>
                    <span class='register__email--or'>OR</span>
                    <div class='register__inputs'>
                        <h3 class='register__inputs--heading'>Create a New Account</h3>
                        <os-input 
                            v-model="credentials.full_name"
                            InputType='full_name'
                            v-validate="'required|max:50|min:2'"
                            InputName='full_name'
                            data-vv-value-path="innerValue"
                            data-vv-name="full_name"
                            InputHolder="Your full name e.g Jogn Smith"
                            :InputError="errors.first('full_name')"
                            :tooltip="{position: 'right', distance: 260}"/>
                        <os-input 
                            v-model="credentials.email"
                            InputType='email'
                            v-validate="'required|email|unique'"
                            InputName='email'
                            data-vv-value-path="innerValue"
                            data-vv-name="email"
                            InputHolder="Your email e.g JognSmith@example.com"
                            :InputError="errors.first('email')"
                            :tooltip="{position: 'right', distance: 260}"/>    
                        <os-radio 
                            v-model="credentials.sex"
                            v-validate="'required|in:male,female'"
                            InputName='sex'
                            data-vv-value-path="innerValue"
                            data-vv-name="sex"
                            InputHolder="Male"
                            InputValue="male"
                            :InputDefault="true"
                            :InputError="errors.first('sex')"
                            :tooltip="{position: 'right', distance: 260}"/>    
                        <os-radio 
                            v-model="credentials.sex"
                            InputName='sex'
                            data-vv-value-path="innerValue"
                            data-vv-name="sex"
                            InputHolder="Female"
                            InputValue="female"
                            :InputError="errors.first('sex')"
                            :tooltip="{position: 'right', distance: 260}"/>    
                            
                        <os-input 
                            v-model="credentials.password"
                            InputType='password'
                            v-validate="'required|min:8|max:254'"
                            InputName='password'
                            data-vv-value-path="innerValue"
                            data-vv-name="password"
                            ref="password"
                            InputHolder="Your password e.g *********"
                            :InputError="errors.first('password')"
                            :tooltip="{position: 'right', distance: 260}"/>
                        <os-input 
                            v-model="credentials.password_confirm"
                            InputType='password'
                            v-validate="'required|confirmed:password'"
                            InputName='password_confirm'
                            data-vv-value-path="innerValue"
                            data-vv-name="password_confirm"
                            InputHolder="Re-enter your password"
                            :InputError="errors.first('password_confirm')"
                            :tooltip="{position: 'right', distance: 260}"/>
                        <button class='register__button' v-if="!loading" @click="submit">Register</button>
                    </div>

                </div>

            </div>
        </div>   


        <os-update 
          v-if="isAuth" 
          :data="Auth" 
          v-on:skip="skip" 
          v-on:update="update"/>         

    </div>         
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Hamburger from '@/assets/icons/hamburger.vue'
import FromInput from '@/components/form/input.vue'
import FromRadio from '@/components/form/radio.vue'
import Update from './update'
import { instance as axios } from '@/plugins/axios'
import { Validator } from 'vee-validate'

const check_email = {
  getMessage(field, params, data) {
      return data
  },
  validate(value) {
    return new Promise(resolve => {
       axios.post('/auth/signUp/email_check', { email: value })
      .then(response => {
          resolve({
            valid: true,
            data: undefined
          })
      })
      .catch(response => {
        //   if(response.status === 400) {
               resolve({
                valid: false,
                data: value + " is already taken"
               })
          //}
      })
    })
  }
};

Validator.extend('unique', check_email);


export default {
  props: ['data'],
  data () {
    return {
      credentials: this.data
    }
  },
  components: {
    'os-input': FromInput,
    'os-radio': FromRadio,
    'os-hamburger': Hamburger,
    'os-update': Update
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      isAuth: 'authentication/isAuth',
      Auth: 'authentication/GetAuthUser'
    })
  },
  methods: {
    ...mapActions({
    }),
    submit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
            this.$emit('submit', { ...this.credentials })
        }
      })
    },
    skip() {
        this.$router.push('/')
    },
    async update(data) {
      try{
        this.$store.commit('startLoading')
        await this.$store.dispatch('authentication/updateUser', data)
        this.$store.commit('stopLoading')
        this.$route.push('/')
      }catch(err) {
        this.$store.commit('stopLoading')
        console.log(err)
      }
    },
    isEmailUnique () {
    },
    signin() {
      this.$emit('switchComponent', {component: 'os-signin', values: this.credentials})
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.l-register {
    position: relative;
    text-align: center;

    @media all and (min-width: 768px) {
        padding: 100px 12px 12px 12px;
    }
}

.register {
    @include layout--container;
    @include layout--item;
    width: 100%;
    margin: 0;
    position: relative;
    text-align: center;

    @media only screen  and (min-width : 768px) {
        width: 600px;
        margin: auto;
        box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    }
}


.l-register__header {
    @include layout--item;
    width: 100%;
    height: 300px;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 100px 12px 12px 12px;
    margin: 0;
    position: relative;

    @media only screen  and (min-width : 768px) {
        border-radius: 3px 3px 0 0;
    }

    // @media only screen  and (min-width : 768px) {
    //     width: layout--item--width(2, 6, true);
    //     margin: 0;
    //     border-radius: 3px 0 0 3px;
    //     padding: 100px 12px 12px 12px;
    //     height: 100%;
    // }
}

.register__heading {
    width: 100%;
    padding: 12px 5px;
    font-size: 2.1em;
    color: #ffffff;
    text-align: left;

    @media all and (min-width: 479px) {
        font-size: 2.5em;
    }

    @media all and (min-width: 599px) {
        font-size: 2.7em;
    }
}

.l-register__github {
    @include layout--item;
    margin: auto;
    width: 100%;
    text-align: center;
    padding: 20px;
}

.register__github, .register__create-acount {
    width: 250px;
    margin: auto;
    padding: 8px;
    background-color: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.register__github--button {
    background-color: #504f4f;
    color: #ffffff;
}


.l-register__inputs {
    @include layout--item;
    margin: auto;

    @media all and (min-width: 768px) {
        width: 90%;
    }
    // @media only screen  and (min-width : 768px) {
    //     width: layout--item--width(2, 6, true);
    //     margin: 0;
    //     border-top: 1px solid #666666;
    //     border-right: 1px solid #666666;
    //     border-bottom: 1px solid #666666;
    //     border-radius: 0 3px 3px 0;
    //     height: 100%;
    // }
}


.register__inputs {
    @include layout--item;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 20px 0px 20px 0;
    margin: 0;

    @media only screen  and (min-width : 768px) {
        padding: 9px 0;
    }
}

.register__inputs--heading {
    width: 90%;
    color: #666666;
    font-weight: normal;
    font-size: 1.1em;
    text-align: center ;
    padding: 5px 0;
    margin: auto;
}

.register__input {
    border: 3px;
    border-radius: 3px;
    background-color: #f2f2f2;
    padding: 10px 10px;
    color: #666666;
    margin: 10px auto 0 5%;
    width: 90%;
    display: block;
}

.register__terms {
    padding: 15px 0;
    color: #666666;
    text-align: left;
    font-size: 0.9em;
    width: 90%;
    margin-left: 5%;
}

.register__button {
    width: 90%;
    color: #ffffff;
    font-size: 1.1em;
    background-color: #3EA98D;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin: 10px auto 5%;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.register__email--or {
    display: block;
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 5px 0;
    color: #a3a2a2;
    text-align: center;
    font-size: 1em;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    @media all and (min-width: 768px) {
        width: 230px;
    }
}
</style>