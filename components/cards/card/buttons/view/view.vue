<template>
  

       <span @click="clicked" class='card__details--rating'></span>

           
</template>

<script>

export default {
  props: ['card', 'listings'],
  data () {
    return {
    }
  },
  methods: {
    clicked(list) {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.card__details--rating {
    display: inline-block;
    width: 40px;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 12px;
}

</style>
