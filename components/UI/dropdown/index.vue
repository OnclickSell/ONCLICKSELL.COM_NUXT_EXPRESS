<template>
  <div class="l-dropdown" @click="toggle">
    <span class="dropdown_title">{{text}}</span>
    <span class="dropdown_icon" :class="{'dropdown_open': open}" ></span>
    <keep-alive>
    <div v-if="open" class="dropdown_content">
        <p 
            v-for="value in values" 
            class="dropdown_items" 
            @click="selecte(value.value)">{{value.name}}</p>          
    </div>
    </keep-alive>
  </div>
</template>

<script>

export default {
  props: {
    values: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    }
  },
  data () {
    return {
      open: false,
      selected: ''
    }
  },
  components: {
  },
  computed: {
    text() {
        return this.selected.length > 0? this.selected : this.placeholder
    }
  },
  methods: {
    selecte(value) {
      this.selected = value
      this.$emit('selected', value)
    },
    toggle(id) {
      this.open = !this.open
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/default.scss';
@import '~assets/sass/grid.scss';

.l-dropdown {
    position: relative;
    box-shadow: 0px 0px 2px #bfadad inset;
    border-radius: 3px;
    padding: 12px;
    text-align: left;
}

.l-dropdown:after {
    content: '';
    clear: both;
    display: block;
}

.dropdown_title {
    display: inline-block;
    text-align: left;
    padding: 5px;
    font-size: 0.9em;
}

.dropdown_icon {
  float: right;
  display: block;
  width: 32px;
  height: 32px;
  background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png');
  background-position: 0 0px;
  background-repeat: no-repeat;
}

.dropdown_content {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;
    top: 110%;
    width: 100%;
    max-height: 150px;
    overflow: scroll;
    box-shadow: 0px 0px 2px #bfadad inset;
    border-radius: 3px;
    background-color: #FFFFFF;
}

.dropdown_items {
    margin: 0;
    padding: 12px;
    text-align: left;
}

.dropdown_open {
    background-position: 0 -32px;
}


</style>
