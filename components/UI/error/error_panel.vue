<template>
<div>
    <transition name="error_panel">
    <div v-if="show" class='l-error'>
        <transition-group name="error_panel">
        <slot></slot>
        </transition-group>
    </div>
    </transition>
</div>
</template>

<script>
export default {
  props: {
    show: {
        type: Boolean
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

.l-error {
    position: relative;
    display: block;
    border-left: 5px solid orange;
    padding: 12px;
    background-color: #f2dede;
}

p {
    padding: 5px 0;
    color: #a94442;
    margin: 0;
    font-size: 0.8em;
    text-align: left;
}


.error_panel-enter-active {
   transition: all .3s ease;
}

.error_panel-leave-active {
  transition: all .3s ease;
}

.error_panel-enter, .error_panel-leave-to {
  transform: translateY(5px);
  opacity: 0;
}


</style>