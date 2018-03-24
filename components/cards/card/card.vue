<template>
  

    <div class='card'>      
        <div  :key="listing.id" class='l-card' v-on:click="cardClicked">
            <div class='card__title'>{{ listing.title }}</div>
            <os-card--thumbnail :src="listing.thumbnail" :alt="listing.title" />
            <div class='card__details'>
                <!-- <os-add v-on:clicked="addToCollection"/> -->
                <span v-on:click="addToCollection">{{collectionBtnText}}</span>
            </div>
            <div class='card__footer'>
                <span class='card__footer--text'>Sells: 45</span>
                <span class='card__footer--text card__footer--text-green'>$ {{ listing.price }}</span>
            </div>
        </div>
    </div>

</template>

<script>
// import Buttons from './buttons/buttons'
import CardThumbnail from '../card_controllers/thumbnail/CardThumbnail'
import AddButton from '../card_controllers/AddToCollection/AddToCollection'
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
    'os-add': AddButton
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

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.card {
    @include layout--container;
    width: 100%;
    padding: 5px;
}

.l-card {
    @include layout--item;
    width: 320px;
    height: 300px;
    border-radius: 3px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    margin-bottom: 10px;
    margin-top: 10px;
    
    /*@media all  and (min-width : 599px) {
      width: layout--item--width(3, 4, false); 
    }

    @media all  and (min-width : 960px) {
      width: layout--item--width(4, 3, false); 
    }

    @media all  and (min-width : 1200px) {
      width: layout--item--width(4, 3, false); 
    }*/
}

.card__title {
    padding: 5px;
    color: #666666;
    font-size: 0.9em;

    @media all  and (min-width : 599px) {
       padding: 12px 5px;
       font-size: 1em;
    }
}

.card__thumbnail {
    width: 100%;
    height: auto;
}

.card__details {
    @include layout--container;
    width: 100%;
    padding: 12px;
}

.card__details--love {
    @include layout--item;
    width: layout--item--width(2, 6, false);
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 12px;
}

.card__details--rating {
    @include layout--item;
    width: layout--item--width(2, 6, false);
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding: 12px;
}

.card__footer {
    @include layout--container;
    padding: 5px;
}

.card__footer--text {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    margin: 0;
    padding: 5px 2px;
    color: #666666;
    font-size: 0.8em;
    border-top: 1px solid #aca9a9 dashed;
}

.card__footer--text-green {
    color: #88f47e;
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
