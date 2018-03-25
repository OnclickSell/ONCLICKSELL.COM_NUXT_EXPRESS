<template>
    <div class="home">
       
      <os-hero/>

      <div class='home__intro'>

                    <div class="home__intro--item fluid home__intro--box">
                        <div class="l-home__intro--box">
                          <!-- <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Getting-Paid-Final-Design.png'> -->
                          <h1 class='home__intro--box-title'>HOW DOES IT WORK?</h1>
                          <p class='home__intro--box-description'>SIMPLE! <span>Only 4 steps</span></p>
                          <span class='home__intro--box-icon'></span>
                        </div>
                    </div>

                    <div class="home__intro--item">
                        <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Sign_up-Final-Design.png'>
                        <h3 class='home__intro--title'>Create an account</h3>
                        <p class='home__intro--description'>Create an account on onclickSell.com</p>
                    </div>

                    <div class="home__intro--item">
                        <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Listing-project-Final-Design.png'>
                        <h3 class='home__intro--title'>Upload you application</h3>
                        <p class='home__intro--description'>Upload you application to our secure servers and send it live</p>
                    </div>

                    <div class="home__intro--item">
                        <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Upload-to-server-Final-Design.png'>
                        <h3 class='home__intro--title'>Create an account</h3>
                        <p class='home__intro--description'>We'll list your application on our listing page so potential buyer can find it easily</p>
                    </div>
                
                    <div class="home__intro--item">
                        <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Getting-Paid-Final-Design.png'>
                        <h3 class='home__intro--title'>Create an account</h3>
                        <p class='home__intro--description'>Create an account on onclickSell.com</p>
                    </div>
            </div>

            <os-cards v-on:displayListing="displayListing" :listings="listings"/>
            <os-new-letter/>
    </div>
</template>

<script>
import Cards from '@/components/cards/Cards.vue'
import NewLetter from '@/components/others/NewLetter.vue'
import Hero from '@/components/hero/index'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  fetch({store}) {
    store.dispatch('authentication/fetchAuthUser')
  },
  layout: 'main--layout',
  components: {
    'os-cards': Cards,
    'os-new-letter': NewLetter,
    'os-hero': Hero
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

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.home {
  position: relative;
  height: 100%;
  width: 100%;
}


.home__intro {
  @include layout--container;
  position: relative;
  padding: 12px;
  width: 100%;
}


.home__intro--item {
  @include layout--item;
  position: relative;
  width: layout--item--width(2, 6, true);
  margin: 10px 0 0 0;
  padding: 5px;
  text-align: center;

  @media all and (min-width : 768px) {
    width: layout--item--width(2, 4, false);
    margin-left: 10%;
  }

  @media all and (min-width : 960px) {
    width: layout--item--width(4, 3, false);
    margin-left: 0;
  }
}
    
.home__intro--image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  display: block;
  box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
}

.home__intro--title {
  color: #555555;
  padding: 5px;
  font-size: 0.9em;
}

.home__intro--description {
  color: #666666;
  padding: 5px;
  font-size: 0.8em;
}

.l-home__intro--box {
  width: 90%;
  height: 180px;
  margin: 10% 0 10% 10%;
  background-color: #F1F1F1;
  position: relative;
  border-radius: 3px;
  position: relative;

  @media all and (min-width : 768px) {
    width: 60%;
    margin: 10% 0 10% 35%;
  }

  @media all and (min-width : 960px) {
    width: 50%;
    margin: 10% 0 10% 45%;
  }
}

.home__intro--box-title {
  color: #60A4C0;
  font-size: 1.3em;
  padding: 12px 12px 12px 15%;
  text-align: left;
}

.home__intro--box-description {
  color: #afadad;
  font-size: 1.1em;
  font-weight: bold;
  padding: 12px 12px 12px 15%;
  text-align: left;

  > span {
    font-size: 0.9em;
    font-weight: normal;
    padding: 12px 12px 12px 25%;
    text-align: left;
    display: block;
  }
}

.home__intro--box-icon {
  // background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Getting-Paid-Final-Design.png');
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  display: block;
  position: absolute;
  left: -30px;
  top: 35%;

  background-color: blue;
  border-radius: 50%;
}



// Home page Hero image styles 



 @media all and (max-width: 340px) {
        body {
          min-width: 340px;
        }
      }
</style>
