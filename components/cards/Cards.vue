<template>
<div class='cards'>

  <os-card-filter style="{width: 100%}" v-on:SwitchDisplayMode="switchDisplayMode"/>

  <os-card 
    class="cards__item"
    v-show="DisplayMode == 'card'" 
    v-for="listing in listings" 
    :listing="listing"
    :collection="collection"
    v-on:clicked="displayListing"/>

  <os-list 
    v-show="DisplayMode == 'list'" 
    v-for="listing in listings" 
    :listing="listing" 
    v-on:clicked="displayListing"/>

</div>
</template>

<script>
import Card from './card/card.vue'
import hamburger from '@/assets/icons/hamburger.vue'
import Filter from '@/assets/icons/filter.vue'
import filter from '@/components/cards/card_controllers/filter/filter'
import List from '@/components/cards/list/list'
import { mapGetters } from 'vuex'

export default {
  props: {
    listings: {
        type: Array,
        required: true
    }
  },
  data () {
    return {
      DisplayMode: 'card'
    }
  },
  components: {
    'os-card': Card,
    'os-hamburger': hamburger,
    'os-filter': Filter,
    'os-card-filter': filter,
    'os-list': List
  },
  computed: {
    ...mapGetters({
        collection: 'authentication/GetAuthCollection'
    })
  },
  methods: {
    switchDisplayMode(mode) {
      this.DisplayMode = mode
    },
    displayListing(id) {
        this.$emit('displayListing', id)
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.cards {
    @include layout--container;
    position: relative;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.cards__item {
    width: 50%;
}

.cards__title {
    @include layout--container;
    position: relative;
    padding: 5px;
}

.cards__title--text {
    @include layout--item;
    width: layout--item--width(3, 5, true);
    margin: 0;
    padding-left: 5px;
    display: inline-block;
    color: #666666;
    font-size: 1.2em;

    @media all and (min-width: 479px) {
        width: layout--item--width(3, 3, true);
    }

    @media all and (min-width: 599px) {
        width: layout--item--width(3, 3, true);
    }

    @media all and (min-width: 768px) {
        width: layout--item--width(3, 2, true);
    }

    @media all and (min-width: 1200px) {
        width: 13%;
    }
}

.cards__title--results {
    @include layout--item;
    width: layout--item--width(3, 4, true);
    margin: 0;
    padding: 3px 0;
    color: #666666;
    font-size: 1em;

    @media all and (min-width: 479px) {
        width: layout--item--width(3, 6, true);
        padding-left: 10px;
    }

    @media all and (min-width: 599px) {
        width: layout--item--width(3, 6, true);
    }

    @media all and (min-width: 768px) {
        width: layout--item--width(3, 7, true);
    }

    @media all and (min-width: 960px) {
        padding-left: 0;
    }

    @media all and (min-width: 1200px) {
        width: layout--item--width(5, 8, false);
    }
}

.cards__title--icons {
    @include layout--item;
    width: layout--item--width(3, 3, true);
    margin: 0;
    display: inline-block;
    text-align: right;
}

.cards__title--icon {
    padding: 2px 5px;
    margin-left: auto;
}

.l-cards__search-box {
    @include layout--container;
    @include layout--item;
    position: relative;
    padding: 20px 0 10px 5px;
    width: layout--item--width(1, 12, true);
    margin: 0;
}

.cards__search-box {
    @include layout--item;
    width: layout--item--width(1, 12, true);
    margin: 0;
    border: none;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    text-indent: 20px;

    @media all and (min-width: 479px) {
        width: layout--item--width(1, 10, true);
    }

    @media all and (min-width: 479px) {
        width: layout--item--width(1, 9, true);
    }

    @media all and (min-width: 960px) {
        width: layout--item--width(1, 7, true);
    }
}

.cards__search-box--icon {
    position: absolute;
    top: 28px;
    left: 5px;
}

.cards__list {
    @include layout--item;
    width: layout--item--width(1, 12, true);
    padding: 5px 0;
    margin: 0;
    list-style: none;
}

.cards__list--item {
    display: inline-block;
    margin-left: 4%;
    padding: 5px 0px;
    color: #666666;
    font-size: 0.9em;
    cursor: pointer;

    &:hover {
        color: #b6b5b5;
        transition: color 0.3s;
    }

    @media all and (min-width: 479px) {
        margin-left: 8%;
        text-align: center;
    }

    @media all and (min-width: 479px) {
        margin-left: 2%;
    }
    
}



.cards__list--item-active {
    color: #3DC052;
}



</style>
