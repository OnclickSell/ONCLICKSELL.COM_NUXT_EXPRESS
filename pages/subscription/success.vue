<template>
    <div>
<!--         <div class='l-subscription__success'>
           <div class='subscription__success'>

               <div class='subscription__success--item'>
                   <h1 class='subscription__success--title'>THANK YOU!</h1>
                   <div class='subscription__success--icon'>Icon</div>
               </div>

               <div class='subscription__success--item'>
                   <div class='subscription__success--details'>
                       <p class='subscription__success--details-heading'>You have been successfully subscribed to the 'Secondary' plan.</p>
                       <div class='subscription__success--details-item'>Details</div>
                       <div class='subscription__success--details-item'><div class='subscription__success--divider'></div></div>
                       <div class='subscription__success--details-item'>Plan Name: <span>Secondary</span></div>
                       <div class='subscription__success--details-item'>Period: <span>Monthly</span></div>
                       <div class='subscription__success--details-item'>Value: <span>$ 30 USD - Per Month</span></div>
                       <div class='subscription__success--details-item'>Next renew date: <span>10/12/2017</span></div>
                   </div>
               </div>

               <div class='subscription__success--item subscription__success--button '>
                   <os-button title='Take me to my project set up page'></os-button>
               </div>

           </div>

        </div> -->
    
       
      <!-- <os-footer/> -->
</div>
</template>

<script>
// import Input from '@/components/sell/input.vue'
// import Button from '@/components/sell/button.vue'

export default {
  layout: 'main--layout',
  data () {
    return {
      features: ['$0.00 flat rate', '15% referral fee per successful sale', '$30 monthly subsription fee'],
      description: 'Suitable for small scaled projects that do not exceed 10GB in size'
    }
  },
  components: {
    // 'os-input': Input,
    // 'os-button': Button
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';





.l-subscription__success {
    position: relative;
    width: 100%;
    padding: 20px;
}

.subscription__success {
    @include layout--container;
    position: relative;
    width: 100%;
}


.subscription__success--item {
    @include layout--item;
    width: layout--item--width(1, 12, false);

    @media all and (min-width: 768px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(12, 2);
    }

    @media all and (min-width: 1200px) {
        width: layout--item--width(1, 8, false);
        @include layout--item--offset(12, 3);
    }
}

.subscription__success--title {
    padding: 12px;
    font-size: 2em;
    color: #666666;
    text-align: center;
    font-style: italic;
}

.subscription__success--icon {
    background-color: green;
    height: 150px;
    width: 150px;
    margin: auto;
}


.subscription__success--details {
    position: relative;
    background-color: #f2f2f2;
    border-radius: 3px;
    padding: 20px 0;
    margin: 20% 0 15% 0;

    @media all and (min-width: 768px) {
        margin: 20% 0 10% 0;
    }
}


.subscription__success--details-heading {
    color: #666666;
    font-size: 0.9em;
    padding: 12px 12px 25px 12px;
}


.subscription__success--details-item {
    position: relative;
    width: 100%;
    padding: 5px 12px;
    color: #666666;
    font-weight: bold;
    font-size: 1.1em;

    > span {
        position: absolute;
        right: 5px;
        top: 9px;
        font-size: 0.7em;
        display: inline-block;
        text-align: left;
        font-weight: normal;
        width: 45%;
    }
}


.subscription__success--button {
    font-size: 0.7em;
}

.subscription__success--divider {
    height: 1px;
    border-top: 1px solid #b8b8b8;
    display: block;
    width: 100%;
}

</style>
