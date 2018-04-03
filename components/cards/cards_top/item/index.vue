<template>
    <div class="l-cards_top-item" :class="{'cards_top-item-active': active}">
    	<p class="cards_top-item" @click="clicked">{{text}}</p>
    </div>
</template>

<script>


export default {
  props: {
  	text: {
  		type: String,
  		required: true
  	},
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  	clicked() {
  		this.$emit('clicked')
  	}
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/grid.scss';

.l-cards_top-item {
	position: relative;
}


.cards_top-item {
	padding: 10px;
	text-align: center;
	font-size: 0.6em;
	text-transform: uppercase;
	margin: 0;
  color: #666666;
}

.cards_top-item-active {
  background: #e4e4e4;
  color: #000000;
}

.cards_top-item-active:after {
  content: "";
  display: block;
  line-height: 3px;
  margin-bottom: -3px;
  border-bottom: 3px solid #5ef520;
}

</style>
