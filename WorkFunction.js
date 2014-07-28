// Declare a global variable who stores in Local Storage the actual score.
var score = 0;
var scoreLS = localStorage.getItem("scoreLS");
localStorage.setItem('scoreLS', score);


var arr = [];

arr[0]= new Image();
arr[0].src = "Icons/image1.png";

arr[1]= new Image();
arr[1].src = "Icons/image2.png";

arr[2]= new Image();
arr[2].src = "Icons/image3.png";
pictureChoice = arr[0].src;

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
			ImgPicture:  pictureChoice
		});
	
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	alert("The data was edited.");
	return true;
} 

// Function that delete the selected row in the table.
function Delete() {
	tbHabbits.splice(selected_index, 1);
	localStorage.setItem("tbHabbits", JSON.stringify(tbHabbits));
	//alert("Client deleted.");
	List();
} 

// Function that list the items that are sotred in LocalStorage.
function List() {		
	document.getElementById("changeWrapper").style.display ="none";
	document.getElementById("changeWrapper").style.visibility ="hidden";
	var rows = "";
	
	for(var rowsCounter in tbHabbits){
		var rowsIndex = JSON.parse(tbHabbits[rowsCounter]);
	  	rows += "<tr onclick='clickRowIndex(this);'>"+
				"	<td id='tableItem'>"+rowsIndex.Name+"</td>" + 
				"	<td id='tablePic'>"+"<img src="+rowsIndex.ImgPicture+">"+"</td>" + 
				"</tr>";
}
	
	document.getElementById("tbList").innerHTML =
		"<tbody>"+
		rows +
		"</tbody>";
			
		document.getElementById("scoreDisplay").innerHTML = localStorage.getItem(scoreLS);
} 

// function that counts the remain time until the habbit should be done.
function takeTime() {
	setTimeout(function(){change();},document.getElementById("formTime").value*3600000);
}

// Function that hide the table and make visible the input filds.
function hideTable() {
	document.getElementById("tableWrapper").style.visibility ='hidden';
	document.getElementById("tableWrapper").style.display ='none';
	document.getElementById("changeWrapper").style.display ="block";
	document.getElementById("changeWrapper").style.visibility ="visible";
}

// Function that hide the input fileds and show the table.
function hideInputs(){
	document.getElementById("tableWrapper").style.visibility ='visible';
	document.getElementById("tableWrapper").style.display ='block';
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

// Function that clear the content of the input fields when the are clicked.
function clearContent(element) {
element.value="";
}
