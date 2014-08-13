$(document).ready(function(){
	database.currentStore = database.stores.food;
	database.initializeDB();
	if(document.getElementById('submit')){
		document.getElementById('submit').addEventListener('click', getItemsFromDB);
	}
	$('li').click(function(){
		//$(this).toggleClass();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		
	});
	
	if(document.getElementById('maxfood')){		
		document.getElementById('maxfood').value=localStorage.getItem('maxfood');
		//database.insertItem('apples','50$');
	}
	document.getElementById('scoreval').value=localStorage.getItem('score');
	//localStorage.setItem('maxfood',0);
	
});

function updateFromLocalstorage(){
	
}

function callback(objects){
	
	console.log("Food objects are: ", objects);
	var rows="";
	var ul = document.getElementById('DatabaseList');
	
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	};
	
	for(var i=0; i<objects.length; i++){
		var item = objects[i];    		

	
	month=document.getElementById("luna");	
	m=month.options[month.selectedIndex].value;
	day=document.getElementById('ziua');
	d=day.options[day.selectedIndex].value;

	if (m==item.value.month) {
		if (d==item.value.day){


		console.log(item.value.type);
		var row = document.createElement('li');
		row.setAttribute("id","databaseList1");
		row.innerHTML = item.value.type +" "+ item.value.price;
		row.setAttribute("rate", i);


		if (item.value.rate==1){
			row.style.backgroundColor='grey';
		} else if(item.value.rate==2){
			row.style.backgroundColor='yellow';					
		} else if (item.value.rate==3){
			row.style.backgroundColor='lightblue';
		} else if (item.value.rate==4){
			row.style.backgroundColor='green';
		} else if(item.value.rate==5){					
				row.style.backgroundColor = "#AA0000";
		}				

		} else (alert("You don't have any food stored in the selected date!"));
	}
	else (alert("You don't have any food stored in the selected date!"));
	
	ul.appendChild(row);
	
    }
};

function getItemsFromDB(){
	alert("asfafa");
	database.getAllItems(callback);
}

function addtodatabase (){	
	var object={};
	var date = new Date();
	var type=document.getElementById('typefood').value;
	type=type.toUpperCase(type[0]);

	var price=document.getElementById('food').value;
	if (document.getElementById('1').checked) {
  		var rate= document.getElementById('1').value;
	} else if (document.getElementById('2').checked) {
  		var rate= document.getElementById('2').value;
	} else if (document.getElementById('3').checked) {
  		var rate= document.getElementById('3').value;
	} else if (document.getElementById('4').checked) {
  		var rate= document.getElementById('4').value;
	} else if (document.getElementById('5').checked) {
  		var rate= document.getElementById('5').value;
	}
	
	 
	var month = +date.getMonth() +1;
	var day = +date.getDate();

	object.type=type;
	object.price=price;
	object.rate=rate;
	object.day=day;
	object.month=month;
	database.insertItem(object);

}

function more_fields(){
	var nr_rows=localStorage.getItem('rows');
	nr_rows=+nr_rows+ +1;
	localStorage.setItem('rows',nr_rows);
	alert(localStorage.getItem('rows'));
	var node=document.getElementById('field');
	var node1=document.getElementById('allFields');
	var p1=node1.cloneNode(true);
	node.appendChild(p1);
}

function remove_fields(){
	if (localStorage.getItem('rows')>1){		
		document.getElementById('field').deleteRow(localStorage.getItem('rows')-1);
		var rows=localStorage.getItem('rows');
		rows=rows-1;
		localStorage.setItem('rows',rows);
	}
	else
	{
		alert("You can't leave your list empty.");
	}

}

function varf(){	
	
	return document.getElementById('food').value;
};

function setValue(nr){

var x=varf();
var half=(+x) *  (+(nr+0)/100);
x=+x + +half;
if (x<=50){	
	//localStorage.setItem('maxfood',0);
	localStorage.setItem('totalfood',1);
	value=localStorage.getItem('totalfood');
	var max=+localStorage.getItem('maxfood') + +value;
	localStorage.setItem('maxfood',max);
	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
}
else if (x>50 && x<=100){
	localStorage.setItem('totalfood',2);
	value=localStorage.getItem('totalfood');
	var max=+localStorage.getItem('maxfood') + +value;
	localStorage.setItem('maxfood',max);

	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
}
else if (x>100 && x<=200){
	localStorage.setItem('totalfood',3);
	value=localStorage.getItem('totalfood');
	var max=+localStorage.getItem('maxfood') + +value;
		localStorage.setItem('maxfood',max);

	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
} else if (x>200 && x<=500){
	localStorage.setItem('totalfood',4);
	value=localStorage.getItem('totalfood');
	var max=+localStorage.getItem('maxfood') + +value;
		localStorage.setItem('maxfood',max);

	//confirm("OK? "+ value);
	document.getElementById('total').value=value;
} else {
	localStorage.setItem('totalfood',5);
	value=localStorage.getItem('totalfood');
	var max=+localStorage.getItem('maxfood') + +value;
		localStorage.setItem('maxfood',max);

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
	confirm('Ok: '+v);	
	
};


