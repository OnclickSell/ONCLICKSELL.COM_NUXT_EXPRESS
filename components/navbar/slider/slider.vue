<template>
    <div class="l-slider" @click="clicked">
        <os-avatar v-if="auth" :auth="auth" class="slider_avatar" />
        <os-toolbar-controlls :auth="auth" class="slider-items" :class="{'slider_auth-controlls-push': !auth}"/>
        <!-- <os-auth-controlls :auth="auth" class="slider_auth-controlls" /> -->
    </div>

</template>

<script>
import Avatar from '@/components/navbar/profile/avatar'
import AuthControlls from '@/components/navbar/controlls/auth'
import ToolbarControlls from '@/components/navbar/controlls/toolbar'

export default {
  props: {
    auth: {
        required: true
    }
  },
  components: {
    'os-avatar': Avatar,
    'os-auth-controlls': AuthControlls,
    'os-toolbar-controlls': ToolbarControlls
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
    margin-bottom: 20px;
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




