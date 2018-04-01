<template>
  <div class="auth_panel">
    <div class="auth_panel-controlls">
      <slot name="controlls"></slot>
    </div>
    <div class="auth_panel-describtion">
      <slot name="describtion"/>
    </div>
  </div>         
</template>
<script>


export default {
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.auth_panel {
  display: inline-block;
  width: 70%;
  background: #FFFFFF;
  margin-top: 10%;
  margin-bottom: 10%;
  border-radius: 3px;
}

.auth_panel:after {
  display:block;
  clear:both;
  content:'';
}

.auth_panel-controlls {
  display: inline-block;
  position: relative;
  float: right;
  width: 100%;
  min-height: 350px;
  background-color: #FFFFFF;
 /* padding: 8%;*/
  border-radius: 3px;

  @media all and (min-width: 768px) {
    float: right;
    width: 60%;
    border-radius: 3px 3px 0 0;
  }

  @media all and (min-width: 1200px) {
    height: 450px;
  }
}

.auth_panel-describtion {
  display: none;
  position: relative;
  float: right;
  width: 100%;
  min-height: 350px;
  /*padding: 8%;*/
  background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  border-radius: 0 0 3px 3px;

  @media all and (min-width: 768px) {
    float: left;
    width: 40%;
    display: inline-block;
  }

  @media all and (min-width: 1200px) {
    height: 450px;
  }
}


</style>