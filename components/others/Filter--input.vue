<template>
    <div>
        <h3 class='filter__drp--title'>{{ title }}</h3>
        <div class='filter__drp'>
            <p class='filter__drp--selected'>{{ selected }}</p>
            <i class='filter__drp--icon'><os-hamburger width='10px' height='10px'/></i>
            <div class='filter__drp--content'>
                <ul class='filter__drp--list' >
                    <li class='filter__drp--list-item' v-for='item in items' :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title', 'selected', 'items']
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.filter__drp--title {
    width: 100%;
    display: block;
    padding: 5px 0;
    padding-top: 10px;
    color: $default--font--colour;
    font-size: 0.8em;
}

.filter__drp--icon {
    display: block;
    position: absolute;
    right: 1px;
    top: 6px;
}

.filter__drp {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    padding: 5px 12px;
    position: relative;
}

.filter__drp--selected {
    display: inline-block;
    color: #c4c4c4;
}

</style>




