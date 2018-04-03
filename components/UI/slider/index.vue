<template>
  <div class="l-slider">
    <div class="slider"  id="test">
    <span class="slider_handle-left" id="left" :style="{left: left + 'px'}">
      <i class="tooltiptext">{{minValue}}</i>
    </span>
    <span class="slider_handle-right" id="right" :style="{left: 'auto', right: right + 'px'}">
      <i class="tooltiptext">{{maxValue}}</i>
    </span>
    <span class="slider_range" :style="{left: Filled.left, right: Filled.right}"></span>
  </div>
  </div>
</template>

<script>

export default {
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  data () {
    return {
      isLeftDown: false,
      isRightDown: false,
      rangeWidth: '',
      handleWidth: '',
      offset: '',
      left: 0,
      right: 0
    }
  },
  mounted() {
    let that = this
    let left = document.getElementById('left')
    let right = document.getElementById('right')
    this.rangeWidth = right.parentElement.offsetWidth
    this.handleWidth = right.offsetWidth



    window.addEventListener('resize', (event) => {
      this.rangeWidth = right.parentElement.offsetWidth
      this.handleWidth = right.offsetWidth
    })

    //Add Event listener to range handlers
    left.addEventListener('mousedown', function(event) {
      that.offset = that.GetOffset(left.parentElement)
      that.isLeftDown = true
    })

    left.addEventListener("touchstart", (event) => {
      that.offset = that.GetOffset(left.parentElement)
      that.isLeftDown = true
    })

    right.addEventListener('mousedown', function(event) {
      that.offset = that.GetOffset(right.parentElement)
      that.isRightDown = true
    })

    right.addEventListener("touchstart", (event) => {
      that.offset = that.GetOffset(left.parentElement)
      that.isRightDown = true
    })

    //Lock range handlers
    document.addEventListener('mouseup', () => {
      that.isLeftDown = false
      that.isRightDown = false
    })

    document.addEventListener("touchend", () => {
      that.isLeftDown = false
      that.isRightDown = false
    })

    
    //Move range handlers
    document.addEventListener('mousemove', (event) => {
      event.preventDefault();
      if (that.isLeftDown) {
          that.SetLeftPosition(event)
      }
      if (that.isRightDown) {
          that.SetRightPosition(event)
      }
      if (this.isRightDown || this.isLeftDown)
        this.RangeChanged()
    }, true)

    document.addEventListener("touchmove", (event) => {
      // event.preventDefault();
      event = event.changedTouches[0]
      if (that.isLeftDown) {
          that.SetLeftPosition(event)
      }
      if (that.isRightDown) {
          that.SetRightPosition(event)
      }
      if (this.isRightDown || this.isLeftDown)
        this.RangeChanged()
    }, true)

  },
  methods: {
    GetOffset(el) {
      let rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    },
    SetLeftPosition(event) {
      const clientX = event.x || event.clientX 
      let position = clientX - (this.offset.left)
      if (position >= this.handleWidth / 2 && position <= (this.rangeWidth - (this.right + this.handleWidth)) && position <= this.rangeWidth)
        this.left = position - this.handleWidth / 2
    },
    SetRightPosition(event) {
      const clientX = event.x || event.clientX 
      let position =  clientX - (this.offset.left)
      if (position >= this.handleWidth && position >= (this.left + this.handleWidth) && position <= this.rangeWidth - this.handleWidth / 2)

        this.right = this.rangeWidth - (position + this.handleWidth / 2)
    },
    selecte(value) {
      this.selected = value
      this.$emit('selected', value)
    },
    mousedown(event) {
    this.isDown = true
    },
    RangeChanged() {
      const value = {min: this.minValue, max: this.maxValue}
      this.$emit('selected', value)
    }
  },
  computed: {
    text() {
        return this.selected.length > 0? this.selected : this.placeholder
    },
    minValue() {
      return (
        Math.round(Math.round(this.left / this.rangeWidth * 100) / 100 * (this.max - this.min))
      )
    },
    maxValue() {
      return (
        Math.round(Math.round((this.rangeWidth - this.right) / this.rangeWidth * 100) / 100 * (this.max - this.min))
      )
    },
    Filled() {
      return {
        left: (this.left + this.handleWidth / 2) + 'px',
        right: (this.right + this.handleWidth / 2) + 'px' 
      }
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/default.scss';
@import '~assets/sass/grid.scss';

.l-slider {
  padding: 12px 0;
}


.slider {
  position: relative;
  height: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 1px #ad8585 inset;
  width: 100%;
}

.slider_handle-left, .slider_handle-right {
  position: absolute;
  z-index: 50;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #8bcdea;
  cursor: pointer;
  border-radius: 50%;
  top: -8px;
}

.slider_handle-right {
  left: 100px;
}

.slider_range {
  position: absolute;
  display: inline-block;
  height: 100%;
  background-color: #9aeaaa;
}


.tooltiptext:after {
  content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltiptext {
    visibility: hidden;
    width: 100px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -50px;
    opacity: 0;
    transition: opacity 0.3s;
}

.slider_handle-left:hover .tooltiptext, .slider_handle-right:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}


</style>
