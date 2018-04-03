<template>
<div class='cards'>
  <os-cards-top v-on:filterApplied="applyFilter" class="cards_top" />

  <os-card 
    class="cards__item"
    :class="{'hide_list-items': !cardMode}"
    v-for="listing in filtered" 
    :listing="listing"
    :collection="collection"
    v-on:clicked="displayListing"/>

  <os-list 
    class="list_items"
    :class="{'hide_list-items': !listMode}"
    v-for="listing in filtered" 
    :listing="listing" 
    v-on:clicked="displayListing"/>

</div>
</template>

<script>
import Card from './card/card.vue'
import CardsTop from '@/components/cards/cards_top/index'
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
      cardMode: true,
      listMode: true,
      filtered: null
    }
  },
  components: {
    'os-card': Card,
    'os-cards-top': CardsTop,
    'os-list': List
  },
  computed: {
    ...mapGetters({
        collection: 'authentication/GetAuthCollection'
    })
  },
  methods: {
    switchDisplayMode(mode) {
      switch(mode.toUpperCase()) {
        case 'CARD':
        this.listMode = false
        break
        case 'LIST':
        this.cardMode = false
        break
      }
    },
    displayListing(id) {
        this.$emit('displayListing', id)
    },
    applyFilter(filters) {
      this.filtered = this.filtered.filter((each) => {
        return each.title == 'jfasklfjsfshfsjfsafjsaf'
      })
    }
  },
  created() {
    // if(process.client) {
    //     let that = this
    //     if (window.outerWidth < 599) {
    //         that.cardMode = false
    //         that.listMode = true
    //     }else {
    //         that.listMode = false
    //         that.cardMode = true
    //     }
    //     window.addEventListener('resize', () => {
    //     if (window.outerWidth < 599) {
    //         that.cardMode = false
    //         that.listMode = true
    //     }else {
    //         that.listMode = false
    //         that.cardMode = true
    //     }
    // })
    // }
    this.filtered = [...this.listings]
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';
@import '~assets/sass/grid.scss';

.cards {
    @include row;
    position: relative;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.2rem;
}

.cards_filter, .cards_top {
    @include col-xs(12);
    overflow: hidden;
}

.cards__item {
    @include col-xs(12);
    margin-top: 3%;
    display: none;

    @media all and (min-width: 599px) {
        @include col-xs(6);
        display: block;
    }

    @media all and (min-width: 1200px) {
        @include col-xs(4);
    }

    @media all and (min-width: 1700px) {
        @include col-xs(3);
    }
}

.hide_card-items {
    display: none !important;
}

.list_items {
    @media screen and(min-width: 599px) {
        display: none;
    }
}

.hide_list-items {
    display: none !important;
}


</style>
