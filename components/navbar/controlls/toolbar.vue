<template>
    <ul class="toolbar" @click="clicked">
       <!--  <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}" 
          class='toolbar_item' 
          v-if="auth" href="/fasfsaf" 
          text="NOTIFICATIONS"/> -->
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          class='toolbar_item' 
          v-if="auth" 
          href="/collections" 
          text="COLLECTIONS"/>
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          class='toolbar_item' 
          href="/sell" 
          text="SELL NOW"/>
          <os-item
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}" 
          v-if="auth" 
          class='toolbar_item' 
          v-on:clicked="logout" 
          text="LOG OUT"/>
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          v-if="!auth" 
          class='toolbar_item' 
          href="/auth/signin" 
          text="SIGN IN"/>
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          v-if="!auth" 
          class='toolbar_item' 
          href="/auth/signup" 
          text="SIGN UP"/>
    </ul>
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
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
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
    clicked() {
      this.$emit('clicked')
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

    @media all and(min-width: 960px) {
      grid-column-gap: 0 !important;
      padding: 0 12px;
    }
}

.toolbar_item {
    @include col-xs(12);
    padding: 5px 0;

    @media all and(min-width: 499px) {
        padding: 2% 0;
    }

    @media all and(min-width: 768px) {
      @include col-xs(4);
    }

    @media all and(min-width: 960px) {
      border-left: 1px solid #f3f3f3;
    }
}


</style>




