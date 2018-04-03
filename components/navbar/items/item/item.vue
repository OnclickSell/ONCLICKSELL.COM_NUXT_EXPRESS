<template>
    
  <li class="l-item">
    <span v-if="href" class="item__link" @click="clicked">
      <span class="l-item__icon">
        <span 
          class="item__icon" 
          v-bind:style="{backgroundImage: 'url(' + icon.icon + ')', backgroundPosition: icon.position}"></span>
      </span>
      <nuxt-link tag="span" :to="href" class="item__text">{{text}}</nuxt-link>
    </span>

    <span v-else="href" class="item__link">
      <span class="l-item__icon">
        <span 
          class="item__icon" 
          v-bind:style="{backgroundImage: 'url(' + icon.icon + ')', backgroundPosition: icon.position}"></span>
      </span>
      <span class="item__text" @click="clicked">{{text}}</span>
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
    },
    icon: {
      type: Object,
      required: false
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
@import '~assets/sass/default.scss';



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

.l-item__icon {
  display: block;
  width: 200px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f2f4;

  @media all and(min-width: 758px) {
    width: 150px;
  }

  @media all and(min-width: 960px) {
    width: 100%;
  }
}

.item__icon {
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width: 32px;
  height: 32px;
  margin: auto;

  @media all and(min-width: 960px) {
    width: 16px;
    height: 16px;
  }
}

.item__text {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  transition: color 0.3s ease;
  @include workSans_medium;

  &:hover {
      color: #a5a5a5;
      cursor: pointer;
  }

  @media all and(min-width: 960px) {
    padding: 0 5px;
  }
}





</style>




