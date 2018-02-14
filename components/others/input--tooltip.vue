<template>
    <div class='input--tooltip' :style='{ bottom: top + "px"}'>
        <h2 class='input__tooltip--title'><slot name='title'></slot></h2>
        <!-- <i class='input__tooltip--icon'><os-hamburger height='20px' width='20px'/></i> -->
        <p class='input__tooltip--text'><slot name='description'></slot></p>
        <i class='input__tooltip--arrow'></i>
    </div>
</template>

<script>

export default {
  props: ['top'],
  components: {
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';





.input--tooltip {
    width: 280px;
    background-color: #FFFFFF;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    position: absolute;
    z-index: 50;
    margin-left: 5%;
    padding-top: 5px;
    padding-bottom: 20px;
}

.input__tooltip--title {
    width: 80%;
    display: inline-block;
    font-size: 0.9em;
    padding: 10px;
    margin: 0;
    color: rgb(248, 53, 53);
    font-weight: normal;
}

.input__tooltip--icon {
    width: 20%;
    display: inline-block;
}


.input__tooltip--text {
    padding: 10px;
    margin: 0;
    font-size: 0.8em;
    color: #666666;
}

.input__tooltip--arrow {
    background-color: green;
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 10;
    display: block;
    bottom: -15px;
    left: 5px;

}



</style>
