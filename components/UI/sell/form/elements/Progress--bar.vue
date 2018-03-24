<template>
  <div>
    <div class='prograss-bar'>
        <div :class="{ 'prograss-bar--active': step == s }" class='prograss-bar__item' v-for='s in steps' :key='s'>{{ s }}</div>
        <div class="prograss-bar__horizontal-line"></div>
    </div>

    <div class='prograss-bar__info-panel'>
        <h1 class='prograss-bar__info-panel-title'><slot name='title'></slot></h1>
        <p class='prograss-bar__info-panel-text'><slot name='description'></slot></p>
        <div class='prograss-bar__info-panel-arrow'></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['step'],
  data () {
    return {
      steps: [1, 2, 3, 4, 5, 6]
    }
  },
  computed: {
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.prograss-bar {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 40px;
}

.prograss-bar__item {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #999999;
    color: white;
    text-align: center;
    font-size: 1.3em;
    padding-top: 4px;
}

.prograss-bar__horizontal-line {
    height: 10px;
    width: 90%;
    background-color: #eee;
    position: absolute;
    z-index: -1;
    top: 18px;
    margin-left: 4%;
}

.prograss-bar--active {
    background-color: #96D68F;
}

.prograss-bar__info-panel {
    background-color: #eee;
    position: relative;
    width: 100%;
    margin: auto;
    border-radius: 3px;
    margin-top: 20px;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);

    @media all and (min-width: 768px) {
        padding: 12px;
    }
}

.prograss-bar__info-panel-title {
    font-size: 0.5em;
    font-weight: bold;
    font-family: $default--lato;
    color: #666666;
    padding: 12px 12px 0 12px;

    @media all and (min-width: 768px) {
        font-size: 1em;
    }
}


.prograss-bar__info-panel-text {
    padding: 12px;
    margin: 0;
    font-size: 0.9em;
    font-family: $default--pt-sans;
    color: #666666;

    @media all and (min-width: 768px) {
        font-size: 1em;
    }
}

.prograss-bar__info-panel-arrow {
    background: #eee;
    width: 20px;
    height: 20px;

    border-radius: 50% 50% 0 0;
    border-color: #555 transparent transparent transparent;
    
    position: absolute;
    top: -20px;
    left: 3px;
}
</style>
