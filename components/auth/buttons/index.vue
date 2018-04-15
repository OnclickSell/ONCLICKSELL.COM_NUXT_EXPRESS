<template>
  <div class="auth_buttons">

      <button class='auth_button' @click="clicked">{{text}}</button>
      <div class="auth_button-or">Or You Can  <span class="auth_button-link" @click="linkClicked">{{link}}</span></div>
      
  
  </div>

</template>
<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    },
    linkClicked() {
      this.$emit('linkClicked')
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/grid.scss';


.auth_buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.auth_button {
  width: 100%;
  display: inline-block;
  color: #ffffff;
  background-color: #3EA98D;
  border: none;
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;
  &:hover {
      color: #d5d5d5;
      transition: 0.4s;
  }
}

.auth_button-or {
  width: 100%;
  padding: 5px;
  margin: 10px auto 10px auto;
  border-bottom: 1px solid #e8e1e1;
  border-top: 1px solid #e8e1e1;
  font-size: 0.7em;
  text-transform: uppercase;
}

.auth_button-link {
  width: 100%;
  color: #149e59;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #666666;
  }
}

</style>