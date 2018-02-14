<template>
    <form class='basic-info__form'>
        <os-input--tooltip top='50' v-if='false'>
            <span slot='title'>Title is too long!</span>
            <span slot='description'>Just for testing!</span>
        </os-input--tooltip>
        <label class='input__title'>{{ title }}</label>
        <input :class="{'input__fill': fill}" type='text' class='basic-info__input__input' :placeholder="placeholder">
    </form>
</template>

<script>
import InputTooltip from '@/components/others/input--tooltip.vue'
export default {
  props: ['placeholder', 'title', { fill: { default: true } }],
  components: {
    'os-input--tooltip': InputTooltip
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.basic-info__form {
    @include layout--container;
}

.basic-info__input-help {
    width: 90%;
    margin-left: 5%;
    text-align: right;
    font-size: 0.9em;
    text-decoration: underline;
    color: #666666;

    &:hover {
        cursor: pointer;
        color: #ccc8c8;
        transition: 0.3s;
    }
}

.basic-info__input__input {
    width: 100%;
    padding: 5px 0 4px 0;
    border: none;
    border-bottom: 5px solid #8CB662;
    position: relative;
    background-color: transparent;
}

.input__fill {
     background-color: #ffffff;
}

.basic-info__input__input::placeholder {
    color: #3c3b3b;
}

.input__title {
    color: #666666;
    font-size: 1em;
    padding: 8px 0px;
}


</style>
