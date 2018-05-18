<template>
	<div class="l-reply">
    <div class="reply__avatar__wraper">
      <img class="reply__avatar" src="http://res.cloudinary.com/onclicksell-com/image/upload/v1526094232/OnclickSell.com/Projects/Thumbnails/upload_14658a898151c52135458902b161a645_hlpvpv.jpg"/>
    </div>
    <div class="reply__content">
        <p class="reply__name">Aliakbar Sultani - Replied</p>
        <p class="reply__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Lorem ipsum dolor sit amet, </p>
    </div>
	</div>
</template>


<script>
export default {
  props: {
  },
  components: {
  }
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-reply {
  display: flex;
	padding: 12px;
}

.reply__avatar__wraper {
  width: 80px;
}

.reply__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.reply__content {
  position: relative;
  padding: 0 12px;
}

.reply__name {
  margin: 0;
}

.reply__text {
  padding: 5px;
  border: 1px solid grey;
}

	
</style>