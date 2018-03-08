<template>
<div class='cards'>

    <div class='cards__title'>
        <h2 class='cards__title--text'>Project Listigs</h2>
        <p class='cards__title--results'>284 results</p>
        <div class='cards__title--icons'>
            <i class='cards__title--icon' @click="switchCardMode"><os-filter height='20px' width='20px'/></i>
            <i class='cards__title--icon' @click="switchListMode"><os-filter height='20px' width='20px'/></i>
        </div>

        <div class='l-cards__search-box'>
            <i class='cards__title--icon cards__search-box--icon'><os-filter height='20px' width='20px'/></i>
            <input class='cards__search-box' type='text' name='search-box'>
        </div>

        <ul class='cards__list'>
            <li class='cards__list--item cards__list--item-active'>ALL <i class='cards__list--item-icon'><os-hamburger height='10px' width='10px'/></i></li>
            <li class='cards__list--item'>TOP PROJECTS <i class='cards__list--item-icon'><os-hamburger height='10px' width='10px'/></i></li>
            <li class='cards__list--item'>NEWEST <i class='cards__list--item-icon'><os-hamburger height='10px' width='10px'/></i></li>
            <!-- <li class='cards__list--item'>BEST SELLERS <i class='cards__list--item-icon'><os-hamburger height='10px' width='10px'/></i></li> -->
            <li class='cards__list--item'>FILTER <i class='cards__list--item-icon'><os-hamburger height='10px' width='10px'/></i></li>
        </ul>
    </div>

  <os-card :listings="listings" :card="cardMode"/>

</div>
</template>

<script>
import Card from './card/card.vue'
import hamburger from '@/assets/icons/hamburger.vue'
import Filter from '@/assets/icons/filter.vue'

export default {
  props: ['listings'],
//   props: {
//     listings: {
//       type: array,
//       required: true
//     }  
//   },
  data () {
    return {
      cardMode: true,
    }
  },
  components: {
    'os-card': Card,
    'os-hamburger': hamburger,
    'os-filter': Filter
  },
  methods: {
    switchListMode () {
      this.cardMode = false
    },
    switchCardMode () {
      this.cardMode = true
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.cards {
    @include layout--container;
    position: relative;
    padding: 20px 0;
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
