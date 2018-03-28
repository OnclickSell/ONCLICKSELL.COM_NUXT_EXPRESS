
<template>
  <nuxt-link tag="p" :to="href" class='footer_link' @click="">{{text}}</nuxt-link>
</template>

<script>
export default {
 props: {
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
 }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.footer_link {
  padding: 2.5em 0;
  font-size: 0.7em;
  color: #fdfdfd;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  margin: 0;
}

.nuxt-link-exact-active {
  color: #fdfdfd !important;
}

</style>




