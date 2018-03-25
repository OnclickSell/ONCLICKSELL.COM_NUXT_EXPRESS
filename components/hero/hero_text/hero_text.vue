<template>
    <div class='l-hero__text'>
        <h1 class='hero__text-big'>
          Don't let <br/> 
          your  computer disk<br/> 
          become a graveyard of<br/> 
          usefull web based<br/> 
          projects</h1>

          <p class='l-hero__text-small'>
            <span class="hero__text-small">
              <span class="hero__text-caption">Let us turn them into <br/> money for you!</span>
              <slot></slot>
            </span>
          </p>
    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.l-hero__text {
  @include hero;
  font-size: 1.3rem;
}





.home__intro {
  @include layout--container;
  position: relative;
  padding: 12px;
  width: 100%;
}


.hero__text-big {
  width: 100%;
  font-size: 2.5em;
  color: #FFFFFF;
  padding: 10% 5%;
}

.l-hero__text-small {
  position: absolute;
  bottom: 5px;
  width: 100%;
  font-size: 1.5em;
  color: #FFFFFF;
  padding: 10% 5%;
  text-align: right;
}

.hero__text-caption {
  display: block;
}

.hero__text-small {
  display: inline-block;
  text-align: left;
}


</style>
