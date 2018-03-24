<template>
    <div>
   <!--      <div class='l-subscription'>
           <div class='subscription'>

            <div class='subscription__md--float'>
               <div class='subscription__item subscription__md--top-margin'>
                   <h1 class='subscription__item--title'>Plan Name: <span>Secondary</span></h1>
                   <h1 class='subscription__item--title'>Period: <span>Monthly</span></h1>
                   <h1 class='subscription__item--title'>Value: <span>$40 USD-per Month</span></h1>
                   <div class='subscription__divider'></div>
                   <h1 class='subscription__item--title'>Total amount: <span>$30 USD</span></h1>
               </div>

                <div class='subscription__item subscription__md--top-margin subscription__below-md--hide'>
                    <p class='subscription__footer'>Your subscription will be renewed automatically at the end of this period unless you cancel it.</p>
                </div>
            </div>


            <div class='subscription__md--float subscription__md--left-border'>

               <div class='subscription__item subscription__item--top-margin'>
                   <os-input placeholder='Card Number'/>
               </div>

               <div class='subscription__item subscription__item--float'>
                   <os-input placeholder='Expire Date'/>
               </div>

               <div class='subscription__item subscription__item--float'>
                   <os-input placeholder='CVC'/>
               </div>

               <div class='subscription__item'>
                   <os-input placeholder='Card Holder Name'/>
               </div>

               <div class='subscription__item'>
                   <button class='subscription__button subscription__button--pay'>Pay $30</button>
               </div>

               <div class='subscription__item'>
                   <button class='subscription__button subscription__button--pay-pal'>Pay pal</button>
               </div>

               <div class='subscription__item subscription__item--top-margin subscription__md--hide'>
                   <div class='subscription__divider'></div>
                   <p class='subscription__footer'>Your subscription will be renewed automatically at the end of this period unless you cancel it.</p>
               </div>

           </div>

           
        </div>

    </div> -->
    
       
      <!-- <os-footer/> -->
</div>
</template>

<script>
// import Input from '@/components/sell/input.vue'

export default {
  layout: 'main--layout',
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size'
    }
  },
  components: {
    // 'os-input': Input
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.subscription__md--hide {
    @media all and (min-width: 768px) {
      display: none;
    }
}

.subscription__below-md--hide {
    @media all and (max-width: 786px) {
      display: none;
    }
}

.subscription__md--left-border {
    @media all and (min-width: 768px) {
      border-left: 1px solid #b8b8b8;
    }
}

.subscription__item--top-margin {
    margin-top: 15%;
}

.subscription__md--top-margin {
    @media all and (min-width: 768px) {
      margin-top: 15%;
    }
}

.subscription__divider {
    height: 1px;
    border-top: 1px solid #b8b8b8;
    display: block;
    width: 100%;
}


.l-subscription {
    width: 100%;
    position: relative;
    padding: 20px;
}

.subscription {
  @include layout--container;
  width: 100%;
  position: relative;
  background-color: #f2f2f2;
  padding: 20px 0;
  border-radius: 3px;
}

.subscription__item {
    @include layout--item;
    width: layout--item--width(1, 11, false);
    @include layout--item--offset(2, 1);
    padding: 10px 0;
}

.subscription__item--float {
    width: layout--item--width(2, 5, false);
}

.subscription__item--title {
    position: relative;
    font-size: 1.2em;
    color: #666666;
    padding: 5px 0px;
    width: 100%;

    > span {
        position: absolute;
        right: 5px;
        font-size: 0.8em;
        display: inline-block;
        text-align: right;
        font-weight: normal;
    }
}

.subscription__button {
    width: 100%;
    padding: 10px;
    color: #ffffff;
    margin: 5px 0;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}

.subscription__button--pay {
    background-color: #169BD5;
    border: 2px solid #169BD5;
    font-size: 1.2em;
    text-align: center;
    margin-top: 40px;

    &:hover {
        background-color: #FFFFFF;
        color: #169BD5;
        transition: 0.3s;
    }
}

.subscription__button--pay-pal {
    background-color: #FFFFFF;
    color: #666666;
}

.subscription__footer {
    width: layout--item--width(1, 10, false);
    @include layout--item--offset(4, 2);
    color: #666666;
    font-size: 0.8em;
    text-align: center;
    padding: 20px 10px;
}





.subscription__md--float {
    @include layout--item;
    width: 100%;


    @media all and (min-width: 768px) {
      width: layout--item--width(2, 6, false);
    }
}
</style>
