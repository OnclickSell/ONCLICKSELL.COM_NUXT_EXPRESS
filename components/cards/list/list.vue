<template>
  
    <!-- <div class='l-list' :key="listing.id"  @click="listClicked">
        <div class='list list--active'>
            <div class='list__title'>{{ listing.title }}</div>
            <div class='list__icon'>
                <i></i>
            </div>
            <div class='list__sells'>
                <span>Sells: 45</span>
            </div>
            <div class='list__price'>
                <span>$ {{ listing.price }}</span>
            </div>
        </div>

    </div> -->


    <div class="l-list">
        <div class="list" :key="listing.id"  @click="listClicked">
            <span class="list_feature">New</span>
            <div class="list_thumbnail" v-bind:style="{background: 'url(' + listing.thumbnails[0].url + ')'}"></div>
            <div class="list_drop"></div>
            <div class="list_content">
              <h1 class="list_title">{{ listing.title }}</h1>
              <h2 class="list_sub-title">Opening a door to the future</h2>
              <p class="list_summary">{{ ellipsis(listing.description, 80)}}</p>
              <div class="list_controlls">
                  <span class="list_price">${{ 4385 }} USD</span>
                  <span class="list_controlls-card"></span>
                  <span class="list_controlls-add"></span>
              </div>
            </div>
        </div>
</div>

</template>

<script>
// import Buttons from './buttons/buttons'
// import Thumbnail from './thumbnail/thumbnail'
export default {
  props: {
    listing: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ellipsis(string, limit) {
      let dots = "...";
      if(string.length > limit)
        string = string.substring(0, limit) + dots
      return string
    },
    listClicked() {
      this.$emit('clicked', this.listing._id)
    }
  },
  components: {
    // 'os-buttons': Buttons,
    // 'os-card--thumbnail': Thumbnail
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';



/*PEN STYLES*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700);
$green: #75D13B;
$grey: #e9e9e9;

@mixin transition($dur, $prop: all) {
  transition: $prop $dur ease;
  -webkit-transition: $prop $dur ease;
}

@mixin bgImg($url) {
  background: url($url) center no-repeat;
  background-size: cover;
}

body {background: #f1f1f1; margin: 2rem}

.l-list {
  position: relative;
  @include col-xs(12);
  padding: 12px;
}

.list {
  @include transition(0.3s, height);
  height: 160px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
  padding: 0;
  overflow: hidden;
  position: relative;
  font-size: 14px;
  line-height: 1.45em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover {
    cursor: pointer;
    .list_drop {
      left: 0;
    }
  }

  .list_thumbnail {
    height: 100%;
    position: relative;
    background: url('http://i62.tinypic.com/34oq4o0.jpg');
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }

  .list_drop {
    @include transition(0.3s);
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    color: #fff;
    font-family: "Open Sans";
    list-style: none;
    margin: 0;
    padding: 10px 15px;
    height: 100%;

    /*POSITION*/
    position: absolute;
    top: 0;
    left: -100%;
  }

  .list_content {
    background: #FFFFFF;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    float: left;
    width: 60%;
    z-index: 0;

    &:before {
      transform: skewX(-5deg);
      content: "";
      background: #fff;
      width: 100%;
      z-index: -1;

      /*POSITION*/
      position: absolute;
      left: -15px;
      top: 0;
      bottom: -7px;
    }

    .list_title {
      @include workSans_medium;
      font-size: 1.1em;
      line-height: 1em;
      margin: 0 0 10px 0;
    }

    .list_sub-title {
      color: $grey / 1.5;
      font-family: "Open Sans";
      line-height: 1.2em;
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: 400;
      margin: 1.2% 0;
    }

    .list_summary {
      position: relative;
      margin: 0;
      height: 60px;
      padding-top: 10px;
    }
  }
}


.list_controlls {
  position: relative;
  padding: 5px;
  width: 100%;
  height: 40px;
  text-align: right;
}

.list_price {
  position: absolute;
  left: 0;
  bottom: 2px;
  font-size: 1.1em;
  color: green;
}

.list_controlls-card, .list_controlls-add {
  height: 32px;
  width: 32px;
  display: inline-block;
  background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
  background-position: 0 0px;
  background-repeat: no-repeat;
}

.list_feature {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  color: #FFFFFF;
  font-size: 0.9em;
  text-align: center;
  width: 100px;
  padding: 10px 5px;
  background: #3dbf54;
}

@media screen and (min-width: 200px) {
  .list {

    &:hover {
      .list_thumbnail {
        transform: rotate(5deg) scale(1.3);
      }
    }

    .list_thumbnail {
      @include transition(0.5s);
      float: left;
      height: 100%;
      width: 40%;
    }

    .list_drop {
      width: 40%;
    }
  }
}

</style>
