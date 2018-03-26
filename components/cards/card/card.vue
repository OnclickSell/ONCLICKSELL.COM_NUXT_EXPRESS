<template>
    <div class='l-card'>      
        <div  :key="listing.id" class='card' @click.self="cardClicked">
            <os-card--thumbnail :src="listing.thumbnail" :alt="listing.title" class="card_thumbnail" />
            <div class='card_section'>
                <div class='card_title'>{{ ellipsis(listing.title, 30) }}</div>
                <div class='card_summary'>{{ ellipsis(listing.summary, 80)}}</div>
            </div>
            <div class='card_footer'>
                <span class='card_price'>${{ellipsis('4000', 9)}} USD</span>
                <os-card-buttons :listing="listing" class="card_buttons"/>
               <!--  <span v-on:click="addToCollection">{{collectionBtnText}}</span> -->
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

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';


.l-card {
  position: relative;
  text-align: center;
}

.card {
  display: inline-block;
  width: 350px;
  height: 400px;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
  margin-bottom: 10px;
  margin-top: 10px;
}

.card_thumbnail {
  height: 190px;
  width: 100%;
  overflow: hidden;
}


.card_section {
  height: 170px;
  width: 100%;
  text-align: left;
}

.card_title {
  padding: 25px;
  color: #252323;
  font-size: 1em;
  font-weight: bold;
  font-family: $lato;
  /* Adding tree to the end of text */
  /*text-overflow: ellipsis;
  white-space: nowrap;*/
}

.card_summary {
  padding: 0 25px;
  color: #666666;
  font-size: 0.9em;
}


.card_footer {
  @include row;
  width: 100%;
  height: 40px;
  padding: 5px 25px;
}

.card_price {
  @include col-xs(8);
  font-size: 1.2em;
  color: #79bf95;
  text-align: left;
}

.card_buttons {
  @include col-xs(4);
  text-align: right;
}






.l-list {
    @include layout--container;
    width: 100%;
}

.list {
  @include layout--container;
  @include layout--item;
  margin: 0;
  border-bottom: 1px solid #bfbebe dashed;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
      background-color: #f2f0f0;
      transition: 0.4s;
  }
}

.list--active {
  border-left: 4px solid green;
}

.list__title {
  @include layout--item;
  width: layout--item--width(4, 5, false);
  color: #666666;
  font-size: 0.8em;
}

.list__icon {
  @include layout--item;
  width: layout--item--width(4, 2, false);
  background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 12px;
}

.list__price {
  @include layout--item;
  width: layout--item--width(4, 3, false);
  color: #3DC052;
  font-size: 0.8em;
  text-align: right;

  @media all  and (min-width : 960px) {
    text-align: center;
  }
}

.list__sells {
  @include layout--item;
  width: layout--item--width(4, 2, false);
  font-size: 0.7em;
  text-align: right;
  color: #666666;
}





.List--container {
    @include layout--container;
    width: 100%;
    border-left: 4px solid green;
    border-bottom: 1px solid rgb(221, 215, 215);
    border-bottom-style: dashed;
    display: block;
    height: auto;
    overflow: hidden;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgb(235, 244, 235);
        transition: background-color 0.4s;
    }

    > div {
        @include layout--item;
    }

    .List__title {
        width: layout--item--width(3, 6, false);
        padding: 12px;
        color: #3694ed;
        margin-right: 0;
        margin-left: 0;

        @media only screen  and (min-width : 768px) {
            width: layout--item--width(3, 4, false);
        }
    }

    .List__buttons {
        width: layout--item--width(3, 2, false);
        padding: 12px 0;

        > i {
            background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
            background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
            background-position: center;
            background-repeat: no-repeat;
            display: block;
            height: 16px;
            width: 16px;
            margin-right: auto;
        }
    }

    .List__price {
        width: layout--item--width(3, 4, false);
        margin-right: 0;
        margin-left: 7.5%;
        padding: 12px 0;

        @media only screen  and (min-width : 540px) {
            margin-left: 5%;
            padding-right: 1%;
        }
        
        @media only screen  and (min-width : 768px) {
            margin-left: 3%;
            padding-right: 1%;
            width: layout--item--width(3, 6, false);
        }

        > span {
            display: block;
            width: 100%;
            color: #88f47e;
            font-size: 1em;
            padding: 2px 0 2px 0;
            text-align: right;
        }
    }

    .List__footer {
        width: layout--item--width(1, 12, false);

        > span {
            display: block;
            color: #999999;
            font-size: 0.9em;
            padding: 2px 0 2px 0;
        }
    }
}
</style>
