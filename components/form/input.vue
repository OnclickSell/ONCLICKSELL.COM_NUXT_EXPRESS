<template>
  <div class="form-input__container">
       <os-input--tooltip v-show="InputError" :distance='tooltip.distance' :error="InputError" :position="tooltip.position"/>
      <input v-bind:class="{'login__input--error': InputError}" class='login__input' :type="InputType" :placeholder="InputHolder" :name="InputName" :value="value" @input="change"/>
  </div>
</template>

<script>
import eventBus from '../../plugins/eventBus'
import InputTooltip from '@/components/others/input--tooltip.vue'
export default {
    props: {
        InputType: {
          type: String,
          required: true
        },
        InputHolder: {
          type: String,
          required: false
        },
        InputValid: {
          type: String,
          required: false
        },
        InputName: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: false
        },
        InputError: {
          type: String,
          required: false
        },
        tooltip: {
          type: Object,
          required: false,
          default: {distance: 20, position: "top"}
        }
    },
    methods: {
      change (event) {
        this.$emit('input', event.target.value )
      }
    },
    components: {
      'os-input--tooltip': InputTooltip
    }
}
</script>

<style lang="scss" scoped>

.form-input__container {
    display: block;
    position: relative;
}
.login__input {
    border: 1px solid;
    border-color: rgba($color: #ffffff, $alpha: 1.0);
    border-radius: 3px;
    background-color: rgba($color: #ffffff, $alpha: 1.0);
    padding: 10px 5px;
    color: #666666;
    margin: 10px auto 0 auto;
    width: 250px;
    display: block;
}

.login__input--error {
    border-color: red;
}
</style>
