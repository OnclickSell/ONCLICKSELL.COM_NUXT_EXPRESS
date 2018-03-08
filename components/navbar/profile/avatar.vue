<template>
    <div>
        <nuxt-link tag="span" to="/profile" class='navbar__profile--avatar navbar__icon'></nuxt-link>
        <span class='navbar__profile--notifications navbar__icon'><i>45</i></span>
    </div>

</template>

<script>

export default {
  
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.navbar__logo {
    max-width: 60px;
}

.slider {
    top: 60px;
}

.navbar {
    @include layout--container;
    width: 100%;
    padding: 5px;
    z-index: 100;
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
}

.navbar--fixed {
    position: fixed;
}

 @media all  and (max-width : 768px) {
       .menu {
        display: none !important;
       }
}



.navbar__icon {
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
}

.navbar__icon--hamburger {
    @include layout--item;
    // background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513483282/OnclickSell.com/Icons/Onclicksell.com-nav-Hamburger-Icon-Grey.svg');
    height: 50px;
    width: 60px;
    position: absolute;
    right: 10px;
    top: 4px;
    cursor: pointer;

    // &:hover {
    //     background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513483282/OnclickSell.com/Icons/Onclicksell.com-nav-Hamburger-Icon-Grey.svg');
    //     transition: 0.3s;
    // }

    @media all  and (min-width : 768px) {
       display: none;
    }
    
}


.navbar__list {
    @include layout--container;
    @include layout--item;
    list-style: none;
    padding: 0;
    padding-top: 20px;
    margin: 0;
    width: 100%;
    background-color: #FFFFFF;
    position: fixed;
    z-index: 100;
    top: 58px;
    bottom: 0;
    right: 0;
    border-top: 1px solid #eeeeee;
    overflow: hidden;

    @media all  and (min-width : 768px) {
       position: relative;
       width: 90%;
       border: none;
       padding: 0 0 0 2%;
       top: 0px;
    }

    @media all  and (min-width : 800px) {
       padding: 0 0 0 6%;
    }

    @media all  and (min-width : 860px) {
       padding: 0 0 0 13%;
    }

    @media all  and (min-width : 960px) {
       padding: 0 0 0 18%;
    }

    @media all  and (min-width : 1000px) {
       padding: 0 0 0 21%;
    }
    
    @media all  and (min-width : 1200px) {
       padding: 0 0 0 26%;
    }
}

.navbar__list--item {
    padding: 12px 20px;
    @include layout--item;
    width: 100%;

    > span {
        color: #169BD5;
        font-size: 1.2em;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            columns: rgb(213, 228, 235);
            transition: 0.3s;
        }
    }

    @media all  and (min-width : 768px) {
       width: auto;
       padding: 12px;
    }
}


.navbar__profile {
    @include layout--container;
    display: block;
    margin-bottom: 10px;

    @media all  and (min-width : 768px) {
      width: auto;
      padding: 12px;
      position: absolute;
      right: 10px;
      top: 0px;
      margin-left: 30px;
    }
}


.navbar__profile--avatar {
    @include layout--item;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg');
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 0px 3px 1px rgba(222,213,222,1);

    @media all  and (min-width : 768px) {
       width: 30px;
       height: 30px;
       margin: 0;
    }
}

.navbar__profile--notifications {
    @include layout--item;
    background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
    width: 40px;
    height: 40px;
    margin: 15px auto auto 60%;
    position: relative;
    // border-left: 1px solid #eeeeee;

    > i {
        color: rgba(248, 16, 16, 0.5);
        background-color: rgba(255, 255, 255, 0.782);
        font-size: 0.7em;
        font-weight: bold;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        top: 0px;
        right: 0px;

        @media all  and (min-width : 768px) {
          font-size: 0.5em;
        }
    }

    &:hover {
        background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
        transition: background-image 0.3s;
    }

    @media all  and (min-width : 479px) {
       margin: 15px auto auto 70%;
    }

    @media all  and (min-width : 599px) {
       margin: 15px auto auto 75%;
    }

    @media all  and (min-width : 768px) {
       margin: 0 0 0 25px;
       height: 30px;
       width: 30px;
    }
}


























.navbar-enter-active {
    animation: slide-down 0.2s ease-out both;
}

.navbar-leave-active {
    animation: slide-up 0.2 ease-in both;
}

.navbar-move {
    transition: transform 0.2s;
}

.slide-leave-active {
    position: absolute;
}

@keyframes slide-down {
    from {
        height: 0;
        opacity: 0;
    }

    to {
        height: 100%;
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        height: 100%;
    }

    to {
        height: 0;
    }
}

