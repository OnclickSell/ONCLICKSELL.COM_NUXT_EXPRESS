<template>
   <div class='profile__payment-methods'>
                        <span class='payment__methods--close' @click='close'>c</span>
                        <h3 class='profile__payment-methods-title'>Payment Methods</h3>
                        <div class='profile__payment-method'>
                            <label class="profile__payment-method--radio">
                            <input type="radio" name="framework" class='profile__payment-method--input'/>
                            <span class='profile__payment-method--checkmark'></span>
                            </label>
                            <span class='profile__payment-method--icon'>icon</span>
                        </div>

                        <div class='profile__payment-method'>
                            <label class="profile__payment-method--radio">
                            <input type="radio" name="framework" class='profile__payment-method--input'/>
                            <span class='profile__payment-method--checkmark'></span>
                            </label>
                            <span class='profile__payment-method--icon'>icon</span>
                        </div>
                        <button class='profile__payment-method--button'>Add</button>

                    </div>
</template>
<script>
export default {
  methods: {
    close () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.profile__payment-methods {
    position: relative;
    padding: 20px 5px;
    background-color: #FFFFFF;
    border-radius: 3px;
}

.profile__payment-methods-title {
    color: #666666;
    margin-bottom: 30px;
    text-align: left;
}

.profile__payment-method {
    margin: 5px;
    margin-bottom: 5px;
    background-color: #F2F2F2;
    padding: 8px;
    border-radius: 3px;
}

.profile__payment-method--checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
    border-radius: 50%;
    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 5px;
        left: 5px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: white;
    }
}


.profile__payment-method--radio {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    margin-left: 5px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #666666;

    &:hover .profile__payment-method--input ~ .profile__payment-method--checkmark {
        background-color: #ccc;
    }

    .profile__payment-method--input:checked ~ .profile__payment-method--checkmark:after {
        display: block;
    }
}


.profile__payment-method--input {
    position: absolute;
    opacity: 0;

    &:checked ~ .profile__payment-method--checkmark {
        background-color: #2196F3;
    }
}

.profile__payment-method--button {
    padding: 7px;
    text-align: center;
    width: 95%;
    margin: 10px;
    background-color: #3EA98D;
    color: #FFFFFF;
    border: none;
    border-radius: 3px;
}

.payment__methods--close {
    widows: 15px;
    height: 15px;
    background-color: #FFFFFF;
    position: absolute;
    top: -10px;
    right: -10px;
}
</style>