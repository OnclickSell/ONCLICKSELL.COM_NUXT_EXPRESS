<template>
    <div>

        <div class='l-login'>
            <div class='login'>
                <div class='l-login__inputs'>
                    <!-- <os-input--tooltip v-show="errors.has('email')" top='300'>
                        <h6 slot="title">{{errors.first('email')}}</h6>
                        <p slot="description">{{errors.first('email')}}</p>
                    </os-input--tooltip> -->
                    <input class='login__input' v-validate="'required|email'" v-model="credentials.email" type='text' name='email' placeholder="Email Address">
                    <p>{{errors.first('email')}}</p>
                    <input class='login__input' v-validate="'required'"  v-model="credentials.password" type='password' name='password' placeholder="Password">
                    <p>{{errors.first('password')}}</p>
                    <button class='login__button' @click="logIn" v-if="!loading">Login</button>
                    <span class='login__icon--arrow'>Icon</span>
                </div>

                <div class='l-login__github'>
                    <div class='login__github login__github--button'>Login With GitHub Account</div>
                    <span class='login__register--or'>OR</span>
                    <p class='login__create-acount'>Create a new account</p>
                </div>
            </div>
        </div>   

    </div>         
</template>
<script>
import { mapGetters } from 'vuex'
// import InputTooltip from '@/components/others/input--tooltip.vue'

export default {
  layout: 'main--layout',
  middleware: 'notAuth',
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/login'
    })
  },
  methods: {
    logIn () {
      this.$store.dispatch('authentication/logIn', this.credentials)
    }
  }
//   components: {
//       'os-input--tooltip': InputTooltip
//   }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.l-login {
    position: relative;
    width: 100%;
}

.login {
    @include layout--container;
    position: relative;
    width: 100%;
    margin: 0;

    @media only screen  and (min-width : 768px) {
       width: 700px;
       margin: 150px auto 0 auto;
       -webkit-box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       -moz-box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       border-radius: 4px;
    }
}

.l-login__inputs {
    @include layout--container;
    @include layout--item;
    width: 100%;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 50px 20px;
    margin: 0;
    position: relative;
    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, true);
        height: 100%;
        margin: 0;
        border-radius: 4px 0 0 4px;
        padding: 80px 50px;
    }
}

.login__input {
    border: 3px;
    border-radius: 3px;
    background-color: rgba($color: #ffffff, $alpha: 1.0);
    padding: 10px 5px;
    color: #666666;
    margin: 10px auto 0 auto;
    width: 250px;
    display: block;
}

.login__button {
    width: 100%;
    color: #ffffff;
    background-color: #3EA98D;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin: 10px auto 0 auto;
    width: 250px;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.login__icon--arrow {
    display: block;
    width: 80px;
    height: 80px;
    background: red;
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;

    @media only screen  and (min-width : 768px) {
        right: -40px;
        left: auto;
        top: 0;
        bottom: 0;
    }
}

.l-login__github {
    @include layout--item;
    width: 100%;
    text-align: center;
    padding: 50px 20px;
    margin: 0;
    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, true);
        margin: 0;
        padding: 75px 50px;
        background-color: #F8F8F8;
        border-radius: 0 4px 4px 0;
    }
}



.login__github, .login__create-acount {
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

.login__github--button {
    background-color: rgb(24, 24, 24);
    color: #ffffff;
}

.login__register--or {
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

.login__create-acount {
    color: #a3a2a2;
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    background-color: transparent;
}
</style>