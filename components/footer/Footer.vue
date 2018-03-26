
<template>

    <!-- Main bottom footer -->
    <div class='footer'>
        <ul class='footer__list'>
            <li class='footer__list--item'><h3>Sign Up</h3></li>
            <li class='footer__list--item'><h3>Top Projects</h3></li>
            <li class='footer__list--item'><h3>Best Sellers</h3></li>
        </ul>
    
        <ul class='footer__list'>
            <li class='footer__list--item'><h3>Sign Up</h3></li>
            <li class='footer__list--item'><h3>Top Projects</h3></li>
            <li class='footer__list--item'><h3>Sellers</h3></li>
        </ul>
    
        <ul class='footer__list'>
            <li class='footer__list--item'><h3>Sign Up</h3></li>
            <li class='footer__list--item'><h3>Top Projects</h3></li>
            <li class='footer__list--item'><h3>Best Sellers</h3></li>
        </ul>
    
        <ul class='footer__list'>
            <li class='footer__list--item'>
                <h3>Follow Us</h3>
                <i class='footer--social--icon f__facebook'></i>
                <i class='footer--social--icon f__twitter'></i>
            </li>
        </ul>

        <!-- footer copyright notice container -->
        <div id='footer__copyright'>
            <p>@ 2017 - OnclickSell.com. All rights reserved.</p>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    isAuth () {
      return true
    }
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.footer {
    @include layout--container;
    background-color: #F7F7F7;
    width: 100%;
    width: 100%;
    z-index: 50;
    padding: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.footer__list {
    @include layout--container;
    @include layout--item;
    width: layout--item--width(2, 6, true);
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0 0 0 15px;

    @media all  and (min-width : 599px) {
        padding: 0 0 0 10%;
    }
    
    @media all  and (min-width : 960px) {
        padding: 0 0 0 5%;
        width: layout--item--width(4, 3, true);
    }

    // @media only screen  and (min-width : 768px) {
    //     width: layout--item--width(4, 3, false);
    //     padding-left: 4%;
    //     margin-bottom: 30px;
    // }
    }

.footer__list--item {
    padding-top: 2px;
    padding-bottom: 2px;

    > h3 {
        color: #999999;
        font-family: 'PT Sans', cursive;
        font-size: 0.9em;
        font-weight: normal;
        cursor: pointer;

        &:hover {
           color: #dfd6d6;
           transition: color 0.3s;
        }
    }
}

#footer__copyright {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    padding-top: 15px;

    @media all  and (min-width : 960px) {
       padding-top: 25px;
    }

    > p {
        width: 100%;
        padding-top: 8px;
        text-align: center;
        color: #999999;
        font-family: 'PT Sans', cursive;
        font-size: 0.9em;
        border-top: 1px solid #ede8e8;
    }
}














/* Bottom Main footer styles */
.main-bottom-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
}

.bottom--footer--container {
    height: 230px;
    padding-top: 30px;
}

.footer-options-lists {
    list-style: none;
    margin: 0;
    padding: 0;
}

.footer-options-lists li {
   font-family: 'PT Sans', cursive;
   color: #999999;
   padding-top: 2px;
   /* padding: 2px; */
}


 /* footer options links */
.footer-options-lists li > span {
    cursor: pointer;
}

.footer--social--icon {
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    width: 32px;
    height: 32px;
    cursor: pointer;
}

.f__facebook {
    background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513558653/OnclickSell.com/Icons/Onclicksell.com-footer-facebook-icon-grey-32px.svg');
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513558653/OnclickSell.com/Icons/Onclicksell.com-footer-facebook-icon-grey-32px.svg');
}

.f__twitter {
    background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513558653/OnclickSell.com/Icons/Onclicksell.com-footer-Twitter-icon-grey-32px.png');
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513558653/OnclickSell.com/Icons/Onclicksell.com-footer-Twitter-icon-grey-32px.png');
}

.f-copyright-notice-content {
    border-top: 1px solid rgb(228, 226, 226);
    color: #999999;
    padding: 10px;
}




@media only screen  and (min-width : 768px) {
   .bottom--footer--container {
     height: 135px;
   }
}


</style>




