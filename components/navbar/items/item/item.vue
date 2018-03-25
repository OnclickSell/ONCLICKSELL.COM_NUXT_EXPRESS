<template>
    
  <li class="l-item">
    <nuxt-link v-if="href" tag="span" :to="href" class="item__link" @click="clicked">
        <span class="item__icon"></span>
        <span class="item__text">{{text}}</span>
    </nuxt-link>

    <span v-else="href" class="item__link" @click="clicked">
        <span class="item__icon"></span>
        <span class="item__text">{{text}}</span>
    </span>
  </li>
   
</template>

<script>


export default {
  props: {
    text: {
      type: String,
      required: true,
      default: 'Some Text'
    },
    href: {
      type: String,
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-item {
    display: block;
    text-align: center;
}

.item__link {
    display: inline-block;
    color: #b9b9b9;
    font-family: $default--lato;
    font-weight: bold;
    font-size: 1.2em;
    &:hover {
      color: #97b5ec;
    }
}

.item__icon {
  background: url('http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
  width: 40px;
  height: 40px;
  margin: auto;
}





</style>




