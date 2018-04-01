<template>
    
  <div class="auth_buttons">
    <button class='auth_button' @click="clicked">{{text}}</button>
    <span class="l-auth_button-link">Or <b class="auth_button-link" @click="linkClicked">{{link}}</b></a></span>
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
  @include row;
  text-align: left;
  padding: 12px 0;
}

.auth_button {
  @include col-xs(5);
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

.l-auth_button-link {
  @include col-xs(7);
  padding: 15px;
  font-size: 0.6em;
}

.auth_button-link {
  color: #149e59;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
    color: #666666;
  }
}

</style>