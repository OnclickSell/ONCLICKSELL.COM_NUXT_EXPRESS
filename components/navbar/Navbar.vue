<template>
    <!-- <nav class='navbar' :class="{'navbar--fixed': isNavOpen}"> -->
    <nav class='navbar' :class="{'navbar-open': isNavOpen}">

        <!-- Logo --> 
        <os-logo class="navbar-logo" link="/"/>

        <!-- Navbar Button --> 
        <os-button :active="isNavOpen" class="navbar_button" v-on:clicked="openNav"/>

        <!-- Logo --> 
        <os-menu :auth="user" class="navbar_menu" :class="{'menu-push': !user}" v-if="!isNavOpen"/>

        <!-- Dropdown -->

        <os-dropdown :auth="user" class="navbar_dropdown" v-if="!isNavOpen"/>

        <!-- Avatar -->

        <os-avatar :auth="user" class="navbar_avatar" v-if="isAuth" v-show="!isNavOpen"/>

        <transition name="navbar_slider">
            <!-- Logo --> 
            <os-slider :auth="user" v-on:clicked="openNav" class="navbar_slider" v-if="isNavOpen"/>
        </transition>

        

    </nav>  
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/navbar/button/button'
import Logo from '@/components/logo/logo'
import Menu from '@/components/navbar/menu/menu'
import Slider from '@/components/navbar/slider/slider'
import Avatar from '@/components/navbar/profile/avatar'
import Dropdown from '@/components/navbar/dropdown/dropdown'


export default {
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    'os-button': Button,
    'os-logo': Logo,
    'os-menu': Menu,
    'os-slider': Slider,
    'os-avatar': Avatar,
    'os-dropdown': Dropdown
  },
  data () {
    return {
      isNavOpen: false
    }
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
  },
  created() {
    const that = this
    if(process.client) {
        window.addEventListener('resize', () => {
        if (window.outerWidth > 768) {
            that.isNavOpen = false
        }
    })
    }
  },
  computed: {
    ...mapGetters({
      isAuth: 'authentication/isAuth',
      user: 'authentication/GetAuthUser'
    })
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/Css-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.navbar {
    @include row;
    grid-column-gap: 0 !important;
    grid-auto-flow: 0 !important;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
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
    @include col-xs(2);
    @media all and(min-width: 960px) {
        @include col-xs(1);
    }

    @media all and (min-width: 1200px) {
        @include col-xs(2);
    }
}

.navbar_menu {
    @include col-xs(7);
    height: 100%;
    display: none !important;
    @media all and (min-width: 960px) {
        display: block !important;
    }
}

.menu-push {
    @include col-xs-push(12, 6);
}


.navbar_slider {
    top: 80px;
    @include col-xs(12);
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


.navbar_dropdown {
    height: 100%;
    display: none;
    @include col-xs-push(3, 4);
    @media all and (min-width: 768px) {
        display: block !important;
    }

    @media all and (min-width: 960px){
        display: none !important;
    }
}


.navbar_avatar {
    @include col-xs-push(12, 3);
    justify-content: space-around;
    align-items: center;
    display: none;
    border-left: 1px solid #d6d2d2;
    @media all and (min-width: 768px) {
        @include col-xs-push(12, 4);
        display: block;
    }
    @media all and (min-width: 960px) {
        @include col-xs-push(12, 4);
    }

    @media all and (min-width: 1200px) {
        @include col-xs-push(12, 3);
    }
}





</style>




