<template>
	<div class="l-comment">
    <div class="comment__avatar__wraper">
      <img class="comment__avatar" src="http://res.cloudinary.com/onclicksell-com/image/upload/v1526094232/OnclickSell.com/Projects/Thumbnails/upload_14658a898151c52135458902b161a645_hlpvpv.jpg"/>
    </div>
    <div class="comment__content">
        <p class="comment__name">Aliakbar Sultani</p>
        <p class="comment__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Lorem ipsum dolor sit amet, </p>
        <button class="comment__reply">Reply</button>
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

.l-comment {
  display: flex;
	padding: 12px;
}

.comment__avatar__wraper {
  width: 80px;
}

.comment__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.comment__content {
  position: relative;
  padding: 0 12px;
  padding-bottom: 15px;
}

.comment__name {
  margin: 0;
}

.comment__text {
  padding: 5px;
  border: 1px solid grey;
}

.comment__reply {
  position: absolute;
  right: 12px;
  bottom: 0;
  width: 80px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: white;
  background: green;
}

	
</style>