<template>
<div class='l-new-letter'>
<h1 class='new-letter__title'>Subscribe to our newsletter and <br/> be notified of any new project</h1>
<div class='l-new-letter__input'>
    <input type="email" name='email-address' class='new-letter__input' placeholder="Email Address">
    <button class='new-letter__button'>Subscribe</button>
</div>

</div>
</template>

<script>

export default {
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-new-letter {
    @include layout--container;
    position: relative;
    padding: 10% 12px;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.new-letter__title {
    width: layout--item--width(1, 12, true);
    margin: 0;
    padding: 12px;
    text-align: center;
    color: #FFFFFF;
    font-size: 1.2em;

    @media all and (min-width: 479px) {
        font-size: 1.5em;
    }

    @media all and (min-width: 599px) {
        font-size: 2em;
        padding: 25px 12px;
    }

    @media all and (min-width: 960px) {
        font-size: 2.5em;
    }
}

.l-new-letter__input {
    @include layout--container;
    @include layout--item;
    width: layout--item--width(1, 12, false);

    @media all and (min-width: 479px) {
        width: layout--item--width(1, 9, false);
        @include layout--item--offset(1, 2);
    }

    @media all and (min-width: 768px) {
        width: layout--item--width(1, 7, false);
        @include layout--item--offset(1, 3);
    }

    @media all and (min-width: 1200px) {
        width: layout--item--width(1, 5, false);
        @include layout--item--offset(6, 4);
    }
}

.new-letter__input {
    @include layout--item;
    width: layout--item--width(2, 8, false);
    padding: 10px 10px;
    color: #666666;
    border-radius: 30px;
    border: none;
}

.new-letter__button {
    @include layout--item;
    width: layout--item--width(2, 4, false);
    padding: 10px;
    border-radius: 30px;
    border: none;
    background-color: #3DC052;
    color: #FFFFFF;
}

</style>
