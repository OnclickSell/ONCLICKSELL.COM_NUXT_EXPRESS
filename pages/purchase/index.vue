<template>
    <div>
           <div class='purchase'>

               <div class='purchase__item purchase__project__details'>
                   <h1 class='purchase__item--title'>Plan Name: <span>Secondary</span></h1>
                   <h1 class='purchase__item--title'>Period: <span>Monthly</span></h1>
                   <h1 class='purchase__item--title'>Value: <span>$40 USD-per Month</span></h1>
                   <div class='purchase__divider'></div>
                   <h1 class='purchase__item--title'>Total amount: <span>$30 USD</span></h1>
               </div>

            
  
               
               <div class='purchase__item purchase__item--inputs'>
                   <os-input class='purchase__item purchase__input' placeholder='Card Number'/>
             
                   <os-input :fil='false' class='purchase__item purchase__input purchase__item--float' placeholder='Expire Date'/>
            
                   <os-input :fil='false' class='purchase__item purchase__input purchase__item--float' placeholder='CVC'/>

                   <os-input :fil='false' class='purchase__item purchase__input' placeholder='Card Holder Name'/>
        
                   <button  class='purchase__button purchase__button--pay'>Pay $30</button>
        
                   <button class='purchase__button purchase__button--pay-pal'>Pay pal</button>
       
                   <div class='purchase__divider'></div>
                   <p class='purchase__footer'>Your purchase will be renewed automatically at the end of this period unless you cancel it.</p>

               </div>


    </div>
    
       
</div>
</template>

<script>
import Input from '@/components/sell/input.vue'

export default {
  layout: 'main--layout',
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size'
    }
  },
  components: {
    'os-input': Input
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.purchase {
  @include layout--container;
  width: 100%;
  position: relative;
  padding: 20px 0;
  border-radius: 3px;
  height: auto;

  @media all and (min-width: 786px) {
    padding: 20px 10%;
    height: 50%;
    overflow: hidden;
  }
}

.purchase__item {
    @include layout--container;
    @include layout--item;
    position: relative;
    width: layout--item--width(1, 11, false);
    @include layout--item--offset(2, 1);
    padding: 10px 0;

     @media all and (min-width: 786px) {
      width: layout--item--width(2, 6, true);
      padding-bottom: 100%;
      margin: 0 0 -100% 0 !important;
    }
}


.purchase__project__details {
    background-color: #96D68F;
    border-radius: 3px 3px 0 0;

    @media all and (min-width: 786px) {
      border-radius: 3px 0 0 0;
    }

}

.purchase__item--title {
    position: relative;
    font-size: 1.2em;
    color: #FFFFFF;
    padding: 5px;
    width: 90%;

    > span {
        position: absolute;
        right: 5px;
        font-size: 0.8em;
        display: inline-block;
        text-align: right;
        font-weight: normal;
    }
}

.purchase__item--inputs {
    @include layout--container;
    @include layout--item;
    background-color: #f2f2f2;
    padding: 12px;

    @media all and (min-width: 786px) {
      padding: 12px 12px 100% 12px;
      border-radius: 0 3px 0 0;
      overflow: hidden;
    }
}

.purchase__input {
    @include layout--item;
    width: layout--item--width(1, 12, true);
    margin-left: 0 !important;
}


.purchase__button {
    width: 100%;
    padding: 10px;
    color: #ffffff;
    margin: 5px 0;
    border-radius: 3px;
    border: none;
    cursor: pointer;
}


.purchase__button--pay {
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

.purchase__button--pay-pal {
    background-color: #FFFFFF;
    color: #666666;
}


.purchase__footer {
    width: layout--item--width(1, 10, false);
    @include layout--item--offset(4, 2);
    color: #666666;
    font-size: 0.8em;
    text-align: center;
    padding: 20px 10px;
}



.purchase__item--float {
    width: layout--item--width(1, 5, true);
    float: none;

    @media all and (min-width: 786px) {
      width: layout--item--width(1, 7, true);
      @include layout--item;
    }
}


.purchase__divider {
    height: 1px;
    border-top: 1px solid #ffffff;
    display: block;
    width: 100%;
}
</style>
