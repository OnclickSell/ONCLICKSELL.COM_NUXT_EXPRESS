<template>
    <nav class='navbar' :class="{'navbar--fixed': isNavOpen}">

        <!-- Logo --> 
        <os-logo class="navbar-logo" link="/"/>

        <!-- Logo --> 
        <os-menu :auth="user" class="menu" :class="{'menu-push': !user}" v-if="!isNavOpen"/>

        <!-- Dropdown -->

        <os-dropdown :auth="user" class="navbar_dropdown" v-if="!isNavOpen"/>

        <!-- Avatar -->

        <os-avatar :auth="user" class="navbar_avatar" v-if="isAuth" v-show="!isNavOpen"/>

        <!-- Logo --> 
        <os-slider :auth="user" v-on:clicked="openNav" class="slider" v-if="isNavOpen"/>

         <!-- Navbar Button --> 
        <os-button class="navbar-button" v-on:clicked="openNav"/>

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
    grid-auto-flow: column !important;
    width: 100%;
    height: 80px;
    z-index: 100;
    background-color: #FFFFFF;
    border-bottom: 1px solid #d6d2d2;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
}


.navbar-button {
    @include col-xs-push(12, 3);
    @media all and (min-width: 768px) {
        display: none;
    }
}


.navbar-logo {
    @include col-xs(2);
}

.menu {
    @include col-xs(7);
    height: 100%;
    display: none !important;
    @media all and (min-width: 960px) {
        display: block !important;
    }
}

.menu-push {
    @include col-xs-push(12, 7);
}


.slider {
    top: 80px;
    @include col-xs(12);
}



.navbar--fixed {
    position: fixed;
}


.navbar_dropdown {
    display: none;
    height: 100%;
    @include col-xs-push(3, 4);
    padding: 12px;
    @media all and (min-width: 768px) and (max-width: 960px) {
        display: block !important;
    }
}


.navbar_avatar {
    @include col-xs-push(12, 3);
    justify-content: space-around;
    align-items: center;
    display: none;
    border-left: 1px solid #d6d2d2;
    @media all and (max-width: 960px) {
        @include col-xs-push(12, 4)
    }
    @media all and (min-width: 768px) {
        display: flex;
    }
}





</style>




