<template>
  
     <button class='view'>VIEW</button>
           
</template>

<script>

export default {
  methods: {
    showListing(list) {
        this.$router.push('/listings/' + list.id + '/' + list.title)
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.view {
  padding: 8px 20px;
  border: 1px solid #3DC052;
  border-radius: 4px;
  background-color: #FFFFFF;
  color: #666666;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
      color: #FFFFFF;
      background-color: #3DC052;
      transition: 0.3s;
  }

  @media all  and (min-width : 599px) {
     padding: 8px 35px;
  }
}


</style>
