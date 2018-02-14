<template>
    <div class='profile__payment-plans'>
        <span class='payment__methods--close' @click='close'>c</span>
        <h2 class='profile__payment-plans--title'>Payment planes</h2>
        <div class='profile__payment-plan'>
            <h3 class='profile__payment-plan--title'>Monthly</h3>
            <p class='profile__payment-plan--description'>Get paid every months</p>
        </div>

        <div class='profile__payment-plan'>
            <h3 class='profile__payment-plan--title'>Weekly</h3>
            <p class='profile__payment-plan--description'>Get paid at the end of each week</p>
        </div>

        <div class='profile__payment-plan'>
            <h3 class='profile__payment-plan--title'>On The Go</h3>
            <p class='profile__payment-plan--description'>Get paid as soon as your application is purchased.</p>
        </div>

        <button class='profile__payment-plans--button'>Change</button>

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



.profile__payment-plans {
    padding: 20px 10px;
    background-color: #FFFFFF;
    position: relative;
    border-radius: 3px;
    text-align: left;
}

.profile__payment-plans--title {
    color: #666666;
    margin-bottom: 10px;
}

.profile__payment-plan {
    padding: 5px 0px;
    border-bottom: 1px solid rgb(187, 187, 187);
    margin-top: 5px;
}

.profile__payment-plan--title {
    color: #3EA98D;
    margin: 0;
}

.profile__payment-plan--description {
    color: #666666;
    margin: 0;
}

.profile__payment-plans--button {
    padding: 7px 10px;
    text-align: center;
    color: #FFFFFF;
    background-color: #3EA98D;
    margin-top: 8px;
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