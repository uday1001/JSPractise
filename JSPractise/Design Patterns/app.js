/*
Constructer
Scope,Bind
addEventListener
*/
var App=function (){
	this.num=0;
	var self=this;
	this.bindEvents=function(){

		var inc=document.getElementById('inc');
		inc.addEventListener('click',
			function(){
				self.increment();
			});

		var dec=document.getElementById('dec')
		dec.addEventListener('click',this.decrement.bind(self));

	}

	this.increment=function(){
		++this.num;
		this.updateRes();
	}

	this.decrement=function(){
		--this.num;
		this.updateRes();
	}

	this.updateRes=function(){
		document.getElementById('res').innerHTML=this.num;
	}
}

var app=new App;
app.bindEvents();