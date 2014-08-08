document.addEventListener("DOMContentLoaded", function() { 
	init(); 
});

//navigator.geolocation.getCurrentPosition(GetLocation);

var limit = 0;
var active = false;
var refreshTime = 1;
var p1;

//initializarea aplicatiei
function init(){
	console.log("am intrat in init");
	
	this.active = false;
	
  	document.getElementById("Reset").style.visibility='hidden';
	
	$('#info').hide(); 
	
	//document.getElementById("Run").checked = true;
	console.log($('.Options .toggle').length);
	$(".Options .toggle").click(
		function()
		{
			setSelected(this);
		}
	);
	
	$('#onBtn').click(
		function()
		{
			if ($(this).data('active') === true)
			{
				$(this).data('active', false);
				$(this).html('On');
				//$('#info').hide();	
				$(this).css('background','#1f262c');
				onFunction();			
			}
			else
			{
				$(this).data('active', true);
				$(this).html('Off');
				$('#info').show();
				$(this).css('background','#c8c2b2');
				///Start
				onFunction();
			}			
		}
	);
	
	$('#onBtn').click(
		function()
		{
		}
	);
	//document.getElementById('Walk').addEventListener('click', function() { setSelected(this); });
	
	//p1 = findMyCurrentLocation();
};

//obiectul punct care salveaza coordonatele
function punct(x,y){
	console.log("am intrat in punct");
	
	this.x = x;
	this.y = y;
};

//obiectul options care verifica salveaza optiunea selectata
var options = {
	run : false,
	walk : false,
	drive : false,
	
	setSelected : function(node){
		$('.active').removeClass('active');
		$(node).addClass('active');		
		
	},
	
	getSelected : function (){
		console.log("am intrat in options.getSelected");
		return $('.Options .active').attr('data-type');	
		
	},
};

//obiectul details care retine totalWalk, totalRun si totalDrive. 
var details = {
	totalWalk : 0,
	totalRun : 0,
	totalDrive : 0,
	score : 0,
	
	reset : function (){
		console.log("am intrat in details.Reset");
		
		this.totalWalk = 0;
		this.totalRun = 0;
		this.totalDrive = 0;
		this.score = 0;
	},	
};


function addDistance(){
	console.log("am intrat in addDistance");
		
	return (Math.random(10) * 10 + 1);
};

//AdaugaScore - adauga puncte urilizatorului in functie de distanta parcursa si optiunea selectata 
function adaugaScore(distance){
	console.log("am intrat in adaugaScore");
		
	if (options.getSelected() == "Walk"){
		if (distance / 1000 > limit){
			this.limit ++;
			details.score += 2;
		}
	}
	
	if (options.getSelected() == "Run"){
		if (distance / 1000 > limit){
			this.limit ++;
			details.score += 3;
		}
	}
	
	if (options.getSelected() == "Drive"){
		if (distance / 5000 > limit){
			this.limit ++;
			details.score += 1;
		}
	}
};


