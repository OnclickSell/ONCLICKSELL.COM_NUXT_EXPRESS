<template>
    <div class='hero'>
        <os-hero-image>
            <os-hero-overlay/>
            <os-hero-text><os-hero-button/></os-hero-text>
        </os-hero-image>       
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from '@/components/hero/hero_image/hero_image'
import HeroText from '@/components/hero/hero_text/hero_text'
import HeroOverlay from '@/components/hero/hero_overlay/hero_overlay'
import HeroButton from '@/components/hero/hero_buttons/hero_button'

export default {
  computed: {
    ...mapGetters({
      loading: 'isLoading'
    })
  },
  components: {
    'os-hero-image': HeroImage,
    'os-hero-text': HeroText,
    'os-hero-overlay': HeroOverlay,
    'os-hero-button': HeroButton
  }
}
</script>
<style lang='scss'>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.hero {
  @include hero;
  position: relative;
}

</style>
