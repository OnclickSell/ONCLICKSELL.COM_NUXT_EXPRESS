<template>
   

    <input 
      :name="name" 
      type='number' 
      class='basic-info__input__input' 
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
      }
  },
  methods: {
    change (event) {
        this.$emit('input', event.target.value )
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.basic-info__form {
    @include layout--container;
    position: relative;
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
