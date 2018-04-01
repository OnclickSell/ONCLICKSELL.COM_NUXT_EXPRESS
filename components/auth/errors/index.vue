<template>
  <div class="l-auth_error">
      <div class="auth_errors">
        <span class="auth_error-icon"></span>
        <span @click="clicked" class="auth_error-close">X</span>
        <p class="auth_error" v-for="error in errors">{{error.msg}}</p>
      </div>
  </div>
</template>
<script>


export default {
  props: {
    errors: {
      type: Array,
      required: false
    }
  },
  methods: {
    clicked() {
      this.$emit('closed')
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.l-auth_error {
  position: relative;
  display: block;
}

.auth_errors {
  position: relative;
  display: block;
  border-left: 5px solid orange;
  padding: 12px;
  background-color: #f2dede;
}

.auth_error {
  padding: 5px 0;
  color: #a94442;
  margin: 0;
  font-size: 0.8em;
  text-align: left;
}

.auth_error-close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.1em;
}



</style>