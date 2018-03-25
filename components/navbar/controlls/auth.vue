<template>
  <div>
    <os-item v-if="auth" class='auth_item' v-on:clicked="logout" text="LOG OUT"/>
    <os-item v-if="!auth" class='auth_item' href="/auth/signin" text="SIGN IN"/>
    <os-item v-if="!auth" class='auth_item' href="/auth/signup" text="SIGN UP"/>
  </div>
</template>

<script>
import Item from '@/components/navbar/items/item/item'

export default {
  props: {
    auth: {
      required: true
    }
  },
  created () {
    if(process.client) {
       window.addEventListener('resize', this.handleResize)
       if(window.outerWidth < 768) {
          this.isNavOpen = false
        } else {
          this.isNavOpen = true
        }
    }

  },
  components: {
    'os-item': Item
  },
  methods: {
    logout () {
      this.$store.dispatch('authentication/logOut')
      this.$router.push('/login')
    },
    handleResize (event) {
      const width = event.target.outerWidth
      if(width < 768) {
          this.isNavOpen = false
      } else {
          this.isNavOpen = true
      }
    }
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.auth_item {
    display: block;
    width: 100%;
}




</style>




