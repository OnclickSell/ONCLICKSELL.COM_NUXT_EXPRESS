<template>
    <div class="l-dropdown">
      <span class="dropdown_button" @click="openDropDown">Menu</span>
      <ul class="dropdown" v-if="isDropDown" @click="openDropDown">
        <os-auth-controlls :auth="auth" class="dropdown_item dropdown_auth-controlls" />
        <os-item class='dropdown_item' v-if="auth" href="/" text="NOTIFICATIONS"/>
        <os-item class='dropdown_item' v-if="auth" href="/collections" text="COLLECTIONS"/>
        <os-item class='dropdown_item' href="/sell" text="SELL NOW"/>
        <os-item class='dropdown_item' href="/" text="HOME"/>
      </ul>
    </div>
</template>

<script>
import hamburger from '@/assets/icons/hamburger.vue'
import Item from '@/components/navbar/items/item/item'
import Avatar from '@/components/navbar/profile/avatar'
import AuthControlls from '@/components/navbar/controlls/auth'

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
    'os-item': Item,
    'os-avatar': Avatar,
    'os-auth-controlls': AuthControlls
  },
  data () {
    return {
      isDropDown: false
    }
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
    },
    openDropDown() {
      this.isDropDown = !this.isDropDown
    }
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-dropdown {
  text-align: center;
  position: relative;
}

.dropdown_button {
  display: inline-block;
  margin: auto;
  font-size: 1.1em;
  padding: 12px;
  text-align: center;
}

.dropdown {
    position: absolute;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    height: auto;
    width: 90%;
    background: white;
    z-index: 1000;
    border-radius: 2px;
    top: 100%;
    /*-webkit-box-shadow: 0px 0px 9px 2px #e4e4e4;
    box-shadow: 0px 0px 9px 2px #e4e4e4;*/
    border: 1px solid #e0e0e0;
}

.dropdown_item {
    width: 100%;
    border-top: 1px solid #d6d2d2;
    font-size: 0.8em;
    padding: 12px;
    &:first-child {
        border-top: none;
    };

    &:last-child {
        border-bottom: 1px solid #d6d2d2;
    }
}

.dropdown:after, .dropdown:before {
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.dropdown:after {
  border-color: rgba(0, 0, 0, 0);
  border-bottom-color: #FFFFFF;
  border-width: 30px;
  margin-left: -30px;
}
.dropdown:before {
  border-color: rgba(0, 0, 0, 0);
  border-bottom-color: #e0e0e0;
  border-width: 31px;
  margin-left: -31px;
}
</style>




