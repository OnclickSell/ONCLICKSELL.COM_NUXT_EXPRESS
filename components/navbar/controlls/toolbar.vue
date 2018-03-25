<template>
    <ul class="toolbar">
        <os-item class='toolbar_item' v-if="auth" href="/" text="NOTIFICATIONS"/>
        <os-item class='toolbar_item' v-if="auth" href="/collections" text="COLLECTIONS"/>
        <os-item class='toolbar_item' href="/sell" text="SELL NOW"/>
        <os-item class='toolbar_item' href="/" text="HOME"/>
    </ul>
</template>

<script>
import hamburger from '@/assets/icons/hamburger.vue'
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
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    'os-hamburger': hamburger,
    'os-item': Item
  },
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    navigate_to (link) {
      this.$router.push(link)
    },
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


.toolbar {
    @include row;
    padding: 0;
    margin: 0;
}

.toolbar_item {
    @include col-xs(12);
    padding: 4% 0;

    @media all and(min-width: 499px) {
        padding: 2% 0;
    }
}

</style>




