<template>
 <div class='profile__projects'>
                        <div class='profile__projects--graph'>
                            Graphs...
                        </div>

                        <div class='profile__project'>
                            <h3 class='profile__project--title'>Laravel and Vue.js 5 pages website</h3>
                            <p class='profile__project--purchased-on'><span>Purchased on:</span> 12/05/2018</p>
                            <p class='profile__project--purchased-by'><span>Purchased on:</span> Mark Zuckerberg</p>
                            <p class='profile__project--price'><span>Price:</span> $1200 USD</p>
                        </div>

                        <div class='profile__project'>
                            <h3 class='profile__project--title'>Laravel and Vue.js 5 pages website</h3>
                            <p class='profile__project--purchased-on'><span>Purchased on:</span> 12/05/2018</p>
                            <p class='profile__project--purchased-by'><span>Purchased on:</span> Mark Zuckerberg</p>
                            <p class='profile__project--price'><span>Price:</span> $1200 USD</p>
                        </div>

                        <div class='profile__project'>
                            <h3 class='profile__project--title'>Laravel and Vue.js 5 pages website</h3>
                            <p class='profile__project--purchased-on'><span>Purchased on:</span> 12/05/2018</p>
                            <p class='profile__project--purchased-by'><span>Purchased on:</span> Mark Zuckerberg</p>
                            <p class='profile__project--price'><span>Price:</span> $1200 USD</p>
                        </div>
                    </div>
</template>
<script>
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';



.profile__projects {
    padding: 12px;
}

.profile__project {
    background-color: #F2F2F2;
    border-radius: 4px;
    padding: 12px;
    margin-top: 10px;
}

.profile__project--title {
    color: #666666;
    margin-bottom: 10px;
    margin-top: 0;
}

.profile__project--purchased-on, .profile__project--purchased-by, .profile__project--price  {
    font-size: 0.9em;
    color: #666666;
    margin: 0;
    padding: 2px 0;

    span {
        font-size: 1em;
        font-weight: bold;
    }
}


</style>