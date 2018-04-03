<template>
  <div class="l-dropdown" @click.self="toggle">
    <span class="dropdown_title" @click.self="toggle">
      <i 
        v-for="each in selectedValues"
        @click="unselect(each)"
        :class="{'dropdown_not-selected': !isInSelected(each) }"
        class="dropdown_selected">{{each}}</i>
    </span>
    <span class="dropdown_icon" :class="{'dropdown_open': open}" @click.self="toggle"></span>
    <keep-alive>
    <div v-if="open" class="dropdown_content">
      <p v-for="value in values" class="dropdown_items" >
        <input 
            type="checkbox" 
            :value="value"
            :checked="isInSelected(value)" 
            @click="select(value)"/>    
          {{value}}
      </p>
             
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
      selected: []
    }
  },
  components: {
  },
  computed: {
    selectedValues() {
      return this.selected.length < 1 ? [this.placeholder] : this.selected
    }
  },
  methods: {
    isInSelected(value) {
     return this.selected.indexOf(value) !== -1
    },
    unselect(value) {
      if (this.isInSelected(value))
        this.selected.splice(this.selected.indexOf(value), 1)
    },
    select(value) {
      if (this.isInSelected(value))
        this.selected.splice(this.selected.indexOf(value), 1)
      else
        this.selected.push(value)
      this.$emit('selected', this.selected)
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
    overflow: hidden;
}

.dropdown_selected {
  padding: 5px;
  margin: 0 2px;
  background-color: orange;
  border-radius: 4px;
}

.dropdown_not-selected {
  background: transparent;
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
    overflow-y: scroll;
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
