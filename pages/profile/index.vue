<template>
    <div>
           <os-modal :open="modal"><os-password--change @closeModal="toggleModal" class='profile__password--change'/></os-modal>
            <div class='profile'>
                
                <div class='profile__item'>
                    <os-description 
                        v-on:descriptionUpdated="updateDescription"
                        :description="user.description"/>
                </div>







                <div class='profile__item profile__navbar--md--expand-left'>
                    <div class='l-profile__navbar'>
                        <ul class='profile__navbar'>
                            <li class='profile__option' @click="openPanel('os-listings')">Listings</li>
                            <li class='profile__option'>Sells</li>
                            <li class='profile__option profile__option--active' @click="openPanel('os-questions')">Messages</li>
                            <li class='profile__option profile__option--md-hide' @click="ShowMoreOptions">More <i class='profile__option--icon'>Icon</i></li>
                            <li v-if="moreOptions">
                                <ul class='profile__more--options'>
                                    <li class='profile__option' @click="openPanel('os-payments')">Payments</li>
                                    <li class='profile__option' @click="openPanel('os-personal--details')">Details</li>
                                    <li class='profile__option' @click="openPanel('os-tickets')">Tickets</li>  
                                    <li class='profile__option' @click="openPanel('os-listings')">Listings</li> 
                                </ul>
                            </li>
                        </ul>
                        <div v-show="!moreOptions" class='profile__navbar__tracker'></div>
                    </div>
                </div>




                <div class='profile__item'>
                   <component :is="currentPanel" v-bind:details="details"></component>
                    <!-- <div class='profile__listings'>
                        <div class='profile__listings-item'>
                            <span class='profile__listings-id'>1</span>
                            <span class='profile__listings-title'>Laravel and Vue.js 5 pages website</span>
                            <button class='profile__listings-button'>View</button>
                        </div>
                        <div class='profile__listings-item'>
                            <span class='profile__listings-id'>2</span>
                            <span class='profile__listings-title'>Laravel and Vue.js 5 pages website</span>
                            <button class='profile__listings-button'>View</button>
                        </div>
                        <div class='profile__listings-item'>
                            <span class='profile__listings-id'>3</span>
                            <span class='profile__listings-title'>Laravel and Vue.js 5 pages website</span>
                            <button class='profile__listings-button'>View</button>
                        </div>
                        <div class='profile__listings-item'>
                            <span class='profile__listings-id'>4</span>
                            <span class='profile__listings-title'>Laravel and Vue.js 5 pages website</span>
                            <button class='profile__listings-button'>View</button>
                        </div>
                    </div> -->
                </div>

    </div>
    
       
      </div>
</template>

<script>
import Modal from '@/components/modal/modal.vue'
import PersonalDetails from '@/components/user/profile_container/personal_details/index'
import Listings from '@/components/user/listings/listings.vue'
import Tickets from '@/components/user/tickets.vue'
import PaymentPlan from '@/components/user/payment--plan.vue'
import Questions from '@/components/user/questions.vue'
import Payments from '@/components/user/payments.vue'
import Description from '@/components/user/profile_container/description/description'
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'main--layout',
  middleware: 'onlyAuth',
  data () {
    return {
      moreOptions: false,
      modal: false,
      currentPanel: 'os-tickets'
    }
  },
  components: {
    'os-modal': Modal,
    'os-personal--details': PersonalDetails,
    'os-listings': Listings,
    'os-tickets': Tickets,
    'os-payment--plan': PaymentPlan,
    'os-questions': Questions,
    'os-payments': Payments,
    'os-description': Description
  },
  methods: {
    ...mapActions({
    }),
    ShowMoreOptions () {
      this.moreOptions = !this.moreOptions
    },
    toggleModal () {
      this.modal = !this.modal
    },
    openPanel (panel) {
      this.currentPanel = panel
    },
    updateDescription(data) {
        this.$store.dispatch('user/UpdateDescription', data)
    }
  },
  computed: {
    ...mapGetters({
      user: 'authentication/GetAuthUser',
      isAuth: 'authentication/isAuth'
    }),
    details () {
      if (this.currentPanel === 'os-personal--details') {
        return this.user
      }
    }
  }
//   created () {
//     this.$bus.$on('changePlan', () => { this.toggleModal() })
//   }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.profile {
    @include layout--container;
    width: 100%;

    @media only screen  and (min-width : 768px) {
       padding-left: 100px;
       position: relative;
    }
}

.profile__item {
    @include layout--item;
    width: 100%;
    margin: 0;
}



.l-profile__navbar {
    position: relative;
    padding-top: 40px;

    @media only screen  and (min-width : 768px) {
        height: 100%;
        padding-top: 0;
    }
}

.profile__navbar {
    width: 100%;
    background-color: #60A4C0;
    list-style: none;
    padding: 0;
    margin: 0;

    @media only screen  and (min-width : 768px) {
        height: 100%;
        padding-top: 30px;
    }
}


.profile__option {
    @include layout--item;
    width: layout--item--width(4, 3, true);
    display: inline-block;
    font-size: 0.8em;
    color: #ffffff;
    text-align: center;
    padding: 10px 1px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    margin: 0px -4px 0 -4px;

    &:hover {
        color: #666666;
        transition: 0.3s;
    }

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(1, 12, true);
        margin-left: 0;
        padding-left: 9px;
        text-align: left;
    }
    
}

.profile__option--icon {
    padding: 2px;
}

.profile__option--active {
    border-bottom: 5px solid green;

    @media only screen  and (min-width : 768px) {
        border-left: 5px solid green;
        border-bottom: none;
        padding-left: 2px;
    }
}


.profile__more--options {
    border-top: 5px solid grey;
    margin-top: -5px !important;
    padding: 0;
    margin: 0;
    list-style: none;

    @media only screen  and (min-width : 768px) {
        border-top: none;
        margin-top: 0 !important;
    }
}


.profile__navbar__tracker {
    background-color:grey;
    height: 5px;
    width: 100%;
    bottom: 0px;
    z-index: 1;
    position: absolute;

    @media only screen  and (min-width : 768px) {
        height: 100%;
        width: 5px;
        left: 0;
        top: 0;
    }
}


// .profile__option--md-hide {
//     @media only screen  and (min-width : 768px) {
//        display: none;
//     }
// }









.profile__password--change {
    margin: 40% auto 0 auto;
    width: 280px;
}











.profile__listings {
    padding: 12px;
    width: 100%;
    display: block;

    @media only screen  and (min-width : 768px) {
       border-top: 1px solid #eee;
       margin-right: 10px;
    }
}

.profile__listings-item {
    background-color: #F2F2F2;
    padding: 10px 7px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: rgb(194, 193, 193);
        transition: 0.4s;
    }
}

.profile__listings-id, .profile__listings-title {
    color: #666666;
}

.profile__listings-id {
    padding-right: 5px;
}

.profile__listings-button {
    background-color: #FFFFFF;
    color: #666666;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
}


@media only screen  and (min-width : 768px) {
    .profile__navbar--md--expand-left {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        height: 100%;
        width: 100px;
    }
}



</style>
