<template>
   <div class='contact__details'>
        <os-modal :open="modal">
            <os-password--change class='change__password--modal' @closeModal='toggleModal' @changePassword="changePassword"/>
        </os-modal>

        <div class='login-details'>
            <div class='login-title'>Login Details</div>
            <div class='login-email'>Email Address: <span>{{details.email}}</span></div>
            <div class='login-password'>Password: <span>**********</span></div>
            <div class='change-password' @click='toggleModal'>Change password</div>
        </div>
    </div>
</template>

<script>
import PasswordChange from './password_reset_modal'
import Modal from '@/components/modal/modal'

export default {
  props: {
      details: {
          type: Object,
          required: true
      }
  },
  data () {
    return {
      modal: false
    }
  },
  methods: {
    changePassword (newLogin) {
      this.$store.dispatch('user/ResetPassword', newLogin)
    },
    toggleModal () {
      this.modal = !this.modal
    }
  },
  computed: {
    checkAge () {
      return this.details.age ? this.details.age : 'Add you age'
    },
    firstName () {
      return this.details.full_name.split(" ")[0]
    },
    lastName () {
      return this.details.full_name.split(" ")[1]
    }
  },
  components: {
    'os-password--change': PasswordChange,
    'os-modal': Modal
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.contact__details {
    padding: 20% 12px 20px 12px;

    @media all and (min-width: 768px) {
        padding: 20% 25px 20px 25px;
    }
}

.details__title {
    font-size: 1.1em;
    font-weight: bold;
    border-bottom: 2px solid #eee;
    padding: 0 0 30px 0;
    margin: 0 0 25px 0;
}

.details__title, .details__name, .details__age, .details__email {
    position: relative;
    color: #666666;
    font-size: 1.1em;
    padding: 2px;

    span {
        position: absolute;
        right: 0;
        top: 7px;
        font-size: 0.8em;
    }
}

.address {
    margin-top: 25px;
}

.address-Zip-code, .address-street, .address-city, .address-state, .address-country {
    position: relative;
    padding: 10px 1px;
    span {
        color: #666666;
        font-size: 1em;
    }

    input {
        border: none;
        background-color: #FFFFFF;
        border-bottom: 2px solid #199ED8;
        position: absolute;
        right: 0;
        width: 60%;
    }

}

.address--button {
    padding: 10px;
    width: 100%;
    background-color: #3EA98D;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
        color: rgb(223, 220, 220);
        transition: 0.4s;
    }

    @media all and (min-width: 768px) {
        width: 30%;
    }
}

.login-details {
    margin-top: 50px;
}

.login-title {
    padding: 5px 2px;
    font-size: 1.1em;
    font-weight: bold;
    color: #666666;
    border-bottom: 2px solid #eee;
    margin-bottom: 20px;
}

.login-email, .login-password {
    color: #666666;
    padding: 5px 2px;
    text-align: left;
    position: relative;

    span {
        position: absolute;
        right: 20px;
        top: 7px;
        font-size: 0.8em;
        text-align: left;
    }
}

.change-password {
    padding: 12px 2px;
    color: blue;
    font-size: 0.9em;
    cursor: pointer;

    &:hover {
        color: rgb(62, 62, 238);
        transition: 0.3s;
    }
}

.change__password--modal {
    width: 280px;
    margin: 100px auto auto auto;

    @media all and (min-width: 768px) {
        width: 320px;
    }
}
</style>