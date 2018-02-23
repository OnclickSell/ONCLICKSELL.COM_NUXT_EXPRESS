<template>
        <div class='l-dropdown' @click="toggle">
            <span class='dropdown__placeholder'>{{ placeholder }}</span>
            <span class='dropdown__icon'>cl</span>
            <div class='dropdown'>
                <ul class='dropdown__list' v-if="open">
                    <li class='dropdown__list--item' @click="select(key)" v-for="key in items" :key="key.id">{{ key[item] }}</li>
                </ul>
            </div>
        </div>
</template>

<script>
import InputHelp from './input--help.vue'
export default {
  props: ['placeholder', 'items', 'item'],
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    select (value) {
      this.$emit('input', value )
    }
  },
  components: {
    'os-input-help': InputHelp
  }
}
</script>
<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-dropdown {
    width: 100%;
    position: relative;
    background-color: #F2F2F2;
    padding: 10px 5px;
    border-radius: 4px;
    position: relative;
}

.dropdown__placeholder {
    display: inline-block;
    font-size: 0.7em;
    width: 80%;
    color: #666666;
}

.dropdown__icon {
    display: inline-block;
    width: 10%;
    font-size: 0.7em;
}

.dropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    right: 0;
    border-radius: 3px;
    z-index: 55;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(102,102,102,1);
    -moz-box-shadow: 0px 0px 8px 0px rgba(102,102,102,1);
    box-shadow: 0px 0px 8px 0px rgba(102,102,102,1);
}

.dropdown__list {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
}

.dropdown__list--item {
    font-size: 0.9em;
    padding: 5px 5px;
    width: 100%;
    color: #666666;

    &:hover {
        background-color: #eee;
        transition: 0.4s;
        cursor: pointer;
    }
}
</style>
