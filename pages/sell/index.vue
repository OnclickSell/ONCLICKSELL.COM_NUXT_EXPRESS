<template>
    <div>

        <div class='l-basic-info'>

            <div class='basic-info__item'>
                <os-progress-bar step='1'>
                    <h1 slot='title'>Bassic informatin about your listing</h1>
                    <p slot='description'>A good title and description can give a transparent picture of your project and helps clients find the right project they need.</p>
                </os-progress-bar>
            </div>

            <div class='basic-info__item basic-info__input'>
                <os-input-help/>
                <os-input placeholder='Laravel 5.5.5 Full Api' title='Project title'/>
            </div>

            <div class='basic-info__item basic-info__textarea'>
                <os-input-help/>
                <os-textarea title='Application  Description'/>
            </div>

            <div class='basic-info__item'>
                <os-button title='NEXT'/>
            </div>

            <div class='basic-info__item basic-info__input--top-margin'>
                <os-explainer title='Basic Info' class='basic__info--explainer'>
                    <p slot='content'>A project description is the information clients expect to know when purchasing your project.</p>
                </os-explainer>
            </div> 

        </div>
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import PrograssBar from '@/components/sell/Progress--bar.vue'
import Input from '@/components/sell/input.vue'
import Textarea from '@/components/sell/textarea.vue'
import Button from '@/components/sell/button.vue'
import InputHelp from '@/components/sell/input--help.vue'

export default {
  layout: 'main--layout',
  middleware: 'checkAuth',
  components: {
    'os-progress-bar': PrograssBar,
    'os-input': Input,
    'os-textarea': Textarea,
    'os-button': Button,
    'os-explainer': Explainer,
    'os-input-help': InputHelp
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.l-basic-info {
    @include layout--container;
    position: relative;
    padding: 5px;
}

.basic-info__item {
    @include layout--item;
    width: layout--item--width(1, 12, false);
    margin-top: 5%;

    @media all and (min-width: 599px) {
        width: layout--item--width(1, 10, false);
        @include layout--item--offset(1, 1);
    }

    @media all and (min-width: 960px) {
        width: layout--item--width(1, 9, false);
        @include layout--item--offset(8, 2);
    }
}

.basic-info__input {
    margin-top: 40%;
}

.basic-info__textarea {
    margin-top: 20%;
}

.basic__info--explainer {
    margin-top: 20%;
}

</style>
