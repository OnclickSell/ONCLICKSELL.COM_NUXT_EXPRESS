<template>


                <div class="auth_panel">

                    <div class="auth_panel-left">
                      <div class="panel-right-content">
                          <slot name="describtion"/>
                      </div>
                    </div>


                    <div class="auth_panel-right">
                        <slot name="controlls"></slot>
                    </div>

                </div> 



</template>
<script>


export default {
}
</script>

<style lang='scss'>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.auth_panel {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: #FFFFFF;


  @media all and (min-width: 599px) {
    width: 80%;
    box-shadow: 0px 0px 34px #cec3c3;
  }

  @media all and (min-width: 768px) {
    width: 75%;
  }

  @media all and (min-width: 960px) {
    width: 70%;
  }

  @media all and (min-width: 1100px) {
    width: 65%;
  }

  @media all and (min-width: 1200px) {
    width: 50%;
  }
}

.auth_panel-right {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;

  @media all and (min-width: 599px) {
    width: 60%;
  }
}

.auth_panel-left {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media all and (min-width: 599px) {
    width: 40%;
  }
}

.panel-right-content {
  width: 80%;
  margin: auto;
  padding: 20px 0;
  color: #FFFFFF;

  @media all and (min-width: 599px) {
    padding-top: 40px;
  }
}


</style>