#navbar--main--container {
    background-color: #FFFFFF;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    box-shadow: 0px 2px 5px 0px rgba(48, 47, 47, 0.75);
    height: 50px;
    width: 100%;

    > div {

        @include layout--container;
        .navbar--top--logo {
            @include layout--item;
            width: layout--item--width(2, 2, false);
            
            img {
                width: 64px;
                height: 50px;
            }
        }

        .navbar--left--links {
            @include layout--item;
            width: layout--item--width(2, 10, false);
            display: block;

            #navbar__hamburger__icon {
                width: 32px;
                height: 32px;
                display: inline-block;
                margin-left: 90%;
                margin-top: 10px;
                background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513483282/OnclickSell.com/Icons/Onclicksell.com-nav-Hamburger-Icon-Grey.svg');
                background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513483282/OnclickSell.com/Icons/Onclicksell.com-nav-Hamburger-Icon-Grey.svg');
                background-position: center;
                background-repeat: no-repeat;

                @media only screen  and (min-width : 768px) {
                    display: none;
                }
            }

            > .navbar--links--container {
                @include layout--container;
                position: fixed;
                z-index: 100;
                width: 100%;
                height: 100%;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: #FFFFFF;

                @media only screen  and (min-width : 768px) {
                    position: static;
                }

                > div {
                    @include layout--item;
                    // @include layout--item--offset(1, 1);
                    width: layout--item--width(1, 12, false);
                    margin-top: 10px;
                    margin-left: 5%;
                    height: 50px;

                    @media only screen  and (min-width : 768px) {
                            float: right;
                            margin-left: 0;
                    }

                }

                .navbar__xs__top__logo {
                    @include layout--container;
                    height: 50px;
                    width: layout--item--width(1, 12, false);

                    @media only screen  and (min-width : 768px) {
                        display: none;
                    }

                    > div:first-child {
                        @include layout--item;
                        width: layout--item--width(2, 6, false);
                    }
                    img {
                        width: 64px;
                        height: 50px;
                    }

                    > div:last-child {
                        @include layout--item;
                        width: layout--item--width(2, 6, false);

                        i {
                            background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513503251/OnclickSell.com/Icons/Onclicksell.com-nav-Close-Icon-Grey.svg');
                            background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513503251/OnclickSell.com/Icons/Onclicksell.com-nav-Close-Icon-Grey.svg');
                            background-position: center;
                            background-repeat: no-repeat;
                            display: block;
                            width: 16px;
                            height: 16px;
                            padding-top: 35px;
                            margin-left: 90%;
                            

                        }
                    }
                }

                .navbar__profile__container {
                    @include layout--container;
                    height: 70px;
                    margin-top: 10%;
                    margin-bottom: 10%;
                    margin-left: 3%;

                    @media only screen  and (min-width : 768px) {
                        margin-top: 0;
                        margin-bottom: 0;
                        margin-left: 10%;
                        height: 50px;
                        width: layout--item--width(7, 2, false);
                    }

                    > div:first-child {
                        @include layout--item;
                        width: layout--item--width(2, 6, false);

                        i {
                            background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg');
                            background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513505162/OnclickSell.com/Icons/Onclicksell.com-avatar-male-64px.svg');
                            background-position: center;
                            background-repeat: no-repeat;
                            display: block;
                            width: 64px;
                            height: 64px;
                            border-radius: 50%;

                            @media only screen  and (min-width : 768px) {
                                width: 32px;
                                height: 32px;
                                margin-top: 10px;
                            }
                        }
                    }

                    > div:last-child {
                        @include layout--item;
                        height: 100%;
                        width: layout--item--width(2, 6, false);
                        @media only screen  and (min-width : 768px) {
                            border-left: 1px solid #999999;
                            height: 80%;
                            margin-top: 5%;
                            padding-left: 5px;
                        }

                        i {
                            background-image: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
                            background: url('http://res.cloudinary.com/onclicksell-com/image/upload/v1513506291/OnclickSell.com/Icons/Onclicksell.com-notification-bell-64px.svg');
                            background-position: center;
                            background-repeat: no-repeat;
                            display: block;
                            width: 32px;
                            height: 32px;
                            margin-top: 22px;
                            margin-left: 85%;

                            @media only screen  and (min-width : 768px) {
                                margin-top: 0;
                                margin-left: 10%;
                                margin-top: 7px;
                            }
                        }
                    }
                }

                .navbar__link { 
                    height: 30px;

                    @media only screen  and (min-width : 768px) {
                        margin-top: 0;
                        margin-bottom: 0;
                        padding-top: 5px;
                        width: layout--item--width(7, 2, false);
                        height: 50px;
                        font-size: 12px;

                        &:nth-child(6) {
                            width: layout--item--width(7, 2, false);
                        }

                        &:nth-child(7) {
                            width: layout--item--width(12, 2, false);
                        }
                    }

                    span {
                        padding-top: 10px;
                        color: #169BD5;
                        font-size: 1rem;
                        font-family: 'PT Sans', sans-serif;
                        font-weight: bold;
                        cursor: pointer;
                        display: block;
                    }
                }
            }
        }
    }
}




</style>




