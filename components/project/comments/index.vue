<template>
	<div class="l-comments">
		<os-comment/>
		<os-comment/>
		<os-reply/>
		<os-reply/>
		<os-comment/>
		<os-comment/>
		<os-comment/>
		<os-comment/>
		<os-comment-box/>
	</div>
</template>


<script>
import Comment from '@/components/project/comments/comment/index'
import Reply from '@/components/project/comments/reply/index'
import CommentBox from '@/components/project/comments/comment_box/index'
export default {
  props: {
  },
  components: {
  	'os-comment': Comment,
  	'os-reply': Reply,
  	'os-comment-box': CommentBox
  }
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-comments {
	padding: 12px;
}
	
</style>