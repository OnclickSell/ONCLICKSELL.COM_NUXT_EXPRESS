<template>
  <div class="main__layout">
      <os-navbar/>
    <nuxt/>
      <os-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  middleware: 'checkAuth',
  components: {
    'os-navbar': Navbar,
    'os-footer': Footer
  }
}
</script>
<style lang="scss">
.main__layout {
    min-height: 100%;
}
</style>
