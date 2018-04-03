<template>
  <!-- <ul class="l-navbar_authControllers">
    <li v-if="auth" class="navbar_authControllers">
      <a href="" class="navbar_authControllers-text">logout</a>
    </li>
    <li v-if="!auth" class="navbar_authControllers">
      <a href="" class="navbar_authControllers-text">Sign In</a>
    </li>
    <li v-if="!auth" class="navbar_authControllers">
      <a href="" class="navbar_authControllers-text">Sign Up</a>
    </li> -->
    <div>
    <os-
      :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}" 
      v-if="auth" 
      class='auth_item' 
      v-on:clicked="logout" 
      text="LOG OUT"/>
    <os-item 
      :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
      v-if="!auth" 
      class='auth_item' 
      href="/auth/signin" 
      text="SIGN IN"/>
    <os-item 
      :icon="{icon: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png', position: '0 0'}"
      v-if="!auth" 
      class='auth_item' 
      href="/auth/signup" 
      text="SIGN UP"/>
    </div>
  <!-- </ul> -->
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



.l_navbar_authControllers {
  display: inline-block;
  float: right;
  margin: 0px;
  padding: 0;
  background: #FFFFFF;
  margin-top: 50px;
  text-align: center;
  opacity: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.navbar_authControllers {
  list-style: none;
  margin: 0;
  padding: 0px;
  float: left;
  width: 50%;
  text-align: center;
}

.navbar_authControllers-text {
  display: inline-block;
  color: red;
  text-transform: uppercase;
  padding: 6px;
  position: relative;
  overflow: hidden!important;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.auth_item {
    display: block;
    width: 100%;
}




</style>




