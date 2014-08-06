// Declare a global variable who stores in Local Storage the actual score.
var score = 0;
var scoreLS = localStorage.getItem("scoreLS");
localStorage.setItem('scoreLS', score);

//checkbox var

/*
var check = document.createElement('input');
check.setAttribute("type", "checkbox");
var showCheck = document.appendChild(check);
*/
//
var arr = [];

arr[0]= new Image();
arr[0].src = "Icons/image1.png";

arr[1]= new Image();
arr[1].src = "Icons/image2.png";

arr[2]= new Image();
arr[2].src = "Icons/image3.png";
pictureChoice = arr[0].src;

//habbit pictures array
var toh = [];

toh[0] = new Image();
toh[0].src = "Icons/other.png";

toh[1] = new Image();
toh[1].src = "Icons/billslist.png";

toh[2] = new Image();
toh[2].src = "Icons/fitness.png";

toh[3] = new Image();
toh[3].src = "Icons/healthlist.png";

toh[4] = new Image();
toh[4].src = "Icons/speed.png";

toh[5] = new Image();
toh[5].src = "Icons/rangelist.png";

toh[6] = new Image();
toh[6].src = "Icons/social.png";

toh[7] = new Image();
toh[7].src = "Icons/run.png";


toh[8] = new Image();
toh[8].src = "Icons/movies.png";

toh[9] = new Image();
toh[9].src = "Icons/games.png";

toh[10] = new Image();
toh[10].src = "Icons/arts.png";
habbitPictureChoice = toh[0].src;


// Declare the local storage items and deaclare an index who alert the user the row
// that he/she selected.
var selected_index = 0;
var option = "A"; //A for add E for eddit;
var tbHabbits = localStorage.getItem("tbHabbits");
tbHabbits = JSON.parse(tbHabbits);
if(tbHabbits == null) 
	tbHabbits = [];

// Function that add a new habbit to the local storage.
function Add() {
	var habbit = JSON.stringify({
		Name: document.getElementById("formName").value,
		Time  : document.getElementById("formTime").value,
		Repeat : document.getElementById("formRepeat").value,
		HabbitType : habbitPictureChoice,
		ImgPicture: pictureChoice,
		
	});
	
	tbHabbits.push(habbit);
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("The data was saved.");
		
	return true;
} 

// Function that edit the selected row via the variable selected_index.
// Take the arguments of the fields and modify them.
function Edit() {
	tbHabbits[selected_index] = JSON.stringify({
			Name: document.getElementById("formName").value,
			Time  : document.getElementById("formTime").value,
			Repeat : document.getElementById("formRepeat").value,
			HabbitType : habbitPictureChoice,
			ImgPicture:  pictureChoice,
			
			
		});
	
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("The data was edited.");
	return true;
} 


function showModalDelete() {
	document.getElementById("topMenuBar").style.display= "none"; 
	document.getElementById("secondMenuContainer").style.display= "none"; 
	document.getElementById("tableWrapper").style.display= "none";
	document.getElementById("modalDeleteConfirm").style.display ="inline-block";
}
/*
function hideModalDelete(){
	
	document.getElementById("topMenuBar").style.display= "inline"; 
	document.getElementById("secondMenuContainer").style.display= "inline"; 
	document.getElementById("tableWrapper").style.display= "inline";
	document.getElementById("modalDeleteConfirm").style.display ="none";
}*/


// Function that delete the selected row in the table.
function Delete() {
	showModalDelete();
	document.getElementById("cancelDelete").onclick = function() { 
		//do nothing
	};	
	document.getElementById("confirmDelete").onclick = function(){
	tbHabbits.splice(selected_index, 1);
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("Client deleted.");
	};
	//hideModalDelete();	
	List();
} 

// Function that list the items that are sotred in LocalStorage.
function List() {		
	document.getElementById("changeWrapper").style.display ="none";
	document.getElementById("changeWrapper").style.visibility ="hidden";
	document.getElementById("addButton").style.display ="inline-block";
	document.getElementById("addButton").style.visibility ="visible";
	var rows = "";
	
	for(var rowsCounter in tbHabbits){
		var rowsIndex = JSON.parse(tbHabbits[rowsCounter]);
	  	rows += "<ul id='tableRow' onclick='clickRowIndex(this);'>"+
	  			" 	<li id='tableCheck'>"+"<input id='checked' type='checkbox' onclick='check()'"+rowsIndex.Check+"></li>" +
				"	<li id='tableItem'>"+rowsIndex.Name+"</li>" + 
				/*"<div id='fRight'>"+*/
				"	<li id='tableType'>"+"<img src="+rowsIndex.HabbitType+"></li>"+
				"	<li id='tablePic'>"+"<img src="+rowsIndex.ImgPicture+">"+"</li>" + 
				"	<li id='tableEdit'>"+"<input type='image' onclick='update()'  src='Icons/edit.png'"+rowsIndex+" ></li>" +
				"	<li id='tableRemove'>"+"<input type='image' onclick='Delete()'  src='Icons/delete.png'"+rowsIndex+" ></li>" +
				/*+"</div>"+*/
				"</ul>";
}
	
	document.getElementById("tbList").innerHTML =
		"<ul>"+
		rows +
		"</ul>";
			
		document.getElementById("scoreDisplay").innerHTML = localStorage.getItem(scoreLS);
		
		
		
		
} 

// function that counts the remain time until the habbit should be done.
function takeTime() {
	setTimeout(function(){change();},document.getElementById("formTime").value);
}

