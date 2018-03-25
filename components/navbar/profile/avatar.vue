<template>
        <div class="profile">
            <div 
                @click="to('/profile')" 
                
                class='profile_avatar'></div>
            <p class="profile_caption">{{auth.full_name}}</p>
        </div>
        <!-- v-bind:style="{background: 'url(' + auth.profile_picture + ')'}" -->
</template>

<script>

export default {
  props: {
    auth: {
        required: true,
        default: ''
    }
  },
  methods: {
    to(route) {
        this.$router.push(route)
    }
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.profile {
    text-align: center;
}

.profile_avatar {
    display: block;
    width: 80px;
    background: url('http://nickmorgandesigns.com/images/profile-circle.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 3px 1px rgba(222,213,222,1);

    @media all  and (min-width : 768px) {
       width: 50px;
       height: 50px;
    }
}

.profile_caption {
    display: block;
    font-size: 1.1em;
    font-family: $default--lato;
    text-align: center;
    margin: auto;
    padding: 5px;
    text-transform: capitalize;

    @media all and(min-width: 768) {
        padding: 1px;
        font-size: 0.8em;
    }
}






</style>

