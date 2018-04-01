<template>
  <div class="l-cards_search">
    <div class="l-cards_search-input">
      <span class="cards_search-icon"></span>
      <input 
        type="text" 
        name="cards_search" 
        class="cards_search-input" 
        :placeholder="placeholder" 
        @keydown="input" />
    </div>
  </div>
</template>

<script>


export default {
  props: {
  	placeholder: {
  		type: String,
  		required: false
  	}
  },
  methods: {
  	input() {
  		this.$emit('input')
  	}
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/grid.scss';

.l-cards_search {
	position: relative;
  padding: 1%;
}


.l-cards_search-input {
  position: relative;
  padding: 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 0px 2px #bfadad inset;
}

.l-cards_search-input:after {
  content: '';
  clear: both;
  display: block;
}


.cards_search-input {
  display: block;
  border: none;
  width: 96%;
  height: 32px;
  float: right;
}

.cards_search-icon {
  display: block;
  float: left;
  width: 32px;
  height: 32px;
  background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png');
  background-position: 0 0px;
  background-repeat: no-repeat;
}


</style>
