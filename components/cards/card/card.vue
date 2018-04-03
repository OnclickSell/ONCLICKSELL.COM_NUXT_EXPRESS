<template>
  <div class='l-card' :key="listing.id">
    <div class="card" @click.self="cardClicked">
        <!-- Thumbnail-->
        <div class="card_thumbnail" @click="cardClicked">
          <div class="card_feature">New</div>
          <img :src="listing.thumbnail">
        </div>
        <!-- Post Content-->
        <div class="card_content" @click.self="cardClicked">
          <div class="card_price" @click.self="cardClicked">${{ellipsis('4000', 9)}}</div>
          <h1 class="card_content-title" @click.self="cardClicked">{{ ellipsis(listing.title, 30) }}</h1>
          <h2 class="card_content-sub_title" @click.self="cardClicked">The city that never sleeps.</h2>
          <p class="card_content-description" @click.self="cardClicked">{{ ellipsis(listing.description, 80)}}</p>
          <div class="card_controlls">
            <span class="card_controlls-add"></span>
            <span class="card_controlls-card"></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// import Buttons from './buttons/buttons'
import CardThumbnail from '../card_controllers/thumbnail/CardThumbnail'
import AddButton from '../card_controllers/AddToCollection/AddToCollection'
import CardButtons from '@/components/cards/card/buttons/index'
export default {
  props: {
    listing: {
      type: Object,
      required: true
    },
    collection: {
      type: Array,
      required: true,
      default: []
    }
  },
  data () {
    return {
      collectionIds: []
    }
  },
  methods: {
    ellipsis(string, limit) {
      let dots = "...";
      if(string.length > limit)
        string = string.substring(0, limit) + dots
      return string
    },
    // showListing(list) {
    //   alert(list.id)
    //     this.$router.push('/listings/' + list.id + '/' + list.title)
    // },
    cardClicked() {
      this.$emit('clicked', this.listing.id)
    },
    addToCollection() {
      alert('Added to collection')
      this.$store.dispatch('user/addToCollection', this.listing.id)
    }
  },
  components: {
    // 'os-buttons': Buttons,
    'os-card--thumbnail': CardThumbnail,
    'os-add': AddButton,
    'os-card-buttons': CardButtons
  },
  computed: {
    collectionBtnText() {
      return this.collectionIds.indexOf(this.listing.id) !== -1 ? 'Remove' : 'Add'
    }
  },
  created() {
    this.collectionIds = this.collection.map(each => each.listing_id) || []
  }
}
</script>

<style lang='scss'>

@container_width: 800px;

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';


@import 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-97/variables.less';
@import 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/mixins.less';



.l-card {
  position: relative;
  text-align: center;
}

.card {
  position: relative;
  z-index: 1;
  display: inline-block;
  box-shadow: 1px 1px 6px #d8d2d2;
  background: #FFFFFF;
  width: 270px;
  height: 360px;
  &:hover {
    cursor: pointer;
    .card_thumbnail {
      img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        opacity: .6;
      }
    }
    .post-content {
    }
  }  
}

.card_thumbnail {
    background: #000000;
    height: 360px;
    overflow: hidden;
    .card_feature {
      border-radius: 50%;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
      background: #51cea7;
      width: 55px;
      height: 55px;
      padding: 12.5px 0;
      color: #FFFFFF;
      font-weight: 700;
      text-align: center;
    }
    img {
      transition: .600s ease;
      display: block;
      width: 100%;
    }
  }

.card_content {
    position: absolute;
    text-align: left;
    bottom: 0;
    background: #FFFFFF;
    width: 100%;
    padding: 12px;
  
    .card_price {
      position: absolute;
      top: -38px;
      left: 0;
      background: #51cea7;
      padding: 10px 15px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .card_content-title {
      margin: 0;
      padding: 0 0 10px;
      color: grey;
      font-size: 1em;
      @include workSans_medium;
      text-align: left;
    }
    .card_content-sub_title {
      margin: 0;
      padding: 0 0 20px;
      color: green;
      font-size: 0.9em;
      font-weight: 400;
    }
    .card_content-description {
      /*display: none;*/
      height: 60px;
      color: grey;
      font-size: 0.7em;
      line-height: 1.7em;
      margin: 0;
      margin-bottom: 45px;
    }
    .card_controlls {
      color: grey;
      height: 40px;
      padding: 5px;
      text-align: right;
      box-shadow: 0px -1px 1px gainsboro;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      .card_controlls-card {
        display: inline-block;
        margin: 0 16px 0 0;
        width: 32px;
        height: 32px;
        background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
        background-position: -96px 0px;
        background-repeat: no-repeat;

      }
      .card_controlls-add {
        display: inline-block;
        margin: 0 16px 0 0;
        width: 32px;
        height: 32px;
        background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
        background-position: -96px 0px;
        background-repeat: no-repeat;
      }
    }
  }

</style>
