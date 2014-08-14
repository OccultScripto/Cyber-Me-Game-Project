var selected_index = 0;
var tb1 = localStorage.getItem("tb1");

var edit_index = null;
tb1 = JSON.parse(tb1);
if(tb1 == null) 
	tb1 = [];


function Add() {
	var client = JSON.stringify({
		Name: document.getElementById("inputEmail3").value,
		H  : document.getElementById("h1").value,
		Min  : document.getElementById("m1").value,
		Sec  : document.getElementById("s1").value

		
	});
	
	tb1.push(client);
	localStorage.setItem("tb1", JSON.stringify(tb1));
	List();
return true;
}

function Delete(button) {
if (confirm("Do you sure you want to delete this item?") == true) {
        var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	var indexId = listId.match(/\d+\.?\d*/g);
	console.log("delete items: ", indexId);

	tb1.splice(indexId, 1);
	localStorage.setItem("tb1", JSON.stringify(tb1));
	//alert("Client deleted.");
	List();
    } else {
        List();
    }
} 

function Edit() {
if(edit_index){
		tb1[edit_index] = JSON.stringify({
	
			Name: document.getElementById("inputEmail3").value,
		H : document.getElementById("h1").value,
		Min: document.getElementById("m1").value,
		Sec : document.getElementById("s1").value
	
		});
    
	localStorage.setItem("tb1", JSON.stringify(tb1));
	

	return true;
	}else{
	return false;}
} 
function calculate() {
	

	var c=0;
	var c1=0;
	var c2=0;
	var c3=0;
	for(var i in tb1){
		var cli = JSON.parse(tb1[i]);
		 c=c+parseInt(cli.Calories,10);
		 c1=c1+parseInt(cli.Protein,10)
		 c2=c2+parseInt(cli.Carbohydrate,10)
		 c3=c3+parseInt(cli.Fat,10)}
		//alert("Details"+"\nCalories:"+c+"kcal"+"\nProtein:"+c1+"g"+"\nCarbohydrate:"+c2+"g"+"\nFat:"+c3+"g");
		var total=document.getElementById("total");
		total.innerHTML="Details:"+"</br>"+"</br>"+"\nCalories:"+c+"kcal"+"</br>"+"\nProtein:"+c1+"g"+"</br>"+"\nCarbohydrate:"+c2+"g"+"</br>"+"\nFat:"+c3+"g";
}

function List() {		



	var rows = "";



for(var i in tb1){
		var cli = JSON.parse(tb1[i]);
	  rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.H+"</span>" + 
				"	<span>"+cli.Min+"</span>"+
				"	<span>"+cli.Sec+"</span>" + 
				
				"	<span></span>" +
				"	<span></span>" +
				
				"<span id='edit'>"+"<input type='image' onclick='edit(this)' src='Icons/edit.png' width='8px' height='15px' "+i+" /></span>" +
				"<span>"+"<input type='image' onclick='Delete(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
	document.getElementById("tblList").innerHTML =
	"<li class='testRow'>"+
           " <span ><b>Alarm Description</b></span>"+
           " <span><b>H</b></span>"+
           " <span><b>Min</b></span>"+
            "<span ><b>Sec</b></span>"+
           
        "</li>"+
	
		"<tbody>"+
		rows +
		"</tbody>";
		}
		

var a=0;
function clickRowIndex(elem) {
        selected_index  = elem.rowIndex; 
		
		var cli = JSON.parse(tb1[selected_index-1]);
		a=cli.Name;
		a1=cli.M;
		a2=cli.Tu;
		a3=cli.W;
		a4=cli.Th;
		a5=cli.F;
		a6=cli.S;
		a7=cli.Su;
		
		
        alert("Alarm Info: \n\n"+"Name:"+ a+"\nDays:\n"+"Monday:"+a1+"\nTuesday:"+a2+"\nWednesday:"+a3+"\nThursday:"+a4+"\nFriday:"+a5+"\nSaturday:"+a6+"\nSaturday:"+a7 );
    }

function edit(button){
	console.log("function Edit is: ", Edit);
	var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	
	var indexId = listId.match(/\d+\.?\d*/g);
	console.log("ASdasd",indexId);
	edit_index = indexId;
	
    $('#form').css('visibility','visible');
	$('#tblList').css('visibility','hidden');
	$('#tblList1').css('visibility','hidden');
	$('#edit').css('visibility','hidden');
	$('#bAdd3').css('visibility','visible');
	$('#bUpdate3').css('visibility','visible');
	$('#title').css('visibility','visible');
	$('#alarm').css('visibility','visible');
	
}

  
 