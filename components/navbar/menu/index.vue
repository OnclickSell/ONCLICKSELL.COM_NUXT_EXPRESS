<template>
    <div class="l-menu">

        <div @click="isOpen = !isOpen" class="menu_dropdown-button" :class="{'menu_dropdown-fluid': !auth}">
            <span class="menu_dropdown-text"></span>
        </div>

        <transition name="menu_dropdown-ani">
        <div v-if="isOpen" class="menu_dropdown">
            <os-items v-on:clicked="isOpen = !isOpen" class="menu_items" :auth="auth"/>
        </div>
        </transition>

        <div class="menu_toolbar" :class="{'menu_toolbar-fluid': !auth}" v-if="!isOpen">
            <os-items class="menu_items" :auth="auth"/>    
        </div>

         <os-avatar :auth="auth" class="menu_avatar" v-if="auth"/>
        
    </div>
</template>

<script>
import Items from '@/components/navbar/menu/components/items.vue'
import Avatar from '@/components/navbar/menu/components/avatar.vue'

export default {
  props: {
    auth: {
      required: true,
      default: ''
    }
  },
  data () {
    return {
       isOpen: false
    }
  },
  components: {
    'os-items': Items,
    'os-avatar': Avatar
  },
  methods: {
    handleResize (width) {
      if(width > 960) {
          this.isOpen = false
      } else {
          this.isOpen = this.isOpen
      }
    }
  },
  created() {
    const that = this
    if(process.client) {
        window.addEventListener('resize', (event) => {
        that.handleResize(window.outerWidth)
    })
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>


<style lang='scss'>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-menu {
    position: static;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
}


.menu_items {
    width: 100%;
}

.menu_avatar {
    width: 35%
}

.menu_toolbar {
    width: 60%;
    margin-left: 20%;
    display: none;
    @media only screen and (min-width: 960px)  {
        display: block;
    }
}

.menu_toolbar-fluid {
    width: 80%;
    margin-left: 20%;
}


.menu_dropdown {
    display: block;
    position: absolute;
    top: 50px;
    width: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border-top: 1px solid #f3f3f3;
    box-shadow: 1px 1px 1px #c7c7c7;
}

.menu_dropdown-button {
    width: 32%;
    text-align: right;
    margin: auto;
    padding: 5px;
    display: block;
}

.menu_dropdown-fluid {
    width: 100%;
}

.menu_dropdown-text {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(http://res.cloudinary.com/onclicksell-com/image/upload/v1522396512/OnclickSell.com/Icons/Onclicksell.com-icons_copy_3.png);
    background-position: 0 0px;
    background-repeat: no-repeat;
    transition: opacity 0.3s;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
}

.menu_dropdown, .menu_dropdown-button {
    display: none;
    @media only screen and (max-width: 960px) and (min-width: 599px)  {
        display: block;
    }
}



.menu_dropdown-ani-enter-active {
   transition: all .2s ease;
   transition-delay: 0.1s;
}

.menu_dropdown-ani-leave-active {
  transition: all .2s ease;
}

.menu_dropdown-ani-enter, .menu_dropdown-ani-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}

</style>




