var selected_index = 0;
var edit_index = null;
var tb = localStorage.getItem("tb");
if(tb == null) {
	tb = [];
}else{
	tb = JSON.parse(tb);
}

function Add() {
	var client = JSON.stringify({
		Name: document.getElementById("name").value,
		Calories  : document.getElementById("name1").value,
		Protein : document.getElementById("name2").value,
		Carbohydrate : document.getElementById("name3").value,
		Fat : document.getElementById("name4").value,
		time:new Date(),
		
		
	});
	
	tb.push(client);
	localStorage.setItem("tb", JSON.stringify(tb));
	
	//alert("The data was saved.");
return true;
}

function Delete(button) {
if (confirm("Do you sure you want to delete this item?") == true) {
    var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	var indexId = listId.match(/\d+\.?\d*/g);
	console.log("delete items: ", indexId);

	tb.splice(indexId, 1);
	localStorage.setItem("tb", JSON.stringify(tb));
	//alert("Client deleted.");
	List();
    } else {
        List();
    }
	
} 

function Edit() {
	if(edit_index){
		tb[edit_index] = JSON.stringify({
			Name: document.getElementById("name").value,
		Calories  : document.getElementById("name1").value,
		Protein : document.getElementById("name2").value,
		Carbohydrate : document.getElementById("name3").value,
		Fat : document.getElementById("name4").value,
		time:new Date()
		});
		//tb.push(a);
		localStorage.setItem("tb", JSON.stringify(tb));
		//alert("The data was edited.");

		return true;
	}else{
		return false;
	}
} 
function addOld(button) {
	var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	var indexId = listId.match(/\d+\.?\d*/g);
	console.log("delete items: ", indexId);
	
		var cli = JSON.parse(tb[indexId]);
		var a=cli.Name;
		var b=cli.Calories;
		var c=cli.Carbohydrate;
		var d =cli.Protein;
		var e=cli.Fat;
		//alert(a);
	tb[indexId]=JSON.stringify({
	Name:a,
	Calories:b,
	Carbohydrate:c,
	Protein:d,
	Fat:e,
	time:new Date()
	
	});
	localStorage.setItem("tb",JSON.stringify(tb));
	return true;	
		
		
} 
function calculate() {
	

	var c=0;
	var c1=0;
	var c2=0;
	var c3=0;
	for(var i in tb){
		var cli = JSON.parse(tb[i]);
		
		 var d=new Date(cli.time);
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDay();
		if(a3===new Date().getDay())
		{
		c=c+parseInt(cli.Calories,10);
		 c1=c1+parseInt(cli.Protein,10)
		 c2=c2+parseInt(cli.Carbohydrate,10)
		 c3=c3+parseInt(cli.Fat,10)}}
		//alert("Details"+"\nCalories:"+c+"kcal"+"\nProtein:"+c1+"g"+"\nCarbohydrate:"+c2+"g"+"\nFat:"+c3+"g");
		var total=document.getElementById("total");
		total.innerHTML="Details:"+"</br>"+"</br>"+"\nCalories:"+c+"kcal"+"</br>"+"\nProtein:"+c1+"g"+"</br>"+"\nCarbohydrate:"+c2+"g"+"</br>"+"\nFat:"+c3+"g";
}

