<template>
    <div class="home">
       
      <os-hero/>

      <os-cards v-on:displayListing="displayListing" :listings="listings"/>

      <div class='home__intro'>

        <os-intro :data="intro"/>
                    
      </div>

      
      <!-- <os-new-letter/> -->
    </div>
</template>

<script>
import Cards from '@/components/cards/index'
import Hero from '@/components/hero/index'
import Intro from '@/components/intro/index'
import { mapGetters } from 'vuex'
import axios from 'axios'


export default {
  layout: 'main--layout',
  fetch({store}) {
    store.dispatch('authentication/fetchAuthUser')
  },
  data() {
    return {
      intro: {
        step_1: {
          image: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Sign_up-Final-Design.png',
          title: 'Create an account',
          description: 'Create an account on onclickSell.com'
        },
        step_2: {
          image: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Listing-project-Final-Design.png',
          title: 'Upload you application',
          description: 'Upload you application to our secure servers and send it live'
        },
        step_3: {
          image: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Upload-to-server-Final-Design.png',
          title: 'Create an account',
          description: 'We\'ll list your application on our listing page so potential buyer can find it easily'
        },
        step_4: {
          image: 'http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Getting-Paid-Final-Design.png',
          title: 'Create an account',
          description: 'We\'ll list your application on our listing page so potential buyer can find it easily'
        } 
      }
    }
  },
  components: {
    'os-cards': Cards,
    'os-hero': Hero,
    'os-intro': Intro
  },
  computed: {
    ...mapGetters({
      listings: 'listings/getListings'
    })
  },
  methods: {
    displayListing(id) {
      const project = this.listings.find(listing => listing.id == id)
      this.$router.push('/project/' + project.title + '/' + project.id )
    }
  }
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.home {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
}


</style>
