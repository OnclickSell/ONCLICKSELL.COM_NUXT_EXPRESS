<template>
    <div v-if="open" class='modal'>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: ['open'],
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    openNav () {
      this.isNavOpen = !this.isNavOpen
    }
  },
  computed: {
  },
  created () {
    // const that = this
    // window.addEventListener('resize', () => {
    //   console.log('fasfs')
    //   that.isNavOpen = true
    //   if (window.size >= 768) {
    //   }
    // })
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.modal {
    position: fixed;
    z-index: 99;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 12px;
    text-align: center;
    background-color: #666666;
    background-color: rgba($color: #000000, $alpha: 0.8)
}

</style>




