<template>
	<div class="l-project__details">
		<h1 class="project__details_title">https://wwww.OnClickSell.com</h1>
		<p class="project__summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut.</p>
		<p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
		<div class="project__price"><span>Price:</span>$4549USD</div>
		<div class="l-project__rating">
			Rating goes here
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

.l-project__details {
	margin: 10px 0;
	position: relative;
	width: 100%;
	box-shadow: 0 0 0 1px grey;
}

.project__details_title {
	padding: 12px;
	margin: 0;
	text-transform: uppercase;
	font-size: 1em;
}

.project__summary {
	padding: 12px;
}

.project__description {
	padding: 12px;
}

.project__price {
	padding: 12px;
	> span {
		font-weight: bold;
		display: inline-block;
		margin-right: 5px;
	}
}

.l-project__rating {
	border-top: 1px solid grey;
	padding: 12px;
}

</style>