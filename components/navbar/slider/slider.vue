<template>
    <div class="l-slider" @click="clicked">
        <os-avatar v-if="auth" :auth="auth" class="slider_avatar" />
        <os-items :isAuth="auth"/>
    </div>

</template>

<script>
import Avatar from '@/components/navbar/slider/components/avatar.vue'
import Items from '@/components/navbar/slider/components/items.vue'

export default {
  props: {
    auth: {
        required: true
    }
  },
  components: {
    'os-avatar': Avatar,
    'os-items': Items
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

.l-slider {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #FFFFFF;
    z-index: 200;
}

.slider_avatar {
    position: relative;
    width: 100%;
    margin: auto;
    @media only screen and (min-height: 490px) {
      margin-bottom: 20px;
    }
}

.slider_auth-controlls {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
}

.slider_auth-controlls-push {
  margin-top: 10%;
}




</style>




