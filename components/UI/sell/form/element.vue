<template>
    <div class='basic-info__form'>

        <os-input--tooltip 
            v-on:clicked="closeTooltip"
            v-show="tooltipIsOpen" 
            :distance='tooltip.distance' 
            :error="InputError" 
            :position="tooltip.position"/>

        <component 
          v-on:input="change"
          v-on:clicked="clicked"
          :is="ActiveComponent"
          :placeholder="InputHolder"
          :options="options"
          :name="InputName"/>
    </div>
</template>

<script>
import InputTooltip from '@/components/UI/tooltip/tooltip'
import Text from './elements/text'
import number from './elements/number'
import Textarea from './elements/textarea'
import DropDown from './elements/drop_down'
import CheckBox from './elements/check_box'
import RadioButton from './elements/radio_button'
import Button from './elements/button'
export default {
    props: {
        InputType: {
          type: String,
          required: true
        },
        InputHolder: {
          required: false
        },
        InputName: {
          type: String,
          required: true
        },
        value: {
          required: false
        },
        InputError: {
          type: String,
          required: false
        },
        tooltip: {
          type: Object,
          required: false,
          default: {distance: 20, position: "top"}
        },
        options: {
          type: Array,
          required: false
        }
    },
  data() {
    return {
      tooltipIsOpen: this.InputError,
      ActiveComponent: 'os-text'
    }
  },
  watch: {
    InputError: function(val) {
        this.tooltipIsOpen = val || false
    }
  },
  methods: {
    change (data) {
        this.$emit('input', data )
    },
    clicked () {
        this.$emit('clicked')
    },
    closeTooltip() {
        this.tooltipIsOpen = false
    }
  },
  components: {
    'os-input--tooltip': InputTooltip,
    'os-text': Text,
    'os-number': number,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-checkbox': CheckBox,
    'os-radio': RadioButton,
    'os-dropdown': DropDown
  },
  created() {
    switch(this.InputType.toUpperCase()) {
      case 'TEXT':
      this.ActiveComponent = 'os-text'
      break
      case 'NUMBER':
      this.ActiveComponent = 'os-number'
      break
      case 'TEXTAREA':
      this.ActiveComponent = 'os-textarea'
      break
      case 'RADIO':
      this.ActiveComponent = 'os-radio'
      break
      case 'DROPDOWN':
      this.ActiveComponent = 'os-dropdown'
      break
      case 'OPTION':
      this.ActiveComponent = 'os-checkbox'
      break
      case 'BUTTON':
      this.ActiveComponent = 'os-button'
      break
    }
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.basic-info__form {
    @include layout--container;
    position: relative;
}

.basic-info__input-help {
    width: 90%;
    margin-left: 5%;
    text-align: right;
    font-size: 0.9em;
    text-decoration: underline;
    color: #666666;

    &:hover {
        cursor: pointer;
        color: #ccc8c8;
        transition: 0.3s;
    }
}

.basic-info__input__input {
    width: 100%;
    padding: 5px 0 4px 0;
    border: none;
    border-bottom: 5px solid #8CB662;
    position: relative;
    background-color: transparent;
}

.input__fill {
     background-color: #ffffff;
}

.basic-info__input__input::placeholder {
    color: #3c3b3b;
}

.input__title {
    color: #666666;
    font-size: 1em;
    padding: 8px 0px;
}


</style>
