<template>
    <div class="l-avatar">
      <header class='avatar'>
        <a @click="$router.push('/profile')" class="avatar-link">
            <img src="http://nickmorgandesigns.com/images/profile-circle.png" 
            class='profile_avatar-img'/>
        </a>
        <p class="avatar_text">{{auth.name}}</p>
      </header>
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


.l-avatar {
    position: relative;
    height: 50px;
}

.avatar {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    overflow: hidden;
    margin: 0;
    background: #FFFFFF;
    border-left: 1px solid #e2cfcf;
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

    @media all  and (min-width : 768px) {
       width: 40px;
       -webkit-box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.06);
       box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.06);
    }
}



.avatar-link {
  display: inline-block;
  text-align: center;
  position: relative;
  width: 40%;

  &::after {
    position: absolute;
    content: "";
    bottom: -3px;
    right: 31px;
    width: 20px;
    height: 20px;
    border: 4px solid #FFFFFF;
    background: -webkit-linear-gradient(top, #2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

}

.avatar_text {
    display: block;
    width: 60%;
    padding: 5px;
    margin: 0;
    color: #FF5722;
    @include workSans_medium;
    font-size: 1.2em;
    text-transform: capitalize;
    text-align: left;
}






</style>

