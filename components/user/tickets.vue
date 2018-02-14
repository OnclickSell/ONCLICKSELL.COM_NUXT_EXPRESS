<template>
    <div class='profile__tickets'>
                        <h3 class='profile__tickets--title'>Your Tickets</h3>

                        <div class='profile__ticket'>
                            <p class='profile__ticket--item'><span>Status</span> Closed</p>
                            <p class='profile__ticket--item'><span>Subject</span> Login Issue</p>
                            <p class='profile__ticket--item'><span>Opened at</span> 10/12/2017</p>
                            <p class='profile__ticket--item'><span>Last Update</span> 10/12/2017</p>
                            <button class='profile__ticket--button'>View</button>
                        </div>

                        <div class='profile__ticket'>
                            <p class='profile__ticket--item'><span>Status</span> Closed</p>
                            <p class='profile__ticket--item'><span>Subject</span> Login Issue</p>
                            <p class='profile__ticket--item'><span>Opened at</span> 10/12/2017</p>
                            <p class='profile__ticket--item'><span>Last Update</span> 10/12/2017</p>
                            <button class='profile__ticket--button'>View</button>
                        </div>

                        <div class='profile__ticket'>
                            <p class='profile__ticket--item'><span>Status</span> Closed</p>
                            <p class='profile__ticket--item'><span>Subject</span> Login Issue</p>
                            <p class='profile__ticket--item'><span>Opened at</span> 10/12/2017</p>
                            <p class='profile__ticket--item'><span>Last Update</span> 10/12/2017</p>
                            <button class='profile__ticket--button'>View</button>
                        </div>

                        <div class='profile__ticket'>
                            <p class='profile__ticket--item'><span>Status</span> Closed</p>
                            <p class='profile__ticket--item'><span>Subject</span> Login Issue</p>
                            <p class='profile__ticket--item'><span>Opened at</span> 10/12/2017</p>
                            <p class='profile__ticket--item'><span>Last Update</span> 10/12/2017</p>
                            <button class='profile__ticket--button'>View</button>
                        </div>

                    </div>
</template>
<script>
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.profile__tickets {
    padding: 20px 0 0 0;
}

.profile__tickets--title {
    padding: 12px 5px;
    font-size: 1.4em;
    color: #aaa7a7;
}

.profile__ticket {
    padding: 20px;
    background-color: #F2F2F2;
    border-bottom: 3px solid rgb(209, 209, 209);
    position: relative;
}

.profile__ticket--item {
    font-size: 0.9em;
    color: #666666;
    margin: 0;
    padding: 3px 2px;

    span {
        font-size: 1em;
        font-weight: bold;
    }
}


.profile__ticket--button {
   padding: 5px 10px;
   color: #FFFFFF;
   text-align: center;
   font-size: 0.9em;
   background-color: #3EA98D;
   position: absolute;
   right: 10px;
   bottom: 15px;
   border: none;
   border-radius: 3px;
   cursor: pointer;

   &:hover {
       color: rgb(218, 217, 217);
       transform: 0.3s;
   }
}
</style>