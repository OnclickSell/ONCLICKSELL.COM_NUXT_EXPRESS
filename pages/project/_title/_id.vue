<template>
	<os-project-details :project="project"/>
</template>


<script>
import { mapGetters } from 'vuex'
import ProjectDetails from '@/components/project/index'
export default {
  layout: 'main--layout',
  data() {
  	return {
  	  projectId: this.$route.params.id,
  	  projectTitle: this.$route.params.title
  	}
  },
  computed: {
  	...mapGetters({
      listings: 'listings/getListings'
    }),
  	project() {
  		return this.listings.find(listing => listing.id == this.projectId && listing.title == this.projectTitle)
  	}
  },
  components: {
  	'os-project-details': ProjectDetails
  }
}
</script>


<style lang="scss" scoped>
	
</style>