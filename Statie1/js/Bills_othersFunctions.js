			
function Points(value){
						
	x=value;

	if (x<=50){	
		localStorage.setItem('points',1);
		value=localStorage.getItem('points');
		//confirm("<50 "+ value);
		//document.getElementById('score_val').value=value;
	}
	else if (x>50 && x<=100){
		localStorage.setItem('points',2);
		value=localStorage.getItem('points');
		//confirm(">50 "+value);
		//document.getElementById('score_val').value=value;

	}
	else if (x>100 && x<=200){
		localStorage.setItem('points',3);
		value=localStorage.getItem('points');
		//confirm("OK? "+ value);
		//document.getElementById('score_val').value=value;
	} 	
	else if (x>200 && x<=500){
		localStorage.setItem('points',4);
		value=localStorage.getItem('points');
		//confirm("OK? "+ value);
		//document.getElementById('score_val').value=value;
	} 	
	else {
		localStorage.setItem('points',5);
		value=localStorage.getItem('points');
		//confirm("OK? "+ value);
		//document.getElementById('score_val').value=value;
	}

};

function insertToDb(){

	alert("insert to db!!");
	var object={};
	var date=document.getElementById('incomeDate').value;
	var name=document.getElementById('Name').value;
	var price=document.getElementById('InputSum').value;

	object.date=date;
	object.name=name;
	object.price=price;
	
	database.insertItem(object);
};

function TotalScore(){
	//localStorage.clear();
	//localStorage.setItem('score',0);
	sum = +localStorage.getItem('PointsScore') + +localStorage.getItem('points');
	localStorage.setItem('PointsScore',sum);
	v=localStorage.getItem('PointsScore');
	//confirm("scor total "+v+" ?");	
	confirm("You receive "+localStorage.getItem('points')+" points !!!");
	document.getElementById('pointss').textContent=v;
	console.log(document.getElementById('pointss').textContent);
	
	insertToDb();
	};
	
	localStorage.setItem("totalSum", 0);
	
	var save_button = document.getElementById('Save');
	save_button.addEventListener("click", add, false);
	save_button.addEventListener("click", TotalScore, false);
		//save_button.onclick = saveData;
		//save_button.onclick =add;
		
function add()
	{
		
		var sum = parseInt(localStorage.getItem("totalSum"), 10);
		console.log("Sum: ", sum);
		
		sum += parseInt(document.getElementById("InputSum").value, 	10);
		
		localStorage.setItem("totalSum", sum);
		
		document.getElementById("totalSum").value = sum;
		nr = document.getElementById("InputSum").value;
		Points(nr);

		document.getElementById("InputSum").value = "";
	}	
	
	
