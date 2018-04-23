<template>


    <div class='l-dropdown' @click="toggle" :class="{'error': error}">


        <span class='dropdown__title'>{{ selected ? selected : placeholder}}</span>

        <div class='dropdown'>
            <ul class='dropdown__list' v-if="open">
                <li class='dropdown__list--item' 
                    @click="select(option.value)" 
                    v-for="option in data"
                    :key="option.key">{{ option.name }}</li>
            </ul>
        </div>

        <span class='dropdown__icon'><i></i></span>



    </div>



</template>

<script>
export default {
  props: {
      placeholder: {
        required: false
      },
      name: {
        type: String,
        required: true
      },
      data: {
        required: true
      },
      error: {
        type: Boolean
      }
  },
  data() {
    return {
      open: false,
      selected: null
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    select (value) {
      this.selected = value
      this.$emit('input', value )
    }
  },
  created() {
    if(process.client) {
      let that = this
      window.addEventListener('click', () => {
         // if (that.open)
         //  that.open = false
      })
    }
  },
  BeforeDestroy() {
    window.addEventListener('click', () => {
        if (this.open)
          this.open = false
      })
  }
}
</script>
<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: #F2F2F2;
    padding: 5px;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    &:hover {
        
    }
}

.dropdown__title {
    display: block;
    font-size: 1em;
    width: 80%;
    color: #666666;
    padding: 10px;
}

.dropdown__icon {
  display: block;
  width: 20%;
  padding: 2px;
  text-align: right;
}

.dropdown__icon > i {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
    background-position: 0 0px;
    background-repeat: no-repeat;
}


.dropdown {
    position: absolute;
    top: 111%;
    width: 100%;
    max-height: 150px;
    overflow: scroll;
    overflow-x: hidden;
    right: 0;
    border-radius: 3px;
    z-index: 55;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 0px rgba(102,102,102,1);
}

.dropdown__list {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
}

.dropdown__list--item {
    font-size: 1em;
    padding: 10px 5px;
    width: 100%;
    color: #666666;

    &:hover {
        background-color: #eee;
        transition: 0.4s;
        cursor: pointer;
    }
}

.error {
  border: 1px solid red;
}
</style>
