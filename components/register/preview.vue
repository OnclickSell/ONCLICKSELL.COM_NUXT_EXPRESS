<template>
    <div>

         <div class='l-register'>
             <img :src="data.profile_picture" width="200px" height="200px" :alt="data.full_name"/>
            <div>{{data.full_name}}</div>
            <div>{{data.email}}</div>
            <div>{{data.description}}</div>
            <div>{{data.age}}</div>
            <div>{{data.sex}}</div>
            <button @click="skip">Skip</button>
            <button @click="update" :disabled="isUpdateOn">Update</button>
        </div>            

    </div>         
</template>
<script>
import InputTooltip from '@/components/others/input--tooltip.vue'
import Hamburger from '@/assets/icons/hamburger.vue'

export default {
  props: ['data'],
  data () {
    return {
      details: {
        full_name: '',
        email: '',
        sex: '',
        password: '',
        description: '',
        profile_picture: ''
      },
      isUpdateOn: false
    }
  },
  components: {
    'os-input--tooltip': InputTooltip,
    'os-hamburger': Hamburger
  },
  computed: {
  },
  methods: {
    skip () {
      this.$emit('skip')
    },
    update () {
      this.$emit('update', this.details)
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/Onclicksell.com--css--config.scss';


.l-register {
    position: relative;
    text-align: center;

    @media all and (min-width: 768px) {
        padding: 100px 12px 12px 12px;
    }
}

.register {
    @include layout--container;
    @include layout--item;
    width: 100%;
    margin: 0;
    position: relative;
    text-align: center;

    @media only screen  and (min-width : 768px) {
        width: 600px;
        margin: auto;
        box-shadow: 0px 0px 5px 2px rgba(222,213,222,0.63);
    }
}


.l-register__header {
    @include layout--item;
    width: 100%;
    height: 300px;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1515050579/OnclickSell.com/Photos/home-office-2452806_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding: 100px 12px 12px 12px;
    margin: 0;
    position: relative;

    @media only screen  and (min-width : 768px) {
        border-radius: 3px 3px 0 0;
    }

    // @media only screen  and (min-width : 768px) {
    //     width: layout--item--width(2, 6, true);
    //     margin: 0;
    //     border-radius: 3px 0 0 3px;
    //     padding: 100px 12px 12px 12px;
    //     height: 100%;
    // }
}

.register__heading {
    width: 100%;
    padding: 12px 5px;
    font-size: 2.1em;
    color: #ffffff;
    text-align: left;

    @media all and (min-width: 479px) {
        font-size: 2.5em;
    }

    @media all and (min-width: 599px) {
        font-size: 2.7em;
    }
}

.l-register__github {
    @include layout--item;
    margin: auto;
    width: 100%;
    text-align: center;
    padding: 20px;
}

.register__github, .register__create-acount {
    width: 250px;
    margin: auto;
    padding: 8px;
    background-color: #ffffff;
    border-radius: 3px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.register__github--button {
    background-color: #504f4f;
    color: #ffffff;
}


.l-register__inputs {
    @include layout--item;
    margin: auto;

    @media all and (min-width: 768px) {
        width: 90%;
    }
    // @media only screen  and (min-width : 768px) {
    //     width: layout--item--width(2, 6, true);
    //     margin: 0;
    //     border-top: 1px solid #666666;
    //     border-right: 1px solid #666666;
    //     border-bottom: 1px solid #666666;
    //     border-radius: 0 3px 3px 0;
    //     height: 100%;
    // }
}


.register__inputs {
    @include layout--item;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 20px 0px 20px 0;
    margin: 0;

    @media only screen  and (min-width : 768px) {
        padding: 9px 0;
    }
}

.register__inputs--heading {
    width: 90%;
    color: #666666;
    font-weight: normal;
    font-size: 1.1em;
    text-align: center ;
    padding: 5px 0;
    margin: auto;
}

.register__input {
    border: 3px;
    border-radius: 3px;
    background-color: #f2f2f2;
    padding: 10px 10px;
    color: #666666;
    margin: 10px auto 0 5%;
    width: 90%;
    display: block;
}

.register__terms {
    padding: 15px 0;
    color: #666666;
    text-align: left;
    font-size: 0.9em;
    width: 90%;
    margin-left: 5%;
}

.register__button {
    width: 90%;
    color: #ffffff;
    font-size: 1.1em;
    background-color: #3EA98D;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin: 10px auto 5%;
    cursor: pointer;

    &:hover {
        color: #d5d5d5;
        transition: 0.4s;
    }
}

.register__email--or {
    display: block;
    width: 300px;
    margin: 20px auto 0 auto;
    padding: 5px 0;
    color: #a3a2a2;
    text-align: center;
    font-size: 1em;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    @media all and (min-width: 768px) {
        width: 230px;
    }
}
</style>