<template>
    <div>
        <span @click="navigate_to" class='logo'></span>
    </div>
</template>

<script>


export default {
  props: ['link'],
  methods: {
    navigate_to () {
      this.$router.push(this.link)
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.logo {
    @include layout--item;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513482432/OnclickSell.com/Logos/Onclicksell.com-160px-logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 25px;
}


@media all  and (min-width : 479px) {
   margin: 15px auto auto 70%;
}

@media all  and (min-width : 599px) {
   margin: 15px auto auto 75%;
}

@media all  and (min-width : 768px) {
   margin: 0 0 0 25px;
   height: 30px;
   width: 30px;
}


</style>




