var selected_index = 0;
var tb20 = localStorage.getItem("tb20");

var edit_index = null;
tb20 = JSON.parse(tb20);
if(tb20 == null) 
	tb20 = [];


function Add1() {
	var client = JSON.stringify({
		Name: document.getElementById("inputEmail10").value,
		Time:document.getElementById("number").value
	

		
	});
	
	tb20.push(client);
	localStorage.setItem("tb20", JSON.stringify(tb20));
	List1();
return true;
}

function Delete1(button) {
if (confirm("Do you sure you want to delete this item?") == true) {
        var listId =  button.parentNode.parentNode.parentNode.getAttribute("id");
	var indexId = listId.match(/\d+\.?\d*/g);
	console.log("delete items: ", indexId);

	tb20.splice(indexId, 1);
	localStorage.setItem("tb20", JSON.stringify(tb20));
	//alert("Client deleted.");
	List1();
    } else {
        List1();
    }
} 

function List1() {		



	var rows = "";



for(var i in tb20){
		var cli = JSON.parse(tb20[i]);
	  rows += "<ul class='testBody' id=itemIndex" + i + ">"+
	  "<li class='testRow'>"+
	  			" 	<span>"+cli.Name+"</span>" +
				"	<span>"+cli.Time+"</span>" + 
				
				
				"	<span></span>" +
				"	<span></span>" +
				
			
				"<span>"+"<input type='image' onclick='Delete1(this)'  src='Icons/delete.png'  width='8px' height='15px'"+i+" /></span>" +
				"</li>"+

				"</ul>";
	}
	document.getElementById("tblList2").innerHTML =
	"<li class='testRow'>"+
           " <span ><b>Alarm Description</b></span>"+
           " <span><b>Time</b></span>"+
          
           
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