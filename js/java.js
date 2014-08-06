$(window).load(function(){
    	function callback(objects){
	/*document.getElementById('form').style.display='none';
	document.getElementById('form').style.visibility='hidden';*/
	var rows="";
	for(var i=0; i<objects.length; i++){
    		var item = objects[i];
    		console.log(item.value.type);
    		rows+="<li id='databaseList1'>"+item.value.type+" "+item.value.price+"</li>";
    			console.log(item.value.rate);
    			
    			this.className=i;
    			console.log(this.className);
				
				if (item.value.rate==2){					
						alert("Uhuu");
   						document.getElementsByClassName(i).style.backgroundColor = "#AA0000";
 						//document.getElementById('DatabaseList').style.backgroundColor = "#AA0000";
					}
				
				document.getElementById("DatabaseList").innerHTML ="<ul>"+rows +"</ul>";
				
    	}
    }		
    		database.getAllItems(callback);
	});


function addtodatabase (){	
	var object={};
	var type=document.getElementById('typefood').value;
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
	
	var date = new Date();
	var day = date.getDate();
	var month = +date.getMonth() +1;

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

/*

$(document).ready(function(){
	

	localStorage.setItem('rows',1);
	var more=document.getElementById('b1');
	more.addEventListener("click",more_fields);
	
});

*/




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


window.onload = (function(){
	document.getElementById('scoreval').value=localStorage.getItem('score');
	//localStorage.setItem('maxfood',0);
	document.getElementById('maxfood').value=localStorage.getItem('maxfood');
	//database.insertItem('apples','50$');
	
	
			
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


