<template>
	<div class="div1" @mousemove="showDiv1()" @mouseout="hideDiv1()">
	  <div class="div_header">
		教师联系方式
	  </div>
	  <div class="div_main" id="div_main">
  
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Header',
	methods:{
	  showDiv1(){
		var d1 =  document.getElementById('div_main');
		d1.style.cssText = 'visibility: visible;'
	  },
	  hideDiv1()
	  {
		var d1 =  document.getElementById('div_main');
		d1.style.cssText='animation-name:example; animation-duration:0.1s;animation-fill-mode: forwards;';
	  }
	}
  }
  </script>
  <style>
	@keyframes example{
	  from{
		visibility: visible;
  
	  }
	  to{
		visibility: hidden;
	  }
	}
  </style>
  <style scoped>
  .div1 {
	height: 50px;
	width: 200px;
	border: 1px solid;
	position: fixed;
	top: 0px;
	right: 100px;
	cursor: pointer;
  }
  
  .div_header {
	width: 200px;
	height: 50px;
	/* border: 1px solid; */
	line-height: 50px;
	text-align: center;
	background-color: #8EC5FC;
	background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  
  }
  .div_main {
  height: 100px;
  width: 200px;
  margin-top: 10px;
  background-image: url('../images/wechat.jpg');
  background-size: cover; /* Stretch and fit the image */
  /* display: none; */
  visibility: hidden;
}


  </style>
  