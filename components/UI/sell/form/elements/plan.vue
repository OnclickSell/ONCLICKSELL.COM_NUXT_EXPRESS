<template>
<div class='l-plan'>
    <div class='plan' :class="['plan--' + colour, {'plan--active': active } ]">
        <div class='plan__title'><slot name='title'></slot></div>
        <h2 class='plan__value'>{{ value }}<span class='plan__value--unit'> p/m</span></h2>
        <ul class='plan__features'>
            <li class='plan__feature' v-for="feature in features" :key='feature'>{{ feature }}</li>
        </ul>
        <p class='plan__description'>{{ description }}</p>
        <button class='plan__button'>{{ buttonText }}</button>
    </div>
</div>
</template>

<script>
export default {
  props: ['active', 'colour', 'value', 'features', 'description', 'buttonText']
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-plan {
    width: 100%;
    position: relative;
}

.plan {
    max-width: 280px;
    margin: auto;
    border-radius: 3px;
    color: #FFFFFF;
    padding: 5px 10px;
    margin-top: 10px;
    @media only screen  and (min-width : 768px) {
       height: 450px;
    }
}


.plan--blue {
    background-color: #00CCFF;
}

.plan--green {
    background-color: #96D68F;
}

.plan--purple {
    background-color: #9999FF;
}

.plan--active {
    max-width: 300px;

    @media only screen  and (min-width : 768px) {
        height: 500px;

        .plan__features {
            padding: 15px 12px;
        }
   
        .plan__description {
           padding: 25px 5px;
       }
     }

}


.plan__title {
    text-align: center;
    font-size: 1.1em;
    padding: 10px 5px;
    margin: 0;
    border-bottom: 1px solid #FFFFFF;
}

.plan__value {
    text-align: center;
    font-size: 1.5em;
    padding: 10px 5px;
    margin: 0;
    border-bottom: 1px solid #FFFFFF;
}

.plan__value--unit {
    font-size: 0.5em;
}

.plan__features {
    margin: 0;
    padding: 15px 12px;
    list-style: disc;
    border-bottom: 1px solid #FFFFFF;
}

.plan__feature {
    padding: 2px;
    font-size: 1em;
}

.plan__description {
    padding: 5px;
}

.plan__button {
    width: layout--item--width(1, 11, true);
    border: none;
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #aeaeae;
    font-size: 1.1em;
    font-weight: bold;
    padding: 10px;
    margin: 10px auto 10px 3%;
    cursor: pointer;

    &:hover {
        background-color: #96D68F;
        color: #FFFFFF;
        transition: 0.3s;
    }
}
</style>