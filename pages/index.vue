<template>
    <div>
        <div class='hero'>
            <img class='hero__image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513738715/OnclickSell.com/Photos/Conceptional-Home-Page-Final-Design.png'>
            <div class='l-hero__text'>
              <div class='hero__image--drop'></div>
              <h1 class='hero__text'>Don't let <br/> your  computer disk <br/> become a graveyard of <br/> usefull web based <br/> projects</h1>
              <div class='l-hero__button'>
                  <p class='hero__button--text'>Let us turn them into money for you!</p>
                  <button class='hero__button'>GET STARTED</button>
              </div>
            </div>
        </div>

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
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  fetch({store}) {
    store.dispatch('authentication/fetchAuthUser')
  },
  layout: 'main--layout',
  components: {
    'os-cards': Cards,
    'os-new-letter': NewLetter
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



.hero {
  width: 100%;
  height: auto;
  position: relative;
  overflow-x: visible;
}

.hero__image {
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
}

.hero__image--drop {
  width: 100%;
  position: absolute;
  z-index: 20;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(10deg, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.31) 46%,rgba(0,0,0,0.2) 61%,rgba(0,0,0,0) 88%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 );
}

.l-hero__text {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 3%;
  top: 0;

  @media all and (min-width: 599px) {
    bottom: 2%;
  }

  @media all and (min-width: 768px) {
    bottom: 2%;
  }
}

.hero__text {
  position: relative;
  z-index: 50;
  width: 100%;
  padding: 12px;
  color: #FFFFFF;
  font-size: 2em;

  @media all and (min-width: 599px) {
    padding: 10% 12px 12px 5%;
    font-size: 2.4em;
  }

  @media all and (min-width: 768px) {
    padding: 15% 12px 12px 5%;
    font-size: 3em;
  }
}

.l-hero__button {
  width: 100%;
  padding: 12px;
  position: absolute;
  bottom: 0;
  z-index: 55;
  text-align: right;

  @media all and (min-width: 599px) {
    padding: 12px 10% 10% 12px;
  }

  @media all and (min-width: 768px) {
    padding: 12px 10% 10% 12px;
  }
}

.hero__button--text {
  width: 180px;
  margin: 0 10px 0 auto;
  color: #ffffff;
  font-size: 1em;
  text-align: left;
  font-style: italic;
  padding: 5px 0;

  @media all and (min-width: 599px) {
    width: 210px;
  }

  @media all and (min-width: 768px) {
    width: 300px;
    font-size: 1.5em;
  }
}

.hero__button {
  width: 180px;
  padding: 12px;
  background: $brand--colour;
  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  margin: 0 10px 0 auto;
  cursor: pointer;

  &:hover {
      color: $brand--colour;
      background-color: #FFFFFF;
      transition: 0.4s;
  }

  @media all and (min-width: 599px) {
    width: 210px;
  }

  @media all and (min-width: 768px) {
    width: 300px;
    font-size: 1.2em;
  }
}



 @media all and (max-width: 340px) {
        body {
          min-width: 340px;
        }
      }
</style>
