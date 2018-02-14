
<template>
 <div class='l-filter'>
        <p class='filter__title'>Apply Filters <os-filter class='filter__icon' width='25px' height='25px'/></p>
        <div class='l-filter__item'>
            <div class='filter__category--basic'>
            <div class='filter__item no--border'>
                <p class='filter__item--title'>Basic</p>
                <FilterInput title='Project Type' selected='E-Commerce' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

            <div class='filter__item no--border'>
                <p class='filter__item--title invisible'>Front-end</p>
                <FilterInput title='Price range' selected='$100 - $10000' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

            </div>



        <div class='filter__category--front-end'>
            <div class='filter__item'>
                <p class='filter__item--title'>Front-end</p>
                <FilterInput title='Plateform' selected='PHP' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

            <div class='filter__item'>
                <p class='filter__item--title invisible'>Front-end</p>
                <FilterInput title='Framework' selected='Laravel' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

        </div>




        <div class='filter__category--back-end'>
            <div class='filter__item'>
                <p class='filter__item--title'>Back-end</p>
                <FilterInput title='Plateform' selected='PHP' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

            <div class='filter__item'>
                <p class='filter__item--title invisible'>Back-end</p>
                <div>
                    <FilterInput title='Framework' selected='Laravel' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
                </div>
            </div>
        </div>

        <div class='filter__category--database'>

            <div class='filter__item'>
                <p class='filter__item--title'>Databases</p>
                <FilterInput title='Databases' selected='My SQL' items="['Static', 'Shop - website', 'Web Application', 'Partial']" />
            </div>

            <div class='filter__item'>
                <div class='l-filter__button'>
                    <button class='filter__button'>Apply Filters</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import FilterInput from './Filter--input.vue'

export default {
  components: {
    FilterInput
  }
}
</script>

<style lang='scss'>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.l-filter {
    @include layout--container;
    position: relative;
    padding-bottom: 5%;
}

.filter__title {
    padding: 7px 5px;
    background-color: #F2F2F2;
    color: #666666;
    font-weight: bold;
    width: 100%;
    position: relative;
}
      

.filter__icon {
    position: absolute;
    right: 5px;
}

.l-filter__item {
    @include layout--container;
    @include layout--item;
    position: relative;
    width: 100%;
    padding: 2%;
    margin: 0;

    // @media only screen  and (min-width : 768px) {
    //         padding: 3%;
    //     }
}

        

.filter__item {
    @include layout--item;
    width: layout--item--width(2, 6, true);
    // border-top: 1px solid #e6e6e6;
    margin-left: 0;
    margin-right: 0;
    padding: 0 5px;

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
        margin: 0px 10px 0 10px;
    }
}

.filter__category--basic, .filter__category--front-end, .filter__category--back-end, .filter__category--database {
    @include layout--container;
    @include layout--item;
    margin-top: 20px;
    position: relative;
    border-top: 1px solid #eeeeee;
    width: layout--item--width(1, 12, false);

    @media only screen  and (min-width : 768px) {
        width: layout--item--width(2, 6, false);
    }
}


.filter__item--title {
    background-color: #FFFFFF;
    color: #666666;
    display: block;
    margin-top: -12px;
    margin-left: -20px;
    padding-left: 20px;
    width: 100px; 
}
//


.l-filter__button {
    padding-top: 45px;
}

.filter__button {
    background-color: $default--blue;
    color: #FFFFFF;
    padding: 6px 12px;
    text-align: center;
    width: 100%;
    border: 2px solid $default--blue;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        color: $default--blue;
        background-color: #FFFFFF;
        border: 2px solid $default--blue;
        transition: 0.3s;
    }
}

.filter__drp--content {
    width: 100%;
    position: absolute;
    right: 0;
    top: 100%;
    background-color: #FFFFFF;
    border: 1px solid #e8e2e2;
    z-index: 20;
    display: none;
}


.filter__drp--list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.filter__drp--list-item {
    padding: 5px;
    color: rgb(65, 63, 63);
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    &:hover {
        background-color: #f2ecec;
        transition: background-color 0.3s;
    }
}


.invisible {
    visibility: hidden;
    color: white;
}

.no--border {
    border: none !important;
}
</style>




