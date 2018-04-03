<template>
    <div class="l-dropdown">
      <span class="dropdown_button" @click="toggleDropDown"></span>
      <transition name="navbar_dropdown">
        <os-toolbar v-on:clicked="toggleDropDown" v-if="isDropDown" class="dropdown"  :auth="auth"/>
      </transition>
      <!-- <ul class="dropdown" v-if="isDropDown" @click="openDropDown"> -->

        <!-- <os-item
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}" 
          class='dropdown_item' 
          v-if="auth" 
          href="/" 
          text="NOTIFICATIONS"/>
        <os-item
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}" 
          class='dropdown_item' 
          v-if="auth" 
          href="/collections" 
          text="COLLECTIONS"/>
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          class='dropdown_item' 
          href="/sell" 
          text="SELL NOW"/>
        <os-item 
          :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
          class='dropdown_item' 
          href="/" 
          text="HOME"/> -->
      <!-- </ul> -->
    </div>
</template>

<script>
import Item from '@/components/navbar/items/item/item'
import Toolbar from '@/components/navbar/controlls/toolbar'

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
    'os-item': Item,
    'os-toolbar': Toolbar
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
    toggleDropDown() {
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
}

.dropdown_button {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 6px auto;
  font-size: 1.1em;
  text-align: center;
  background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
  background-position: -96px 0px;
  background-repeat: no-repeat;
}

.dropdown {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 50px;
    height: 100px;
    justify-content: space-around;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 1px 1px 1px rgba(0, 65, 94, .2);
    /*-webkit-box-shadow: 0px 0px 9px 2px #e4e4e4;
    box-shadow: 0px 0px 9px 2px #e4e4e4;*/
    border-top: 1px solid #e0e0e0;

    &::before {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0, 0, 0, 0);
      border-bottom-color: #e0e0e0;
      border-width: 11px;
      margin-left: -11px;
    }

    &::after {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0, 0, 0, 0);
      border-bottom-color: #FFFFFF;
      border-width: 10px;
      margin-left: -10px;
    }
}




.navbar_dropdown-enter-active {
   transition: all .3s ease;
   transition-delay: 0.3s;
}

.navbar_dropdown-leave-active {
  transition: all .3s ease;
}

.navbar_dropdown-enter, .navbar_dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
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


</style>




