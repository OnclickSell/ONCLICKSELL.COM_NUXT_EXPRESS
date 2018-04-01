<template>
    <div class="l-cards_top-item">
    	<p class="cards_top-item" @click="clicked">{{text}}</p>
    </div>
</template>

<script>


export default {
  props: {
  	text: {
  		type: String,
  		required: true
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
	border-bottom: 3px solid green;
}


.cards_top-item {
	padding: 5px;
	text-align: center;
	font-size: 0.9em;
	text-transform: uppercase;
	margin: 0;
}

</style>
