/*
Module Pattern
*/

var App=function () {

	var num = 0;
	
	function init() {

		var inc=document.getElementById('inc');
		inc.addEventListener('click',increment);

		var dec=document.getElementById('dec');
		dec.addEventListener('click',decrement);
		updateRes();
	};

	function increment() {
		++num;
		updateRes();
	};

	function decrement() {
		--num;
		updateRes();
	};

	function updateRes() {
		document.getElementById('res').innerHTML=num;
	};

	//init();
	return {
		init:init,
		dec:decrement,
		inc:increment
	};

};



App.init();


// var inc=document.getElementById('inc');
// inc.addEventListener('click',app.inc);

// var dec=document.getElementById('dec');
// dec.addEventListener('click',app.dec);