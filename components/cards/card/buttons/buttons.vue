<template>
  
      <div class='card__buttons'>
          <os-view/>
          <os-watch/>
      </div>
           
</template>

<script>
import Watch from './watch/watch'
import Add from './add/add'
import View from './view/view'
export default {
  props: ['card', 'listings'],
  data () {
    return {
    }
  },
  methods: {
    showListing(list) {
        this.$router.push('/listings/' + list.id + '/' + list.title)
    }
  },
  components: {
    'os-add': Add,
    'os-watch': Watch,
    'os-view': View
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.card__buttons {
  display: flex;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-between;
}
</style>
