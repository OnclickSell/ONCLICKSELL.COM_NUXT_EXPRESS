<template>
    <div class="slider" @click="clicked">
        <os-avatar v-if="auth" :auth="auth" class="slider_avatar" />
        <os-toolbar-controlls :auth="auth" class="slider-items"/>
        <os-auth-controlls :auth="auth" class="slider_auth-controlls" />
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

.slider {
    padding-top: 10%;
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #FFFFFF;
    z-index: 200;
}

.slider_avatar {
    position: relative;
    width: 100%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
}

.slider_auth-controlls {
    position: absolute;
    bottom: 10%;
    right: 0;
    width: 100%;
}




</style>




