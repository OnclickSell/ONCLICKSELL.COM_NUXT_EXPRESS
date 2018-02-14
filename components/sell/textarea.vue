<template>
    <form class='basic-info__form'>
        <label class='textarea__title'>{{ title }}</label>
        <os-input--tooltip top='170' v-if='false'>
            <span slot='title'>Title is too long!</span>
            <span slot='description'>Just for testing!</span>
        </os-input--tooltip>
        <textarea type='text' rows="10" class='basic-info__input__input basic-info__textarea--stop-v-resize xs-p-a-2'></textarea>
    </form>
</template>

<script>
import InputTooltip from '@/components/others/input--tooltip.vue'
export default {
  props: ['placeholder', 'title'],
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
    padding-top: 40px;
}

.basic-info__textarea--stop-v-resize {
    resize: vertical;
    background-color: #eee;
    margin-top: 5px;
    padding: 5px;
    border-radius: 3px 3px 0 0;
}

.textarea__title {
    color: #666666;
    padding: 12px 0px;
}


</style>
