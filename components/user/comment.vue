<template>
  <div class='comment'>
    <div class='comment__profile'>
        <img class='comment__profile-image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg' alt='Aliakbar"s photo'>
        <span class='comment__profile-name'>{{ comment.name }}</span>
        <span class='comment__profile-date'>{{ comment.date }}</span>
    </div>
    <div class='comment__comment' :class="{'comment__comment--reply': !reply}">
        <slot></slot>
        <span class='comment__reply--button' @click="reply()">Reply</span>
    </div>

</div>
</template>
<script>
export default {
  props: {
    reply: {
      default: false
    },
    comment: {
      defult: 'test'
    }
  },
  methods: {
    reply () {
      this.$emit('reply', this.comment.name)
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.comment__profile {
    // @include layout--container;
    position: relative;
}

.comment__profile-image {
    width: 50px;
    height: 50px;
    border: 5px solid #60A4C0;
    border-radius: 50%;
}

.comment__profile-name, .comment__profile-date {
    position: absolute;
    width: 40%;
    left: 65px;
    color: #666666;
}

.comment__profile-name {
    top: 15px;
}

.comment__profile-date {
    top: 35px;
    font-size: 0.7em;
}

.comment__comment {
    position: relative;
    min-height: 120px;
    margin-left: 65px;
    margin-top: 10px;
    margin-right: 10px;
    padding: 5px;
    color: #666666;
    background-color: #F2F2F2;
}

.comment__comment--reply {
    background-color: #8CB662;
    color: #FFFFFF;
}

.comment__reply--button {
    position: absolute;
    right: 5px;
    bottom: -23px;
    color: rgb(78, 77, 77);
    cursor: pointer;
    z-index: 22;

    &:hover {
        color: rgb(130, 127, 127);
        transition: 0.3s;
    }
}
</style>