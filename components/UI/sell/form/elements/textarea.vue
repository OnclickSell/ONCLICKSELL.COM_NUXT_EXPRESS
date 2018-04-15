<template>
    <textarea 
      @input="change" 
      type='text'
      rows="10"
      :placeholder="placeholder"
      :name="name"
      class='textarea'/>
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



.textarea {
  display: block;
  width: 100%;
  resize: vertical;
  background-color: #eee;
  border-radius: 3px 3px 0 0;
  padding: 12px;
  border: none;
  border-bottom: 5px solid $default_green;
  @include workSans_medium;
}

</style>
