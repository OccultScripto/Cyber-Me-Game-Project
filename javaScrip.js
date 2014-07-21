document.addEventListener("DOMContentLoaded", function() { 
	init(); 
});

var active = false;
var option = "Walk";
var puncte = 0;
var limit = 1;

//var p = GetLocation();

function init(){ 
	console.log("am intrat in init");
	inActiveC(); 
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById("Walk").checked = true;
} 

function startTimer () { 
	timer.start(); 
	setTimeout(stopTimer,5000); 
	} 

function stopTimer () { 
	timer.stop; } 

function isCheck() { 
	console.log("Am intrat in isCheck"); 
	return document.getElementById("myonoffswitch").checked; 
	}; 

function getActionType() { 
	if(document.getElementById('Run').checked) { 
		return "Run"; 
		}else if(document.getElementById('Walk').checked) { 
			return "Walk"; 
			}else return "Drive"; 
	}; 


function distanta2Pc(p1,p2){
	var x3 = (p1.x - p2.x) * (p1.x - p2.x);
	var y3 = (p2.y - p2.y) * (p1.y - p2.y);
	
	return Math.pow((x3 + y3), 1/2);
}

function addDistance(){
	return (Math.random(10) * 10 + 1);
}

function adaugaPuncte(distance){
	if (option == "Walk"){
		if (distance / 1000 > limit){
			this.limit ++;
			this.puncte = puncte + 10;
		}
	}
	
	if (option == "Run"){
		if (distance / 2000 > limit){
			this.limit ++;
			this.puncte = puncte + 10;
		}
	}
	
	if (option == "Drive"){
		if (distance / 5000 > limit){
			this.limit ++;
			this.puncte = puncte + 10;
		}
	}
}

function start (d,t,o) {           
   
	setTimeout(function () {
		var opt = o;    
  	 	var distance = d; 
		var time = t; 
		var speed;
		time = time + 1; 
		
		if (false){
			var p2 = GetLocation();		
			console.log(p.x + " " + p.y);
			distance = distance + distanta2Pc(p,p2);
			this.p = p2;
		}
		
		var d2 = addDistance();
		distance = distance + d2; 
		aspeed = distance / time; 
		speed = d2/3;
		document.getElementById('Speed').value=("Speed: " + speed.toFixed(2) + " m/s"); 
		document.getElementById('AverageSpeed').value=("AverageSpeed: " + aspeed.toFixed(2) + " m/s"); 
		document.getElementById('Distance').value=("Distance: " + distance.toFixed(2)+ " m");    
		adaugaPuncte(distance);    
		document.getElementById('Score').value=("Score: " + this.puncte);                          
    	if (active && opt == option) {            
      	 	start(distance,time,opt);             
  	 	} else {
  	  	this.limit = 1;
  	  	start(0,0,option);
  	 	}                        
  }, 2000);
}

function activeC(){
	if (active == false){
		this.active = true;
		document.getElementsByClassName('Apeareance')[0].style.visibility='visible';
		this.limit = 0;
		start(0,0,option);  
	}
};

function inActiveC(){
	this.limit = 1;
	this.active = false;
	document.getElementsByClassName('Apeareance')[0].style.visibility='hidden';
	document.getElementById('Speed').value=("Speed: 0 km/h"); 
	document.getElementById('Distance').value=("Distance: 0 km"); 
	
}

function selectOption(){
	if (document.getElementById("Walk").checked == true){
		this.option = "Walk";
	}
	if (document.getElementById("Run").checked == true){
		this.option = "Run";
	}
	if (document.getElementById("Drive").checked == true){
		this.option = "Drive";
	}
}

navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation() {
	return new punct(location.coords.latitude,location.coords.longitude);
}

function punct(x,y){
	this.x = x;
	this.y = y;
}

