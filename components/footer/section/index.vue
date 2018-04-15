
<template>
    <div class="footer_section">
        <div class="l-footer_subscribe">
            <p class="footer_subscribe_title">Subscribe to our newsletter to be updated of any greate deals ! :)</p>
            <button class="footer_subscribe_button">Subscribe Now</button>    
        </div>
        
       <!--  <div class="footer_section-subscribe">
            <os-footer-subscribe/>
        </div> -->
    </div>
</template>

<script>
import Subscribe from '@/components/footer/subscribe/index'
export default {
  components: {
    'os-footer-subscribe': Subscribe
  }
}
</script>


<style lang='scss'>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.footer_section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url('https://wallpapertag.com/wallpaper/full/d/a/b/53590-top-office-background-2000x1095.jpg');
    background-repeat: no-repeat;
    background-position: cover;
    /*filter:grayscale(100%);*/
    height: 300px;
}

.l-footer_subscribe {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.footer_subscribe_button {
    margin-top: 20px;
    width: 65%;
    padding:  15px 20px;
    color: #FFFFFF;
    text-align: center;
    font-size: 1.1em;
    border: none;
    background-color: #3dc053;
    border-radius: 3px;
    filter: none;
    text-transform: uppercase;
    letter-spacing: 3px;

    @media all and (min-width: 599px) {
      width: 55%;
    }

    @media all and (min-width: 700px) {
      width: 40%;
    }

    @media all and (min-width: 960px) {
      width: 35%;
    }

    @media all and (min-width: 1000px) {
      width: 30%;
    }

    @media all and (min-width: 1200px) {
      width: 25%;
    }
}

.footer_subscribe_title {
    width: 80%;
    font-size: 2.1em;
    text-align: center;
    color: #FFFFFF;
    @include sourceSans_extra-light;
    margin: 0;
}

.footer_section-subscribe {
    display: inline-block;
    width: 70%;
}



</style>




