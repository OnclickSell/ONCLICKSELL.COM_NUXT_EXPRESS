<template>
    <div class='basic-info__button--container'><button @click="clicked" class='basic-info__button'>{{ title }}</button></div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    clicked () {

      this.$emit('clicked')

    }
  },
  components: {
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.basic-info__button {
    background-color: #3EA98D;
    border: 1px solid #3EA98D;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 1.2em;
    padding: 10px 5px;
    text-align: center;
    width: 100%;

    @media all and (min-width: 768px) {
        width: 40%;
    }

    &:hover {
        color: #3EA98D;
        border-color: #3EA98D;
        transition: 0.4s;
        background-color: #FFFFFF;
        cursor: pointer;
    }
}


</style>
