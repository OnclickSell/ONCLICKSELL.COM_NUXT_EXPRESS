<template>
    <textarea 
      @input="change" 
      type='text'
      rows="10"
      :placeholder="placeholder"
      :name="name"
      class='basic-info__input__input basic-info__textarea--stop-v-resize xs-p-a-2'/>
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
  data() {
    return {
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

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.basic-info__form {
    @include layout--container;
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