function List() {		

	var rows = "";

	for(var i in tb){
		var cli = JSON.parse(tb[i]);
	  rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Calories+"</span>" + 
				"	<span>"+cli.Carbohydrate+"</span>"+
				"	<span>"+cli.Protein+"</span>" + 
				"	<span>"+cli.Fat+"</span>" +
			
				"<span id='edit1'>"+"<input type='image' onclick='edit(this)' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"<span>"+"<input type='image' onclick='addOld(this)'  src='Icons/plus1.gif'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
	document.getElementById("tblList").innerHTML =
	"<li class='testRow'>"+
           " <span ><b>Name</b></span>"+
           " <span><b>Calories</b></span>"+
           " <span><b>Carbohydrate</b></span>"+
            "<span ><b>Protein</b></span>"+
           " <span><b>Fat</b></span>"+
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";
} 
 
var a=0;
var a1=0;
var a2=0;
var a3=0;
function clickRowIndex(elem) {
        
      selected_index  = elem.rowIndex; 
		
		var cli = JSON.parse(tb[selected_index-1]);
		a=cli.time;
		var d=new Date(cli.time);
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDay();
		if(a3===new Date().getDay())
		{
		alert("merge");
		}
		
        alert("DATE:"+d+ "\n\n"+a1+"/"+a2+"/"+a3 );
    
    }

function ListbyDate(){

	var rows = "";
	var z=document.getElementById("calendar").value;
	//alert(""+z);
	for(var i in tb){
		var cli = JSON.parse(tb[i]);
		var d=new Date(cli.time);
		var d1=new Date(z);
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDate();
		if(a3===d1.getDate()){
	  	rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Calories+"</span>" + 
				"	<span>"+cli.Carbohydrate+"</span>"+
				"	<span>"+cli.Protein+"</span>" + 
				"	<span>"+cli.Fat+"</span>" +
				
			
				"<span >"+"<input type='image' onclick='edit(this)' id='edit1' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"<span>"+"<input type='image' onclick='addOld(this)'  src='Icons/plus1.gif'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
}

	document.getElementById("tblList1").innerHTML =
	    "<li class='testRow'>"+
           " <span ><b>Name</b></span>"+
           " <span><b>Calories</b></span>"+
           " <span><b>Carbohydrate</b></span>"+
            "<span ><b>Protein</b></span>"+
           " <span><b>Fat</b></span>"+
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";

}
function ListbyYear(){

	var rows = "";
	var z=document.getElementById("year").value;
	//alert(""+z);
	for(var i in tb){
		var cli = JSON.parse(tb[i]);
		var d=new Date(cli.time);
		
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDay();
		if(a1===parseInt(z)){
	  	rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Calories+"</span>" + 
				"	<span>"+cli.Carbohydrate+"</span>"+
				"	<span>"+cli.Protein+"</span>" + 
				"	<span>"+cli.Fat+"</span>" +
				
			
				"<span >"+"<input type='image' onclick='edit(this)' id='edit1' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"<span>"+"<input type='image' onclick='addOld(this)'  src='Icons/plus1.gif'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
}

	document.getElementById("tblList2").innerHTML =
	    "<li class='testRow'>"+
           " <span ><b>Name</b></span>"+
           " <span><b>Calories</b></span>"+
           " <span><b>Carbohydrate</b></span>"+
            "<span ><b>Protein</b></span>"+
           " <span><b>Fat</b></span>"+
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";

}
function ListbyDay(){

	var rows = "";
	var z=document.getElementById("day1").value;
	//alert(""+z);
	for(var i in tb){
		var cli = JSON.parse(tb[i]);
		var d=new Date(cli.time);
		
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDay();
		if(a3===parseInt(z)){
	  	rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Calories+"</span>" + 
				"	<span>"+cli.Carbohydrate+"</span>"+
				"	<span>"+cli.Protein+"</span>" + 
				"	<span>"+cli.Fat+"</span>" +
				
			
				"<span >"+"<input type='image' onclick='edit(this)' id='edit1' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"<span>"+"<input type='image' onclick='addOld(this)'  src='Icons/plus1.gif'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
}

	document.getElementById("tblList3").innerHTML =
	    "<li class='testRow'>"+
           " <span ><b>Name</b></span>"+
           " <span><b>Calories</b></span>"+
           " <span><b>Carbohydrate</b></span>"+
            "<span ><b>Protein</b></span>"+
           " <span><b>Fat</b></span>"+
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";

}
function ListbyMonth(){

	var rows = "";
	var z=document.getElementById("month").value;
	//alert(""+z);
	for(var i in tb){
		var cli = JSON.parse(tb[i]);
		var d=new Date(cli.time);
		
	    a1=d.getFullYear();
		a2=d.getMonth();
		a3=d.getDay();
		if(a2===parseInt(z)){
	  	rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Calories+"</span>" + 
				"	<span>"+cli.Carbohydrate+"</span>"+
				"	<span>"+cli.Protein+"</span>" + 
				"	<span>"+cli.Fat+"</span>" +
				
			
				"<span >"+"<input type='image' onclick='edit(this)' id='edit1' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"<span>"+"<input type='image' onclick='addOld(this)'  src='Icons/plus1.gif'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
}

	document.getElementById("tblList4").innerHTML =
	    "<li class='testRow'>"+
           " <span ><b>Name</b></span>"+
           " <span><b>Calories</b></span>"+
           " <span><b>Carbohydrate</b></span>"+
            "<span ><b>Protein</b></span>"+
           " <span><b>Fat</b></span>"+
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";

}
   function edit(button){
	console.log("function Edit is: ", Edit);
	var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	var indexId = listId.match(/\d+\.?\d*/g);
	
	edit_index = indexId;
	
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#tblList2').css('visibility','hidden');
	$('#tblList3').css('visibility','hidden');
	$('#tblList4').css('visibility','hidden');
	$('#edit').css('visibility','hidden');
	$('#bAdd3').css('visibility','visible');
	$('#bUpdate3').css('visibility','visible');
	$('#title').css('visibility','visible');
}