//actiunea butonului ON;
function onFunction(){
		
	if (this.active == false){
		document.getElementById('info').style.visibility='visible';
		document.getElementById('Reset').style.visibility='visible';
		
		this.active = true;
		this.limit = 1;
		
		//read data from local storage
		
		if (isNaN(localStorage.getItem('Walk'))) details.totalWalk = 0;
		else details.totalWalk =parseFloat(localStorage.getItem('Walk'));
		if (isNaN(localStorage.getItem('Run'))) details.totalRun = 0;
		else details.totalRun =parseFloat(localStorage.getItem('Run'));
		if (isNaN(localStorage.getItem('Drive'))) details.totalDrive = 0;
		else details.totalDrive =parseFloat(localStorage.getItem('Drive'));
		if (isNaN(localStorage.getItem('Score'))) details.score = 0;
		else details.score =parseInt(localStorage.getItem('Score'));
		
		if (details.totalWalk == NaN) details.totalWalk = 0;
		if (details.totalRun == NaN) details.totalRun = 0;
		if (details.totalDrive == NaN) details.totalDrive = 0;
		if (details.score == NaN) details.score = 0;
		
		window.timer = 0; 
		startTime(0,0,options.getSelected());
	} else {
		this.limit = 1;
		this.active = false;
		
		//hide details
  	 	document.getElementById("info").style.visibility='hidden';
  	 	document.getElementById("Reset").style.visibility='hidden';

  	 	//save in localstorage
  	 	localStorage.setItem("Walk", Math.round(details.totalWalk*100)/100);
  		localStorage.setItem("Run", Math.round(details.totalRun*100)/100);
  	 	localStorage.setItem("Drive", Math.round(details.totalDrive*100)/100);
		localStorage.setItem("Score", details.score);
	}
};
      
   
function startTime(distanceIn,timeIn,optionIn){
	window.timer++;
	setTimeout(function () {
		
		// se initializeaza varibaliele 
		var opt = optionIn;    
  	 	var distance = distanceIn; 
		var time = timeIn; 
		var speed;
		time = time + 1; 
		
		//verifica daca s-a modificat pozitia pe gps de la untimul refresh
		if (false){
			this.p1 = p2;
			var p2 = findMyCurrentLocation();	
			d2 = distanta2Pc(p,p2);
			Math.round(d2*100)/100 ;
		}
	
		//se genereaza o distanta random pentru testare
		
		if (true){
			var d2 = addDistance();
			Math.round(d2*100)/100 ;			 
		}
		
		distance = distance + d2;
		aspeed = distance / time; 
		speed = d2/refreshTime;
		
		//verific daca trebuie adaugate puncte
		adaugaScore(distance);  
		
		//actualizez datele in interfata
		document.getElementById('Speed').value=("Speed: " + Math.round(speed*100)/100 + " m/s"); 
		document.getElementById('AverageSpeed').value=("AverageSpeed: " + Math.round(aspeed*100)/100 + " m/s"); 
		document.getElementById('Distance').value=("Distance: " +  Math.round(distance*100)/100 + " m");    
		document.getElementById('Score').value=("Score: " + details.score);                          
    	
    	//daca butonul de on este inca activ si optiunea selecetata este tot aceeasi.
    	//modific distanta totala pentru actiunea selectata
    	if (active == true && opt == options.getSelected()) {
    		if (opt == "Walk"){
    			details.totalWalk = details.totalWalk + d2;
    			Math.round(details.totalWalk*100)/100;
    			document.getElementById("DistanceOnAction").value = "Walk distance today: " + Math.round(details.totalWalk*100)/100;
    		} else if (opt == "Run") {
    			details.totalRun = details.totalRun + d2;
    			Math.round(details.totalRun*100)/100;
    			document.getElementById("DistanceOnAction").value = "Run distance today: " + Math.round(details.totalRun*100)/100;
    		}   else {
    			details.totalDrive = details.totalDrive + d2;
    			Math.round(details.totalDrive*100)/100;
    			document.getElementById("DistanceOnAction").value = "Drive distance today: " + Math.round(details.totalDrive*100)/100;
    		}
      	 	startTime(distance,time,opt);             
  	 	} else {
  	 		//daca butonul nu este activ se fac invizibile informatiile
  	 		if (!active){
  	 			console.log("active false, option true");
  	 			
  	 		} else {
  	 			console.log("active true, option false");
    		
  	 		// butonul este activ dar s-a schimbat optiunea
  	 				
			document.getElementById('Speed').value=("Speed: 0 m/s"); 
			document.getElementById('AverageSpeed').value=("AverageSpeed: 0 m/s"); 
			document.getElementById('Distance').value=("Distance: 0 m");
			
			if (opt == "Walk"){
				this.limit = 1;
    			document.getElementById("DistanceOnAction").value = "Walk distance today: " + Math.round(details.totalWalk*100)/100;
    			startTime(0,0,options.getSelected());
    		} else if (opt == "Run") {
    			this.limit = 1;
    			document.getElementById("DistanceOnAction").value = "Run distance today: " + Math.round(details.totalRun*100)/100;
    			startTime(0,0,options.getSelected());
    		}   else {
    			this.limit = 1;
    			document.getElementById("DistanceOnAction").value = "Drive distance today: " + Math.round(details.totalDrive*100)/100;
    			startTime(0,0,options.getSelected());
    		}     
  	 		}           
		}             
  }, refreshTime * 1000);
}

function setSelected(node){
	options.setSelected(node);	
}

function resetFunction(){
	console.log("s-a apasat butonul reset");
	details.reset();
}


function findMyCurrentLocation(){
	var geoService = navigator.geolocation;
	if (geoService) {
		navigator.geolocation.getCurrentPosition(showCurrentLocation,errorHandler);
	} else {
		$("#searchResults").html("Your Browser does not support GeoLocation.");
	}
}
 
function showCurrentLocation(position){
	return punct(position.coords.latitude,position.coords.longitude) ;
}
 
function errorHandler(error){
	  console.log("Error while retrieving current position. Error code: " + error.code + ",Message: " + error.message);
}


//distance2Points distanta dintre 2 puncte
function distance2Points(p1,p2){
	console.log("am intrat in distance2Points");
		
	var x3 = (p1.x - p2.x) * (p1.x - p2.x);
	var y3 = (p2.y - p2.y) * (p1.y - p2.y);
	
	return Math.pow((x3 + y3), 1/2);
};

