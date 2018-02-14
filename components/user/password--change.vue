<template>
    <div class='l-password__change'>
                        <span class='password__change--close-icon' @click='close'><os-filter width="15px" height="15px"/></span>
                        <div class='password__change'>
                            <h3 class='password__change--title'>Current Password</h3>
                            <input class='password__change--input' v-model="loginDetails.oldPassword" placeholder="Type here..." type='password' name='current_password'/>
                            <span class='password__change--icon'>Show</span>
                        </div>

                        <div class='password__change'>
                            <h3 class='password__change--title'>New Password</h3>
                            <input class='password__change--input' v-model="loginDetails.newPassword" placeholder="Type here..." type='password' name='new_password'/>
                            <span class='password__change--icon'>Show</span>
                        </div>

                        <div class='password__change'>
                            <h3 class='password__change--title'>Confirm Password</h3>
                            <input class='password__change--input' v-model="loginDetails.confirmPassword" placeholder="Type here..." type='password' name='confirm_password'/>
                            <span class='password__change--icon'>Show</span>
                        </div>

                        <button class='password__change--button' @click='changePassword'>Change</button>

                    </div>
</template>
<script>
export default {
  data () {
    return {
      loginDetails: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  computed: {
    newLoginDetails() {
      return {
          description: '',
          password: this.loginDetails.newPassword,
          age: '',
          profile_picture: ''
      }
    }
  },
  methods: {
    close () {
      this.$emit('closeModal')
    },
    changePassword () {
      this.$emit('changePassword', this.newLoginDetails)
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-password__change {
    position: relative;
    padding: 20px 10px;
    background-color: #FFFFFF;
    border-radius: 3px;
}

.password__change--close-icon {
    position: absolute;
    right: -5px;
    top: -5px;
    background-color: #FFFFFF;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.password__change {
    padding: 5px 0px;
    margin-top: 5px;
    position: relative;
}

.password__change--title {
    color: #3EA98D;
    margin: 0;
    font-size: 1em;
    text-align: left;
}

.password__change--input {
    color: #666666;
    margin: 0;
    border: none;
    background-color: #FFFFFF;
    width: 100%;
    padding: 6px 0 3px 0;
    border-bottom: 1px solid rgb(187, 187, 187);
}
.password__change--input::placeholder {
    font-size: 0.9em;
}

.password__change--icon {
   position: absolute;
   right: 0;
   bottom: 5px;
}


.password__change--button {
    padding: 12px;
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    background-color: #3EA98D;
    margin-top: 15px;
    border: none;
    border-radius: 3px;
}
</style>