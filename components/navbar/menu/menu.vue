<template>
    <div>
      <ul class="menu">
        <os-item class='menu_item' v-if="auth" href="/" text="NOTIFICATIONS"/>
        <os-item class='menu_item' v-if="auth" href="/collection" text="COLLECTIONS"/>
        <os-item class='menu_item' href="/sell" text="SELL NOW"/>
        <os-item class='menu_item' v-if="!auth" href="/about-us" text="ABOUT US"/>
        <os-item class='menu_item' v-if="auth" v-on:clicked="logout" text="LOGOUT"/>
        <os-item class='menu_item' v-if="!auth" href="/auth/signin" text="SIGN IN"/>
        <os-item class='menu_item' v-if="!auth" href="/auth/signup" text="SIGN UP"/>
      </ul>
    </div>
</template>

<script>
import Item from '@/components/navbar/items/item/item'
import Avatar from '@/components/navbar/profile/avatar'

export default {
  props: {
    auth: {
      required: true,
      default: ''
    }
  },
  components: {
    'os-item': Item,
    'os-avatar': Avatar
  },
  methods: {
    logout () {
      this.$store.dispatch('authentication/logOut')
      this.$router.push('/auth/sigin')
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


.menu {
    @include row;
    padding: 0;
    margin: 0;
}

.menu_item {
    @include col-xs(3);
    border-right: 1px solid #d6d2d2;
    font-size: 0.8em;
    padding: 12px;
    &:first-child {
        border-left: 1px solid #d6d2d2;
    };

    &:last-child {
        border-right: none;
    }
}

</style>




