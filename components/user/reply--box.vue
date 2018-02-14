<template>
    <div class='reply__box'>
        <textarea type="text" row="30" name='reply-input' class='reply__input'>Type your reply..</textarea>
        <button class='reply__button'>Reply</button>
    </div>
</template>
<script>
export default {
  methods: {
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.reply__box {
    text-align: right;
    padding-right: 10px;
}

.reply__input {
    width: 100%;
    min-height: 200px;
    margin: 10px 0 10px 0;
    background-color: #F2F2F2;
    color: #666666;
    padding: 12px;
    border: none;
}

.reply__button {
    width: 100px;
    padding: 10px 5px;
    text-align: center;
    color: #ffffff;
    margin-left: auto;
    background-color: #3EA98D;
    border-radius: 3px;
    border: none;
}
</style>