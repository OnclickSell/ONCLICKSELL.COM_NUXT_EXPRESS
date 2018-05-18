<template>
   <div class="l-pricing">

      <div class="pricing_intro">
        <h1 class="pricing_intro-title">Pay for what you need :)</h1>
      </div>

      <div class="pricing_container">
          <div class="pricing_columns" v-for="plan in plans">
              <h1 class="pricing_columns-title">{{plan.name}}</h1>
              <h1 class="pricing_columns-price">
                <span class="price_sign">$</span>
                <span class="price">{{plan.amount}}</span>
                <span class="price_currency">USD/Month</span>
              </h1>
              <p class="pricing_columns-description">{{plan.name}}</p>
              <button class="pricing_columns-buttons" @click="switch_page('os-payment', plan._id)">Get Started</button>
          </div>
      </div>
      <div class="pricing_footer">
        <div class="pricing_footer-title">Ned any help with prices?</div>
        <div class="pricing_footer-content">
            I'm having a problem centering an element that has the attribute position set to absolute. Does anyone know why the images are not centered?
        </div>
        <button class="pricing_footer-button" >Get Help</button>
      </div>

      <div class="l-project_items-buttons">
        <button class="project_items-buttons" @click="switch_page('os-backend')">Back</button>
      </div>
     
   </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'
import Mixins from '@/mixins/sell.js'

export default {
  layout: 'main--layout',
  data () {
    return {
    }
  },
  methods: {
    switch_page(page, planId) {
      this.$emit('switched', {page: page, context: {plan: planId}})
    }
  },
  components: {
    'os-input': Input,
    'os-explainer': Explainer
  },
  computed: {
    plans() {
      return this.$store.getters['listings/GetPlans']
    }
  },
  mixins: [Mixins]
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-pricing {
  position: relative;
  height: 100%;
}

.pricing_intro {
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background: url('https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 700px) {
    height: 500px;
  }
}

.pricing_intro-title {
  width: 100%;
  padding: 12px;
  color: #FFFFFF;
  text-align: center;
  font-size: 2.3em; 
}

.pricing_container {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: -10%;
  background: #FFFFFF;

  @media screen and (min-width: 490px) {
    width: 75%;
  }

  @media screen and (min-width: 550px) {
    width: 70%;
  }

  @media screen and (min-width: 700px) {
    flex-wrap: nowrap;
  }
}

.pricing_columns {
  display: flex;
  padding: 20px 12px;
  height: 165px;
  width: 100%;
  align-items: flex-start;
  position: relative;
  border: 1px solid #f3f3f3;

  @media screen and (min-width: 700px) {
    flex-wrap: wrap;
    height: 300px;
    padding: 12px;
  }

}

.pricing_columns-title {
  width: 40%;
  margin: 0;
  padding: 5px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9em;
  color: #1bd6ba;

  @media screen and (min-width: 700px) {
    width: 100%;
    padding: 20px 0;
    font-size: 1.1em;
  }
}

.pricing_columns-price {
  position: relative;
  width: 40%;
  margin: 0;
  font-size: 1em;
  text-align: center;

  @media screen and (min-width: 700px) {
    width: 100%;
    font-size: 1.3em;
  }
}

.price_sign {
  font-size: 0.6em;
}

.price {
  font-size: 1.8em;
}

.price_currency {
  font-size: 0.4em;
}

.pricing_columns-description {
  width: 40%;
  margin: 0;
  text-align: center;
  font-size: 0.9em;
  color: #666666;

  @media screen and (min-width: 700px) {
    width: 100%;
    padding: 5px 0 60px;
  }
}

.pricing_columns-buttons {
  display: block;
  align-self: flex-end;
  position: absolute;
  width: 90%;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  border: none;
  background-color: $default--blue;
  padding: 12px;
  text-align: center;
  color: #FFFFFF;
}

.pricing_footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  min-height: 250px;
  width: 80%;
  margin: 10% auto 10% auto;
  padding: 20px 0;
  background-color: #23e8a6;
}

.pricing_footer-title {
  background-color: #23e8a6;
  color: #FFFFFF;
  padding: 20px;
  text-align: center;
  width: 80%;
  margin: auto;
  font-size: 1.1em;
  font-weight: bold;
}

.pricing_footer-content {
  text-align: center;
  color: #FFFFFF;
  padding: 20px;
  width: 80%;
  margin: auto;
  font-size: 1em;
  @include workSans_light;
}

.pricing_footer-button {
  text-align: center;
  color: #FFFFFF;
  background-color: #23e8a6;
  border: 1px solid #FFFFFF;
  padding: 15px;
  width: 250px;
  margin: auto;
}

.l-project_items-buttons {
  width: 80%;
  margin: 10% auto 10% auto;
  @media screen and (min-width: 768px) {
      width: 90%;
  }
}

.project_items-buttons {
  width: 100%;
  margin: 10px 0;
  background: #3dc053;
  color: #FFFFFF;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 12px;

  @media screen and (min-width: 768px) {
      width: 40%;
      margin-left: auto;
      margin-right: 0;
      display: block;
  }
}



</style>
