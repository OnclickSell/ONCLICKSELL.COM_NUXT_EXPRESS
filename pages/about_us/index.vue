<template>
    <div>
        <div class='l-about-us'>
            <div class='about-us__intro'>
                <h3 class='about-us__title'>"The best and <br/> fastest way to sell <br/> and buy web based <br/> projects."</h3>
                <img class='about-us__image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513738715/OnclickSell.com/Photos/Conceptional-Home-Page-Final-Design.png'/>
            </div>

            <div class='about-us__item'>
                <h1 class='about-us__item--title'>What is OnclickSell.com</h1>
                <p class='about-us__item--content'>OnclickSell.com is an online web based projects marketplace, where you can find thousand of web based applications and draft project uploaded by senior and janior web developer.</p>
            </div>

            <div class='about-us__item'>
                <h1 class='about-us__item--title'>What is OnclickSell.com</h1>
                <p class='about-us__item--content'>OnclickSell.com is an online web based projects marketplace, where you can find thousand of web based applications and draft project uploaded by senior and janior web developer.</p>
            </div>

            <div class='about-us__item'>
                <h1 class='about-us__item--title'>What is OnclickSell.com</h1>
                <p class='about-us__item--content'>OnclickSell.com is an online web based projects marketplace, where you can find thousand of web based applications and draft project uploaded by senior and janior web developer.</p>
            </div>
        </div>
        

    </div>         
</template>
<script>

export default {
  layout: 'main--layout',
  components: {
    'os-navbar': Navbar
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.l-about-us {
    @include layout--container;
    position: relative;
    width: 100%;
}

.about-us__intro {
    @include layout--item;
    position: relative;
    width: 100%;
    margin: 0;

    @media all and (min-width: 479px) {
        margin: 0 0 20px 0;
    }
}

.about-us__title {
    width: 100%;
    font-size: 2em;
    color: #FFFFFF;
    padding: 12px 5px;
    font-style: italic;
    position: absolute;
    margin: auto;
    right: 0;
    left: 10px;
    top: 20px;

    @media all and (min-width: 479px) {
        font-size: 2.2em;
    }

    @media all and (min-width: 768px) {
        top: 40px;
        font-size: 3em;
    }
}

.about-us__image {
    width: 100%;
    height: auto;
}

.about-us__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    padding: 5px;
    margin: 10px 0 10px 0;

    @media all and (min-width: 768px) {
        width: layout--item--width(2, 6, false);
    }
}

.about-us__item--title {
    padding: 10px 0;
    color: #666666;
    font-size: 1.3em;
}

.about-us__item--content {
    padding: 5px;
    color: #666666;
    font-size: 1em;
    border-left: 4px solid #3DC052;
}





























.l-login {
    position: relative;
    width: 100%;
}

.login {
    @include layout--container;
    position: relative;
    width: 100%;
    margin: 0;

    @media only screen  and (min-width : 768px) {
       width: 700px;
       margin: 150px auto 0 auto;
       -webkit-box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       -moz-box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       box-shadow: 0px 0px 8px 0px rgba(102,102,102,0.63);
       border-radius: 4px;
    }
}

.l-login__inputs {
    @include layout--container;
    @include layout--item;
    width: 100%;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 50px 20px;
    margin: 0;
    position: relative;
    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, true);
        height: 100%;
        margin: 0;
        border-radius: 4px 0 0 4px;
        padding: 80px 50px;
    }
}

.login__input {
    border: 3px;
    border-radius: 3px;
    background-color: rgba($color: #ffffff, $alpha: 1.0);
    padding: 10px 5px;
    color: #666666;
    margin: 10px auto 0 auto;
    width: 250px;
    display: block;
}

.login__button {
    width: 100%;
    color: #ffffff;
    background-color: #3EA98D;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin: 10px auto 0 auto;
    width: 250px;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.login__icon--arrow {
    display: block;
    width: 80px;
    height: 80px;
    background: red;
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;

    @media only screen  and (min-width : 768px) {
        right: -40px;
        left: auto;
        top: 0;
        bottom: 0;
    }
}

.l-login__github {
    @include layout--item;
    width: 100%;
    text-align: center;
    padding: 50px 20px;
    margin: 0;
    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, true);
        margin: 0;
        padding: 75px 50px;
        background-color: #F8F8F8;
        border-radius: 0 4px 4px 0;
    }
}



.login__github, .login__create-acount {
    width: 250px;
    margin: auto;
    padding: 8px;
    background-color: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.login__github--button {
    background-color: rgb(24, 24, 24);
    color: #ffffff;
}

.login__register--or {
    display: block;
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 5px 0;
    color: #a3a2a2;
    text-align: center;
    font-size: 1em;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    @media all and (min-width: 768px) {
        width: 230px;
    }
}

.login__create-acount {
    color: #a3a2a2;
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    background-color: transparent;
}
</style>