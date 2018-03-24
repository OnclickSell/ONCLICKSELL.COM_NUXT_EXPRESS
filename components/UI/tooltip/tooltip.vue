<template>
    <div class='input--tooltip' :style='setPosition' @click="clicked">
        <!-- <i class='input__tooltip--icon'><os-hamburger height='20px' width='20px'/></i> -->
        <p class='input__tooltip--text'>{{error}}</p>
        <i class='input__tooltip--arrow' :style='setArrowPosition'></i>
    </div>
</template>

<script>

export default {
  props: ['position', 'distance', 'error'],
  data() {
    return {
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  },
  components: {
  },
  computed: {
    setPosition () {
        let position = ""
        switch (this.position) {
           case "top":
           position = { bottom: this.distance + "px"}
           break
           case "bottom":
           position = { top: this.distance + "px"}
           break
           case "left":
           position = { right: this.distance + "px"}
           break
           case "right":
           position = { left: this.distance + "px"}
           break
        }
        return position
    },
    setArrowPosition () {
        let position = ""
        switch (this.position) {
           case "top":
           position = { bottom: "-15px"}
           break
           case "bottom":
           position = { top: "-15px"}
           break
           case "left":
           position = { right: "-15px", left: "auto", top: "0px", bottom: "auto"}
           break
           case "right":
           position = { left: "-15px", right: "auto", top: "0px", bottom: "auto"}
           break
        }
        return position
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';





.input--tooltip {
    width: 180px;
    height: 65px;
    background-color: #FFFFFF;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    position: absolute;
    z-index: 50;
    padding-top: 5px;
    padding-bottom: 20px;
}


.input__tooltip--icon {
    width: 20%;
    display: inline-block;
}


.input__tooltip--text {
    padding: 2px 10px 10px 10px;
    margin: 0;
    font-size: 0.7em;
    color: red
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
