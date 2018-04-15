<template>
    <div class="profile">
      <header class='profile_avatar'>
        <a @click="$router.push('/profile')" class="profile_avatar-link">
            <img src="http://nickmorgandesigns.com/images/profile-circle.png" 
            class='profile_avatar-img'/>
        </a>
        <p class="profile_caption">{{auth.full_name}}</p>
      </header>
        <!-- v-bind:style="{background: 'url(' + auth.profile_picture + ')'}" -->
    </div>
</template>

<script>

export default {
  props: {
    auth: {
        required: true,
        default: ''
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.profile {
    text-align: center;
}

.profile_avatar {
    position: relative;
    width: 130px;
    height: 160px;
    overflow: hidden;
    margin: 0;
    display: inline-block;
    background: #FFFFFF;
    text-align: center;

    &::after {
      content: '';
      display: block;
      clear: both;
    }

    @media only screen and (min-height: 490px) {
      width: 179px;
      height: 200px;
    }
}

.profile_avatar-img {
    display: block;
    width: 120px;
    max-width: 100%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    margin: auto;
    -webkit-transition: -webkit-box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease;
    -webkit-box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);

    &::hover {
        -webkit-box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);
    }

}



.profile_avatar-link {
  display: inline-block;
  text-align: center;
  position: relative;
  margin: 25px 30px 12px 30px;

  &::after {
    position: absolute;
    content: "";
    bottom: -12px;
    right: -8px;
    width: 30px;
    height: 30px;
    border: 4px solid #FFFFFF;
    background: -webkit-linear-gradient(top, #2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

    @media only screen and (min-height: 490px) {
      bottom: 5px;
      right: 3px;
    }

  }

}

.profile_caption {
    color: #FF5722;
    display: block;
    font-size: 1.1em;
    @include workSans_medium;
    text-align: center;
    margin: auto;
    padding: 5px;
    text-transform: capitalize;
}

</style>

