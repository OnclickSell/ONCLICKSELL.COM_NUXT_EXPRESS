<template>
	<div class="l-projec__tech">
		<h1 class="project__title">Technologies</h1>
		<div class="project__tech">
			<h3 class="project__tech_titles">Frontend</h3>
			<div class="project__tech_items">
				<p class="project__tech_label">Framewroks</p>
				<p class="project__tech_content">Vue.js</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Plateforms</p>
				<p class="project__tech_content">JavaScript</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Libraries</p>
				<p class="project__tech_content">Axios</p>
			</div>
		</div>
		<div class="project__tech">
			<h3 class="project__tech_titles">Backend</h3>
			<div class="project__tech_items">
				<p class="project__tech_label">Framewroks</p>
				<p class="project__tech_content">Vue.js</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Plateforms</p>
				<p class="project__tech_content">JavaScript</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Libraries</p>
				<p class="project__tech_content">Axios</p>
			</div>
		</div>
		<div class="project__tech">
			<h3 class="project__tech_titles">Other Technologies</h3>
			<div class="project__tech_items">
				<p class="project__tech_label">Framewroks</p>
				<p class="project__tech_content">Vue.js</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Plateforms</p>
				<p class="project__tech_content">JavaScript</p>
			</div>
			<div class="project__tech_items">
				<p class="project__tech_label">Libraries</p>
				<p class="project__tech_content">Axios</p>
			</div>
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

.l-projec__tech {
	position: relative;
	width: 100%;
	box-shadow: 0 0 0 1px grey;
}

.project__title {
	padding: 12px;
	margin: 0;
	text-transform: uppercase;
}

.project__tech {
	margin-top: 15px;
	padding: 12px;
}

.project__tech_titles {
	@include workSans_medium;
	@include body_grey;
	margin: 0;
}

.project__tech_items {
	display: flex;
	justify-content: flex-start;
}

.project__tech_label {
	width: 40%;
	text-indent: 5%;
	@include workSans_medium;
	@include body_grey;
	margin: 0;
	padding: 5px;
}

.project__tech_content {
	@include workSans_medium;
	@include body_grey;
	margin: 0;
	padding: 5px;
}

</style>