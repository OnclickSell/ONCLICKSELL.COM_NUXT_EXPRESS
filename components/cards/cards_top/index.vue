<template>
    <div class="l-cards_top">
        <os-cards-search placeholder="Type the name of project.." class="cards_search"/>
        <span class="cards_top-heading">Results: <b>454</b></span>
        <div class="l-cards_top-filter-icon">
          <span @click="toggleFilter" :class="{'filter_open': filter}" class="cards_top-filter-icon"></span>
        </div>

        <keep-alive>
        <os-filter v-on:filterApplied="applyFilter" v-if="filter" class="l-cards_top-filter"/>
        </keep-alive>

        <div class="cards_top-links-container">
          <os-item 
            v-for="tab in tabs" 
            class="cards_top-links" 
            :active="isActive(tab)" 
            :text="tab" 
            v-on:clicked="tabSelected(tab)"/>
        </div>
    </div>
</template>



<script>
import Item from '@/components/cards/cards_top/item/index'
import CardsSearch from '@/components/cards/cards_top/search/index'
import CardsFilter from '@/components/cards/card_controllers/filter/index'

export default {
  data() {
    return {
      filter: false,
      baseFilters: {
        price: {
          min: null,
          max: null
        },
        frontend: {
          plateform: null,
          framework: null
        },
        backend: {
          plateform: null,
          framework: null
        }
      },
      tabs: [
        'All',
        'Top Projects',
        'Newest',
        'best Seller'
      ],
      activeTab: 'all'
    }
  },
  methods: {
    tabSelected(tab) {
      switch(tab.toUpperCase()) {
        case 'ALL':
        this.applyFilter({...this.baseFilters})
        break
        case 'TOP PROJECTS':
        this.applyFilter({...this.baseFilters, created_at: '02/02/208'})
        break
        case 'NEWEST':
        this.applyFilter({...this.baseFilters, created_at: '02/02/208'})
        break
        case 'BEST SELLER':
        this.applyFilter({...this.baseFilters, created_at: '02/02/208'})
        break
      }
      this.activeTab = tab
    },
    isActive(name) {
      return name.toUpperCase() == this.activeTab.toUpperCase()
    },
    toggleFilter() {
      this.filter = !this.filter
    },
    applyFilter(filters) {
      this.$emit('filterApplied', filters)
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

.cards_top-links-container {
  @include col-xs(12);
  grid-column-gap: 0 !important;
  @include row;
  border-bottom: 3px solid green;
}

.cards_top-links {
  @include col-xs(3);
  text-align: center;
  display: inline-block;

  @media all and(min-width: 599px) {
    @include col-xs(2);
  }

  @media all and(min-width: 960px) {
    @include col-xs(2);
  }
}

.cards_search {
    @include col-xs(12);
}

.filter_open {
  background-position: 0 -32px;
}

</style>
