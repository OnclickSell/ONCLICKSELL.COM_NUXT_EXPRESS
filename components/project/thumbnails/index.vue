<template>
	<div class="l-thumbnails">
		<img class="thumbnails__main" :src="data[0].url"/>
		<div class="thumbnails__wraper">
			<img class="thumbnails" v-for="thumbnail in data" :src="thumbnail.url">
		</div>
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

.l-thumbnails {
	width: 100%;
}

.thumbnails__main {
	width: 100%;
	height: auto;
}

.thumbnails__wraper {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 12px;
}


.thumbnails {
	width: 40%;
	height: 40%;
}

	
</style>