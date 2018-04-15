<template>
  <div class="auth_input">
      <label class="auth_input-title">{{title}}</label>
      <input 
        v-bind:class="{'login__input--error': InputError}" 
        class='auth_input-field' 
        :type="InputType" 
        :placeholder="InputHolder" 
        :name="InputName" 
        :value="value" 
        @input="change"/>
  </div>
</template>

<script>
export default {
    props: {
        title: {
          type: String,
          required: true
        },
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
        }
    },
    methods: {
      change (event) {
        this.$emit('input', event.target.value )
      }
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/default.scss';

.auth_input {
    display: block;
    position: relative;
}

.auth_input-title {
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.8em;
  padding: 2px;
  color: #d6d6d6;
}

.auth_input-field {
    padding: 10px 5px;
    @include body_grey;
    width: 100%;
    border: none;
    border-bottom: 1px solid #cecece;
}

.subscribe_field-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-size: 0.9em;
}
.subscribe_field-input::-moz-placeholder { /* Firefox 19+ */
  font-size: 0.9em;
}
.subscribe_field-input:-ms-input-placeholder { /* IE 10+ */
  font-size: 0.9em;
}
.subscribe_field-input:-moz-placeholder { /* Firefox 18- */
  font-size: 0.9em;
}

</style>
