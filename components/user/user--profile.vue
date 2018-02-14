<template>
    <div class='profile__item'>
            <div class='l-profile__image'>
                <img class='profile__image' src='http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg' alt='Aliakbar"s photo'>
                <div class='profile__name'>{{ name }}</div>
            </div>
    
            <div class='l-profile__description'>
                <p class='profile__description'>{{ checkDescription }}</p>
                <div class='profile__join'>Joined since: 20/10/2017</div>
            </div>
    </div>
</template>
<script>
export default {
  props: {
      name: {
          type: String,
          required: true
      },
      description: {
          type: String,
          required: false
      },
      profilePicture: {
          type: String,
          required: true
      }
  },
  computed: {
    checkDescription () {
      return this.description.length != 0 ? this.description : 'Add a description' 
    }
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-profile__image {
    width: 100%;
    text-align: center;
    margin-top: 60px;
}

.profile__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #8CB662;
    margin: auto;
}

.profile__name {
    padding: 12px;
    color: #666666;
}

.l-profile__description {
    text-align: center;
    @include layout--container;
}

.profile__description {
    padding: 12px;
    @include layout--item;
    @include layout--item--offset(1, 2);
    width: layout--item--width(1, 10, false);
    font-size: 0.9em;
    color: #666666;
    text-align: left;
}

.profile__join {
    font-size: 0.9em;
    color: #666666;
    text-align: left;
    padding: 12px;
    @include layout--item;
    @include layout--item--offset(1, 2);
    width: layout--item--width(1, 10, false);
}

</style>