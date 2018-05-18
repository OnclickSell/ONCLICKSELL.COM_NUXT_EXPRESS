<template>
	<div class="l-projec">
		<os-thumbnail :data="project.thumbnails"/>
		<div class="l-project__details_wraper">
			<os-details :data="project"/>
			<os-technology :data="project"/>
			<os-owner :data="project.user"/>
			<os-thumbnail :data="project.thumbnails"/>
		</div>
		<os-comments/>

	</div>
</template>


<script>
import Thumbnail from '@/components/project/Thumbnails/index'
import Details from '@/components/project/details/index'
import Technology from '@/components/project/technologies/index'
import Owner from '@/components/project/owner/index'
import Comments from '@/components/project/comments/index'
export default {
  props: {
  	project: {
  		type: Object,
  		required: true
  	}
  },
  components: {
  	'os-thumbnail': Thumbnail,
  	'os-details': Details,
  	'os-technology': Technology,
  	'os-owner': Owner,
  	'os-comments': Comments
  }
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-project {
	width: 100%;
}

.l-project__details_wraper {
	padding: 12px;
}

	
</style>