// Function that hide the table and make visible the input filds.
function hideTable() {
	document.getElementById("tableWrapper").style.visibility ='hidden';
	document.getElementById("tableWrapper").style.display ='none';
	document.getElementById("changeWrapper").style.display ="block";
	document.getElementById("changeWrapper").style.visibility ="visible";
	document.getElementById("addButton").style.visibility= "hidden";
	document.getElementById("addButton").style.display= "none";
}

// Function that hide the input fileds and show the table.
function hideInputs(){
	document.getElementById("tableWrapper").style.visibility ='visible';
	document.getElementById("tableWrapper").style.display ='block';
	document.getElementById("addButton").style.visibility= "visible";
	document.getElementById("addButton").style.display= "inline-block";
}

// Function that tells which button is selected.
// hide the table and show the input fields.
function sendInfo(){
	if (option == "A"){
		Add();
	}
	
	if (option == "E"){
		Edit();
	}
	
	hideInputs();
	takeTime();
	List();
	ChangeHabbitPic();
	
}

// Function that alert which row is selected by the click.
function clickRowIndex(elem) {
        selected_index  = elem.rowIndex; 
       // alert("Row Index: "+ selected_index );
    }

// Function that make a call to the Edit function after the Edit button was clicked.
function update(){
	hideTable();
		option = "E";
		var selectedRow = JSON.parse(tbHabbits[selected_index]);
		document.getElementById("formName").value = selectedRow.Name;
		document.getElementById("formTime").value = selectedRow.Time;
		document.getElementById("formRepeat").value = selectedRow.Repeat;
}

// Function that make a call to the hideTable function after the Add button was clicked.
// HideTable function will display the input fields and then after the submit button will
// be clicked a new habbit will be added with the data from the input fields.

function newHabbit(){
	option = "A";
	hideTable();
	document.getElementById("formName").value = "Name";
	document.getElementById("formTime").value = "Time";
	document.getElementById("formRepeat").value = "Number of Repeats";
}

// Function that will make a change at the pictures that describe the status of the habbit.
function change() {

	
	 if (confirm("Did you finished habbit"+""+"?") === true) {
		score = score + 5;
		localStorage.setItem(scoreLS, score);
		List();
		pictureChoice = arr[1].src;
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
	else {
		pictureChoice = arr[2].src;
		score = score - 2;
		localStorage.setItem(scoreLS, score);
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
}

//function to check the habbit if it's finished befor the time it's over

function check(){
	
	if (document.getElementById("checked").checked===true){
		alert("checked");
		score = score + 5;
		localStorage.setItem(scoreLS, score);
		List();
		pictureChoice = arr[1].src;
		Edit();
		pictureChoice = arr[0].src;
		List();
	}
	
}

// Function that clear the content of the input fields when the are clicked.
function clearContent(element) {
	if (element.value === "") {
		if (element.id === "formName") {
			element.value= "Name";
		}
		if (element.id === "formTime") {
			element.value= "Time";
		}
		if (element.id === "formRepeat") {
			element.value= "Number Of Repeats";
		}
	}
	else {
		element.value="";
	}
}


//habbit type picture



function ChangeHabbitPic(){
	
	
	
	if(document.getElementById("habbitType").value==="run")
	{
		List();
		habbitPictureChoice = toh[7].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="bills")
	{
		List();
		habbitPictureChoice = toh[1].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="fitness")
	{
		List();
		habbitPictureChoice = toh[2].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="health")
	{
		List();
		habbitPictureChoice = toh[3].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="speed")
	{
		List();
		habbitPictureChoice = toh[4].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="range")
	{
		List();
		habbitPictureChoice = toh[5].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="social")
	{
		List();
		habbitPictureChoice = toh[6].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="movies")
	{
		List();
		habbitPictureChoice = toh[8].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="games")
	{
		List();
		habbitPictureChoice = toh[9].src;
		Edit();
	}
	else if(document.getElementById("habbitType").value==="arts")
	{
		List();
		habbitPictureChoice = toh[10].src;
		Edit();
	}
	else
	{
		habbitPictureChoice = toh[0].src;
	}
	
	
}

function showSelectType() {
	document.getElementById("habbitTypeModal").style.display ="inline-block";
	document.getElementById("topMenuBar").style.display= "none"; 
	document.getElementById("secondMenuContainer").style.display= "none"; 
	document.getElementById("changeWrapper").style.display= "none";
	document.body.style.background = "#1f262c";
}

/*TEst*/

/*

function thisindex(elm)
{
    var nodes = elm.parentNode.childNodes, node;
    var i = count = 0;
    while( (node=nodes.item(i++)) && node!=elm )
        if( node.nodeType==1 ) count++;
    alert(count);
  //  selected_index= count;
    
     var x = document.getElementById("habbitList").selectedIndex;
var y = document.getElementById("habbitList").options;
alert("Index: " + y[x].index + " is " + y[x].text);
    
}
*/

/*

// Function that alert which row is selected by the click.
function clickRowIndex(elem) {
        selected_index  = elem.rowIndex; 
        alert("Row Index: "+ selected_index );
        
        $('listEdit').live('click', function() {
   		 alert($(this).parent('li').index());
   		 
   		 
   		 $('listEdit').live('click', function() {
    var position = 0;
    var currentNode = this;
    var firstNode = currentNode.parentNode.firstChild;
    while(firstNode != currentNode) {
        position++;
        currentNode = currentNode.previousSibling;
    }
    alert(position);
});

});
    }

*/
