//Conditions of giving points (localStorage)			
function Points(value){
						
	var x=value;
	var finalValue = null;
	var initialPoints = parseInt(localStorage.getItem('points'), 10);

	if (x<=50){	
		//alert("<50");
		finalValue = 1;
	}
	else if (x>50 && x<=100){
		//alert(">50");
		finalValue = 2;
	}
	else if (x>100 && x<=200){
		//alert(">100");
		finalValue = 3;
	} 	
	else if (x>200 && x<=500){
		//alert(">200");
		finalValue = 4;
	} 	
	else {
		//alert(">500");
		finalValue = 5;
	}
	if(!initialPoints){
		initialPoints = 0;
	}
	var total = initialPoints + finalValue;
	//alert(initialPoints);
	//alert(finalValue);
	localStorage.setItem('points', total);
	
	
	 showValues();
};

//Show the value of points and total sum (localStorage)
function showValues()
{	
	//localStorage.clear();
	//Set total points to UI
	var totalPoints = localStorage.getItem('points');
	document.getElementById('pointss').innerHTML=totalPoints;
	
	//Set Total sum to UI
	var totalSum = parseInt(localStorage.getItem("totalSum"), 10);
	document.getElementById("totalSum").value = totalSum;
	
	document.getElementById("InputSum").value= " ";
	document.getElementById("nameId").value= " ";
	document.getElementById("incomeDate").value = " ";
}

//Calculte the number of points (localStorage)	
function add()
	{
		//Update total sum to localstorage
		var total = parseInt(localStorage.getItem("totalSum"), 10);
		var newSum = parseInt(document.getElementById("InputSum").value, 10);
		if(!total){
			total = 0;
		}
		if(!newSum){
			newSum = 0;
		}
		total = total + newSum;
		console.log("Total sum: ", total, newSum);
		localStorage.setItem("totalSum", total);
		
		//Calculate points for user based on InputSum;

		Points(newSum);
	}

//Create the object, add it to the database	
function insertToDb(){
		
	var sum = document.getElementById("InputSum").value;
	var name = document.getElementById("nameId").value;
	var date = document.getElementById("incomeDate").value;
	
	var item = {
		name: name,
		sum: sum,
		date: date
	};
	database.insertItem(item);
	listare();
	
}

//List the objects from database
function listare(){	
	
	function callback(objects){

		var list = document.getElementById("listItems");
		list.innerHTML ="";
		
		console.log("The items from db are: ", objects);
		
    	for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		console.log("the item is: ", item);
    			
				var row = document.createElement("li");
				row.className = "fields";
				row.setAttribute("dbId", item.key);
				
				var name = document.createElement("div");
				var sum = document.createElement("div");
				var date = document.createElement("div");
				
				
				sum.className = "sum";
				sum.className = "row";
				sum.innerHTML = item.value.sum;
				name.className = "name";
				name.className = "row";
				name.innerHTML = item.value.name;
				date.className = "date";
				date.className = "row";
				date.innerHTML = item.value.date;
				
				row.appendChild(name);
				row.appendChild(sum);
				row.appendChild(date);
				list.appendChild(row);		
    		}
    };
    database.getAllItems(callback);
}

//Filter the objects by date
function filtrare (chooseDate) {
		function callback(objects){

		var list = document.getElementById("listItems");
		list.innerHTML ="";
		console.log("The items from db are: ", objects);
		
		var finalItems = [];
		
		for(var i=0; i<objects.length; i++){
			var current = objects[i];
			var itemDate = current.value.date;
			var currentDate = new Date();
			
			var itemYear = itemDate.getFullYear();
			var itemMonth = itemDate.getMonth();
			var itemDay = itemDate.getDate();
			
			var currentYear = currentDate.getFullYear();
			var currentMonth = currentDate.getMonth();
			var currentDay = currentDate.getDate();
		
			
			if(itemYear == currentYear){
				finalItems.push(current);
				
			}else if(itemMonth == currentMonth){
				finalItems.push(current);
				
			}else if(itemDay == currentDay){
				finalItems.push(current);
				
			}
		}
		
    	for(var i=0; i<finalItems.length; i++){
    		var item = finalItems[i];
    		console.log("The item is: ", item);
    			
				var row = document.createElement("li");
				row.className = "fields";
				row.setAttribute("dbId", item.key);
				
				var name = document.createElement("div");
				var sum = document.createElement("div");
				var date = document.createElement("div");
				
				
				sum.className = "sum";
				sum.className = "row";
				sum.innerHTML = item.value.sum;
				name.className = "name";
				name.className = "row";
				name.innerHTML = item.value.name;
				date.className = "date";
				date.className = "row";
				date.innerHTML = item.value.date;
				
				row.appendChild(name);
				row.appendChild(sum);
				row.appendChild(date);
				list.appendChild(row);		
    		}
    };
    database.getAllItems(callback);
}


