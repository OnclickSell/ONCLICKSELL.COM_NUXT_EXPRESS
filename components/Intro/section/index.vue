<template>
  <div class="home__intro--item">
      <img class='home__intro--image' :src='image'>
      <h3 class='home__intro--title'>{{title}}</h3>
      <p class='home__intro--description'>{{description}}</p>
  </div>

</template>

<script>

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
  },
  components: {
  }
}
</script>
<style lang='scss'>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';





.home__intro--item {
  position: relative;
  margin: 10px 0 0 0;
  padding: 15px;
  text-align: center;
  box-shadow: 0px 3px 9px #ababab;
  background: #FFFFFF;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
}
    
.home__intro--image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  display: block;
  box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
}

.home__intro--title {
  color: #51cea7;
  padding: 5px;
  font-size: 0.8em;
}

.home__intro--description {
  display: inline-block;
  width: 80%;
  margin: 0;
  color: #666666;
  padding: 5px;
  font-size: 0.7em;
}




</style>
