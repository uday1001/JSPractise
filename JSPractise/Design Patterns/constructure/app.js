/*
Constructer
Scope,Bind
addEventListener
*/
var App=function () {

	var self = this;

	self.num = 0;
	
	self.bindEvents = function() {

		var inc=document.getElementById('inc');
		inc.addEventListener('click',self.increment);

		var dec=document.getElementById('dec');
		dec.addEventListener('click',self.decrement);
		self.updateRes();
	};

	self.increment = function() {
		++self.num;
		self.updateRes();
	};

	self.decrement = function() {
		--self.num;
		self.updateRes();
	};

	self.updateRes = function() {
		document.getElementById('res').innerHTML=self.num;
	};
}


var app = new App;
app.bindEvents();