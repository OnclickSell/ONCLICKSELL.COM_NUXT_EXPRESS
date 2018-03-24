<template>
   
    <div @click="selected" class='plan-container' :style='{backgroundColor: plan.colour_code}'>
        <h1 class="plane__title">{{plan.plan_name}}</h1>
        <div class="plan__features">
            <ul class='plan__features--list'>
                <li class='plan__features--item'>{{plan.flate_rate}}</li>
                <li class='plan__features--item'>${{plan.price}} monthly subscription fee</li>
                <li class='plan__features--item'>15% Referral fee per successful sale</li>
            </ul>
        </div>
        <p class="plan__description">{{plan.summary}}</p>
    </div>


</template>

<script>
export default {
  props: {
    plan: {
        type: Object,
        required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    selected() {
      this.$emit('selected', this.plan)
    }
  },
  components: {
  }
}
</script>

<style lang='scss' >

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';




.set-price {
    @include layout--container;
    width: 100%;
    padding: 20px;
}

.set-price__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);

    @media only screen  and (min-width : 540px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(1, 1);
    }

}


.set-price__alert-box {
    width: 100%;
    border-radius: 4px;
    padding: 5px;
    margin: 30px 0 0 0;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);

    @media only screen  and (min-width : 768px) {
        margin: 50px 0 0 0;
    }
}

.set-price__alert-box--title {
    color: #666666;
    margin: 0;
    padding: 3px;
    font-size: 1.3em;
}

.set-price__alert-box--content {
    color: #666666;
    margin: 0;
    padding: 8px 4px;
    font-size: 0.9em;
}


.set-price__input {
    margin-top: 40px;
    margin-bottom: 40px;

    @media only screen  and (min-width : 768px) { 
       margin-top: 50px;
       width: 60%;
    }
}



.plan-container {
    width: 100%;
    background-color: #199ED8;
    border-radius: 4px;
    margin: 10px 0 40px 0;
    @media only screen  and (min-width : 768px) { 
        width: layout--item--width(2, 5, false);
        @include layout--item;
        margin: 30px 0 50px 5%;
    }
}

.plane__title {
    margin: 0;
    padding: 5px;
    color: #FFFFFF;
    border-bottom: 4px solid #FFFFFF;
}

.plan__features--list {
    color: #FFFFFF;
}

.plan__description {
    color: #FFFFFF;
    padding: 5px;
}

.set-price__table {
    width: 90%;
    margin: 10px auto 10px auto;

    @media only screen  and (min-width : 768px) { 
        width: layout--item--width(2, 5, false);
        @include layout--item;
        margin: 30px auto 50px 10%;
    }
}

.set-price__list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: 3px 3px 0 0;
    @include layout--container;
}

.set-price__list--title, .set-price__list--item {
    @include layout--item;
    width: layout--item--width(4, 3, true);
    padding: 15px 5px;
    text-align: center;
    background: #D7D7D7;
    margin: 0;
    height: 50px;
    font-size: 12px;
    color: #666666;
    font-weight: bold;
}

.set-price__list--item {
    background-color: #F2F2F2;
    font-weight: normal;
}

.set-price__info-panel {
    width: 100%;
    margin: 40px 0 0 0;
    background-color: #F2F2F2;
    padding: 5px;
    border-radius: 4px;

    @media only screen  and (min-width : 768px) { 
        margin: 40px 0 30px 0;
    }
}

.set-price__info-panel--title {
    color: #666666;
    margin: 0;
    padding: 5px;
    font-size: 1.3em;
}

.set-price__info-panel--content {
    color: #666666;
    padding: 5px;
    font-size: 0.9em;
}

.set-price__button {
   margin-top: 20px;
}


</style>
