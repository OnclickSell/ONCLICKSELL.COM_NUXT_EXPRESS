<template>
    <div class="l-cards_top">
        <os-cards-search placeholder="Type the name of project.." class="cards_search"/>
        <span class="cards_top-heading">Results: <b>454</b></span>
        <div class="l-cards_top-filter-icon"><span class="cards_top-filter-icon"></span></div>
        <keep-alive>
        <os-filter v-if="filter" class="l-cards_top-filter"/>
        </keep-alive>
        <os-item class="cards_top-items" text="All" v-on:clicked="clicked"/>
        <os-item class="cards_top-items" text="Top Projects" v-on:clicked="clicked"/>
        <os-item class="cards_top-items" text="Newest" v-on:clicked="clicked"/>
        <os-item class="cards_top-items" text="Best Seller" v-on:clicked="clicked"/>
    </div>
</template>



<script>
import Item from '@/components/cards/cards_top/item/index'
import CardsSearch from '@/components/cards/cards_top/search/index'
import CardsFilter from '@/components/cards/card_controllers/filter/index'

export default {
  data() {
    return {
        filter: true
    }
  },
  methods: {
    clicked() {
        alert('fasfsaf')
    }
  },
  components: {
    'os-item': Item,
    'os-cards-search': CardsSearch,
    'os-filter': CardsFilter
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/grid.scss';

.l-cards_top {
    @include row;
    grid-column-gap: 0 !important;
}

.cards_top-heading {
    display: inline-block;
    padding: 12px;
    @include col-xs(11);
}

.l-cards_top-filter-icon {
    @include col-xs(1);
    text-align: right;
    padding: 12px;
}


.cards_top-filter-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png');
  background-position: 0 0px;
  background-repeat: no-repeat;
}

.l-cards_top-filter {
    @include col-xs(12);
}

.cards_top-items {
    @include col-xs(2);
}

.cards_search {
    @include col-xs(12);
}

</style>
