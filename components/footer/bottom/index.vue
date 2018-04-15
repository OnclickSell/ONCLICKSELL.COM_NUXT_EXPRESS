<template>
    <!-- <div class="footer_bottom">
        <p class="footer_bottom-text">@ 2017 - OnclickSell.com. All rights reserved.</p>
    </div> -->
    <div class="footer_bottom">

    	<div class="footer_bottom-left">
    		<div class="l-footer_bottom-left">
    			<h5>ONCLICKSELL.COM</h5>
    		    <p class="footer_copyright">@ 2017 - OnclickSell.com. All rights reserved.</p>
    		</div>
    	</div>
    	<div class="footer_bottom-right">
    		<div class="footer_bottom-columns">
    			<ul>
    				<li>About Us</li>
    				<li>Our Team</li>
    				<li>Blog</li>
    			</ul>
    		</div>
    		<div class="footer_bottom-columns">
    			<ul>
    				<li>Best Sellers</li>
    				<li>Pricing</li>
    				<li>Newest</li>
    			</ul>
    		</div>
    		<div class="footer_bottom-columns">
    			<ul>
    				<li>Contact Us</li>
    				<li>Healp</li>
    			</ul>
    		</div>
    	</div>
    	
    </div>
</template>

<script>
export default {
}
</script>


<style lang='scss' scoped>
@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';




.footer_bottom {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    color: #FFFFFF;
    padding: 10px;
    text-align: center;
    background: #51cea7;

    @media all and (min-width: 700px) {
      padding: 40px 0;
    }

    @media all and (min-width: 960px) {
      padding: 50px 0;
    }
}

.footer_bottom-left {
	width: 100%;
	@media all and (min-width: 700px) {
      width: 50%;
      padding-top: 0;
    }
}

.l-footer_bottom-left {
	width: 100%;
	margin: auto;
	padding: 12px;
	padding-top: 60px;
	@media all and (min-width: 700px) {
      width: 80%;
      padding-top: 0;
    }
}

.l-footer_bottom-left > h5 {
	text-align: left;
	margin: 0;
	font-size: 0.9em;
	@include workSans_medium;
}

.footer_copyright {
	text-align: left;
	margin: 0;
	font-size: 0.8em;
	@include sourceSans_extra-light;
}

.footer_bottom-right {
	width: 100%;
	display: flex;
	padding: 20px;
	padding-top: 62px;
	@media all and (min-width: 700px) {
      width: 50%;
      padding-top: 0;
    }
}


.footer_bottom-columns {
	width: 40%;
}

.footer_bottom-columns > ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.footer_bottom-columns > ul li {
	text-align: left;
	font-size: 0.9em;
	@include workSans_light;
}




.footer_bottom-text {
	width: 100%;
    font-size: 0.8em;
    text-align: center;
}


</style>




