<template>
    
    <li class='item'><span class="item--link" @click="clicked">{{title}}</span></li>
   
</template>

<script>


export default {
  props:['title', 'link'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.item {
    display: block;
}

.item--link {
    color: blue;
    font-size: 1.1em;
}





</style>




