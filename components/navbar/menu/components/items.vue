<template>
    <ul class="toolbar" @click="clicked">
       <li class="l-item">
          <span class="item__link" >
            <nuxt-link tag="span" 
              exact-active-class="item__text-active" 
              active-class="item__text-active" 
              to="/sell" 
              class="item__text">Sell Now</nuxt-link>
          </span>
       </li>
       <li v-if="auth" class="l-item">
          <span class="item__link" >
            <nuxt-link tag="span" 
              exact-active-class="item__text-active" 
              active-class="item__text-active" 
              to="/wishlist" 
              class="item__text">Wishlist</nuxt-link>
          </span>
       </li>
       <li v-if="!auth" class="l-item">
          <span class="item__link" >
            <nuxt-link tag="span" 
              exact-active-class="item__text-active" 
              active-class="item__text-active" 
              to="/auth/signin" 
              class="item__text">Sign In</nuxt-link>
          </span>
       </li>
       <li v-if="!auth" class="l-item">
          <span class="item__link" >
            <nuxt-link tag="span" 
              exact-active-class="item__text-active" 
              active-class="item__text-active" 
              to="/auth/signup" 
              class="item__text">Sign Up</nuxt-link>
          </span>
       </li>
       <li class="l-item">
          <span class="item__link" >
            <nuxt-link tag="span" 
              exact-active-class="item__text-active" 
              active-class="item__text-active" 
              to="/about-us" 
              class="item__text">About Us</nuxt-link>
          </span>
       </li>
       <li v-if="auth" class="l-item">
          <span class="item__link" >
            <span @click="logout" class="item__text">Log out</span>
          </span>
       </li>
    </ul>
</template>

<script>
export default {
  props: {
    auth: {
      required: true
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('authentication/logOut')
      this.$router.push('/login')
    },
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.toolbar {
    @include row;
    padding: 0;
    margin: 0;
}



.l-item {
    display: block;
    text-align: center;
    @include col-xs(3);
}


.item__link {
    display: inline-block;
    @include body_grey;
    @include sourceSans;
    font-size: 1em;
    transition: color 0.3s ease;
}



.item__text {
  display: inline-block;
  padding: 14px 5px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;
  @include workSans_medium;
  &:hover {
      color: #a5a5a5;
      cursor: pointer;
  }
}


.item__text-active {
  color: #a5a5a5 !important;
}

</style>




