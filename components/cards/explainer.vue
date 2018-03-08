<template>
    <div class='explainer'>
        <h4 class='explainer__title'>{{ title }}</h4>
        <div class='explainer__content'><slot name='content'></slot></div>
    </div>
</template>

<script>
export default {
  props: ['title'],
  components: {
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.explainer {
    padding: 5px;
    position: relative;
    background-color: #96D68F;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    border-radius: 4px;
}

.explainer__title {
    color: #FFFFFF;
    font-size: 1.3em;
    padding: 12px 5px 5px 5px;
}

.explainer__content {
    color: #FFFFFF;
    padding: 5px;
    font-size: 1em;
}

</style>
