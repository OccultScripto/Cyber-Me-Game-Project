


window.onload = (function(){
	document.getElementById('scoreval').value=localStorage.getItem('score');
	//alert(localStorage.getItem('score'));
	

});

$(document).ready(function(){
		document.getElementById('scoreval').value=localStorage.getItem('score');
			$('li').click(function(){
					//$(this).toggleClass();
		 		$(this).addClass('active');
				$(this).siblings().removeClass('active');
		
			});
	
		});


function varf(){	
	
	return document.getElementById('food').value;
};

function setValue(nr){

var x=varf();
var half=(+x) *  (+(nr+0)/100);
x=+x + +half;
if (x<=50){	
	localStorage.setItem('totalfood',1);
	value=localStorage.getItem('totalfood');
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
}
else if (x>50 && x<=100){
	localStorage.setItem('totalfood',2);
	value=localStorage.getItem('totalfood');
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
}
else if (x>100 && x<=200){
	localStorage.setItem('totalfood',3);
	value=localStorage.getItem('totalfood');
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
} else if (x>200 && x<=500){
	localStorage.setItem('totalfood',4);
	value=localStorage.getItem('totalfood');
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
} else {
	localStorage.setItem('totalfood',5);
	value=localStorage.getItem('totalfood');
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
}
};


function addTotal(){
	//localStorage.setItem('score',0);
	sum= +localStorage.getItem('score') + +localStorage.getItem('totalfood');
	localStorage.setItem('score',sum);
	v=localStorage.getItem('score');
	document.getElementById('scoreval').value=v;
	confirm("Ok: "+v+" ?");	
	
};


