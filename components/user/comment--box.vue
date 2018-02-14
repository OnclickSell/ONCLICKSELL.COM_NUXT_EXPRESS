<template>
   <div class='reply__box'>
                            <textarea type="text" name='reply-input' class='reply__input'>Type your reply..</textarea>
                            <button class='reply__button'>Reply</button>
                        </div>

</template>
<script>
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.reply__box {
    margin-left: 65px;
    text-align: right;
    padding-right: 10px;
}

.reply__input {
    width: 100%;
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