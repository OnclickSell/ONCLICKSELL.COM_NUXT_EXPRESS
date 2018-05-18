<template>
    <!-- <nav class='navbar' :class="{'navbar--fixed': isNavOpen}"> -->
    <nav class='navbar' :class="{'navbar-open': isNavOpen}">

        <!-- Logo --> 
        <os-logo class="navbar-logo" link="/"/>

        <!-- Navbar Button --> 
        <os-button :active="isNavOpen" class="navbar_button" v-on:clicked="openNav"/>

        <!-- Logo --> 
        <os-menu :auth="user" class="navbar_menu" v-if="!isNavOpen"/>

        <transition name="navbar_slider">
            <!-- Logo --> 
            <os-slider 
                :auth="user" 
                v-on:clicked="openNav" 
                class="navbar_slider" 
                :class="{'space_top': !user}" 
                v-if="isNavOpen"/>
        </transition>

        

    </nav>  
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/navbar/button/button'
import Logo from '@/components/logo/logo'
import Menu from '@/components/navbar/menu/index'
import Slider from '@/components/navbar/slider/slider'


export default {
  components: {
    'os-button': Button,
    'os-logo': Logo,
    'os-menu': Menu,
    'os-slider': Slider
  },
  data () {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'authentication/GetAuthUser'
    })
  },
  methods: {
    openNav () {
        if(window.outerWidth < 768) {
            this.isNavOpen = !this.isNavOpen
            if(this.isNavOpen)
                document.getElementsByTagName('body')[0].style.overflow = 'hidden'
            else 
                document.getElementsByTagName('body')[0].style.overflow = 'auto'
        }

    },
    handleResize (width) {
      if(width > 768) {
          this.isNavOpen = false
      } else {
          this.isNavOpen = this.isNavOpen
      }
    }
  },
  created() {
    const that = this
    if(process.client) {
        window.addEventListener('resize', () => {
        that.handleResize(window.outerWidth)
    })
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/Css-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.navbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
    background-color: #FFFFFF;
    box-shadow: 0 0 1px rgba(0,65,94,0.2);
    transition: height 600ms 0s ease;
}

.navbar-open {
    height: 100%;
    overflow: visible;
}


.navbar_button {
    position: absolute;
    right: 8px;
    top: 10px;
    @media all and (min-width: 768px) {
        display: none;
    }
}



.navbar-logo {
   position: absolute;
   left: 0;
   top: 0;
   width: 150px;
}

.navbar_menu {
    width: 100%;
    height: 100%;
    display: none !important;
    @media all and (min-width: 768px) {
        display: flex !important;
    }
}



.navbar_slider {
    top: 55px;
    width: 100%;
    @media screen and (min-height: 490px) {
      top: 80px;
    }
}

.space_top {
    top: 100px !important;
}

.navbar_slider-enter-active {
   transition: all .3s ease;
   transition-delay: 0.3s;
}

.navbar_slider-leave-active {
  transition: all .3s ease;
}

.navbar_slider-enter, .navbar_slider-leave-to {
  transform: translateY(10px);
  opacity: 0;
}



.navbar--fixed {
    position: fixed;
}



</style>




