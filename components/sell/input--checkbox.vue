<template>
         <div class='l-radio'>
            <h1 class='radio__title'>{{ title }}</h1>
            <label class='radio__button' v-for='option in options' :key='option'>{{ option }}
            <input type="radio" :name="title" class='frontend__radio-input'>
            <span class="radio__checkmark"></span>
            </label>
        </div>
</template>

<script>
export default {
  props: ['title', 'options', 'default'],
  components: {
  }
}
</script>
<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-radio {
    width: 100%;
    padding: 5px;
}

.radio__title {
    font-size: 1em;
    color: #666666;
    padding: 12px 0;
}

.radio__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
    }
}


.radio__button {
    display: inline-block;
    width: 40%;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #666666;

    &:hover .frontend__radio-input ~ .radio__checkmark {
        background-color: #ccc;
    }

    .frontend__radio-input:checked ~ .radio__checkmark:after {
        display: block;
    }
}


.frontend__radio-input {
    position: absolute;
    opacity: 0;

    &:checked ~ .radio__checkmark {
        background-color: #2196F3;
    }
}
</style>
