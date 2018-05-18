<template>
	<div class="l-project__owner">
		<img class="project__owner_avatar" :src="data.avatar"/>
		<span class="project__owner_name">{{data.name}}</span>
		<p class="project__owner_description">Timing exactly when one oscillation was completed was a little challenging, so there might be some error due to the reaction time error, to reduce the error and indeed improve the reliability of my data I did 3 trials and calculated the average.</p>
	</div>
</template>


<script>
export default {
  props: ['data']
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-project__owner {
	margin: 10px 0;
	padding: 12px 0;
	position: relative;
	width: 100%;
	box-shadow: 0 0 0 1px grey;
	text-align: center;
}

.project__owner_avatar {
	width: 100px;
	height: 100px;
	margin: auto;
}

.project__owner_name {
	display: block;
	padding: 12px;
}

.project__owner_description {
	padding: 12px;
}
</style>