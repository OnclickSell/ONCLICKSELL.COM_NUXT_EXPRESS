<template>
  
<div>

    <img class='card__thumbnail' 
    :alt='alt' 
    :src='src'>

</div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    showListing(list) {
        this.$router.push('/listings/' + list.id + '/' + list.title)
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




.card__thumbnail {
    width: 100%;
    height: auto;
}




</style>
