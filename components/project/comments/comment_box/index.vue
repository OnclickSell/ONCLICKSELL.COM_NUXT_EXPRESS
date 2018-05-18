<template>
	<div class="l-comment__box">
    <label class="comment__box_label">Leave you comment here!</label>
    <textarea class="comment__box"></textarea>
    <button class="comment__box_button">Post My Comment</button>
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


.l-comment__box {
  position: relative;
  display: block;
  padding-bottom: 42px;
}

.comment__box_label {
  padding: 5px;
}
	
.comment__box {
  height: 100px;
  width: 100%;
  border: 1px solid grey;
}

.comment__box_button {
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  border-radius: 5px;
  background: green;
  color: white;
  padding: 12px;
  width: 150px;
}
</style>