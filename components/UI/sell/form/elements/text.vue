<template>

    <input 
      :name="name" 
      type='text' 
      class='input' 
      :class="{'error': error}"
      :placeholder="placeholder" 
      @input="change">

</template>

<script>
export default {
  props: {
      placeholder: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: true
      },
      error: {
        type: Boolean
      }
  },
  methods: {
    change (event) {
        this.$emit('input', event.target.value )
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';



.input {
    position: relative;
    width: 100%;
    padding: 10px 5px;
    border: none;
    border-bottom: 5px solid $default_green;
    position: relative;
    background-color: #eee;
    color: #666666;
    @include workSans_medium;
    transition: border 0.2s;
}

.input::placeholder {
    color: #666666;
}

.error {
  border-bottom: 5px solid red !important;
}



</style>
