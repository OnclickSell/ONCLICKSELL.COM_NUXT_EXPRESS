
<template>
 <div class="subscribe_field">
    <input 
    	type="text" 
    	placeholder="Subscribe news letter" 
    	name="subscribe" 
    	v-model="data"
    	class="subscribe_field-input" />
 </div>
</template>

<script>
export default {
  data() {
  	return {
  		data: ''
  	}
  }
}
</script>


<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.subscribe_field {
	position: relative;
}

.subscribe_field-input {
	width: 100%;
	border: none;
	padding: 12px;
	color: #FFFFFF;
	background-color: #4b4c4b;
	border-radius: 2px;
}



.subscribe_field-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #FFFFFF;
}
.subscribe_field-input::-moz-placeholder { /* Firefox 19+ */
  color: #FFFFFF;
}
.subscribe_field-input:-ms-input-placeholder { /* IE 10+ */
  color: #FFFFFF;
}
.subscribe_field-input:-moz-placeholder { /* Firefox 18- */
  color: #FFFFFF;
}


</style>




