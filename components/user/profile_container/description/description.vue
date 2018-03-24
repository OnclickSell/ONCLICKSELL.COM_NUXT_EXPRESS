<template>
    <div class='profile__item'>
            <div class='l-profile__description'>
                <p class='profile__description'>{{ checkDescription }}</p>
                <div class='profile__join'>Joined since: 20/10/2017</div>
                <input v-show="show" v-model="data.description" type="text" name="description">
                <button @click="show = true">update</button>
                <button @click="descriptionUpdated">submit</button>
            </div>
    </div>
</template>
<script>
export default {
  props: {
      description: {
        type: String,
        required: true
      }
  },
  data() {
    return {
      show: false,
      data: {
        description: this.description
      }
    }
  },
  computed: {
    checkDescription () {
      return this.description || 'Add a description' 
    }
  },
  methods: {
    descriptionUpdated() {
      this.$emit('descriptionUpdated', this.data)
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