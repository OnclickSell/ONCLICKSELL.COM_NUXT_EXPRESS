<template>
   <ul class="slider_items">
       <li v-if="!isAuth" class="l-item">
          <span class="item__link" >
            <span class="item__icon"></span>
            <nuxt-link tag="span" to="/auth/signin" class="item__text">Sign In</nuxt-link>
          </span>
       </li>
       <li v-if="!isAuth" class="l-item">
          <span class="item__link" >
            <span class="item__icon"></span>
            <nuxt-link tag="span" to="/auth/signup" class="item__text">Sign Up</nuxt-link>
          </span>
       </li>
       <li class="l-item">
          <span class="item__link" >
            <span class="item__icon"></span>
            <nuxt-link tag="span" to="/sell" class="item__text">Sell Now</nuxt-link>
          </span>
       </li>
       <li v-if="isAuth" class="l-item">
          <span class="item__link" >
            <span class="item__icon"></span>
            <nuxt-link tag="span" to="/wishlist" class="item__text">Wishlist</nuxt-link>
          </span>
       </li>
       <li class="l-item" v-if="!isAuth">
          <span class="item__link" >
            <span class="item__icon"></span>
            <nuxt-link tag="span" to="/about-us" class="item__text">About Us</nuxt-link>
          </span>
       </li>
       <li v-if="isAuth" class="l-item">
          <span class="item__link" >
            <span class="item__icon"></span>
            <span @click="logout" class="item__text">Log out</span>
          </span>
       </li>
    </ul>
   
</template>
<script>


export default {
  props: ['isAuth'],
  methods: {
    logout () {
      this.$store.dispatch('authentication/logOut')
      this.$router.push('/login')
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.slider_items {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
}

.l-item {
    display: block;
    text-align: center;
}


.item__link {
    display: inline-block;
    @include body_grey;
    @include sourceSans;
    font-size: 1em;
    transition: color 0.3s ease;

    @media all and(min-width: 960px) {
      width: 80%;
    }
}



.item__icon {
  background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
  display: block;
  background-repeat: no-repeat;
  background-position: 0 0;
  display: block;
  width: 32px;
  height: 32px;
  margin: auto;
}

.item__text {
  font-size: 1.3em;
  display: block;
  padding: 2px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  @include workSans_medium;
  @media screen and (min-height: 490px) {
    font-size: 1.6em;
  }

  &:hover {
      color: #a5a5a5;
      cursor: pointer;
  }
}


</style>




