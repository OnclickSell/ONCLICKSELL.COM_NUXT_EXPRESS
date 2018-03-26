<template>
  <div class="home__intro--item fluid home__intro--box">
      <div class="l-home__intro--box">
        <!-- <img class='home__intro--image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513761217/OnclickSell.com/Photos/Conceptional-Getting-Paid-Final-Design.png'> -->
        <h1 class='home__intro--box-title'>HOW DOES IT WORK?</h1>
        <p class='home__intro--box-description'>SIMPLE! <span>Only 4 steps</span></p>
        <span class='home__intro--box-icon'></span>
      </div>
  </div>

</template>

<script>

export default {
  computed: {
  },
  components: {
  }
}
</script>
<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


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
