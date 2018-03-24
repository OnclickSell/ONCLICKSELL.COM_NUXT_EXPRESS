<template>
	<div class="project">
		<div class="item">{{project.summary}}</div>
		<!-- <h3 class="item">{{project.price}}</h3> -->
		<div class="item item1">{{project.summary}}</div>
		<p class="item">{{project.description}}</p>
	</div>
</template>


<script>
export default {
  props: {
  	project: {
  		type: Object,
  		required: true
  	}
  }
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.project {
	@include row;
	height: 1000px;
}

.item {
	@include col-xl(4);
	@media screen and (max-width: 768px) {
		@include col-xl(4);
	}
}

.item1 {
	/*@include col-xl-push(3);*/
}


	
</style>