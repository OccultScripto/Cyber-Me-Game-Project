// Load the content of the database at first start.
document.addEventListener("DOMContentLoaded", function(event) {    
  	initializeDB(dataBase);
	general.getUsername();
 });

// Declare a global variable who stores in Local Storage the actual score.
var option = ""; //A for add E for eddit;

// Global variable in work section to save the score earned in local storage.
var score = 0;
var scoreLS = localStorage.getItem("scoreLS");
localStorage.setItem('scoreLS', score);

// Image vector to store the image for habbit status. (Done, Progresss, Fail).
var arr = [];
arr[0]= new Image();
arr[0].src = "Icons/image1.png";
arr[1]= new Image();
arr[1].src = "Icons/image2.png";
arr[2]= new Image();
arr[2].src = "Icons/image3.png";

// Initialization of the progress status for every new habbit.
var pictureChoice = arr[0].src;

//Habbit pictures array.
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

// Initialization of the type of habbit images for every new habbit with "others" type if no selected one.
habbitPictureChoice = toh[0].src;

// Function that add a new habbit to the database.
function Add() {
	//alert("The data was saved.");
	var object = {};
	var time = document.getElementById("formTime").value;
	var name = document.getElementById("formName").value;
	var habbitType = habbitPictureChoice;
	var imgPicture = pictureChoice;

	object.time = time;
	object.name = name;
	object.type = habbitType;
	object.picture = imgPicture;

	var dateNow = new Date();
	var currentTime = dateNow.getTime();
	console.log("Current Time:", currentTime);

	var dateFinish = dateNow;
	dateFinish.setHours(dateFinish.getHours() + parseInt(time, 10));
	var dataFinal = Date.parse(dateFinish);
	console.log("Final Time:", dataFinal);
	//object.currentTime =currentTime;
	object.finishTime = dataFinal;
	//alert("The data was saved.");
	database.insertItem(object);
} 

function verificareData(objects){
	for (var i = 0;i < objects.length; i++) {
		if (objects[i].finishTime){
			
		}
	}
	
}

function verifyHabbitExpirationTime(){
	var dateNow = new Date();
	var currentTime = dateNow.getTime();
	database.getAllItems(verificareData);	
};
window.setInterval(function(){
  /// call your function here
  verifyHabbitExpirationTime();
}, 5000);


// Function that make a call to the hideTable function after the Add button was clicked.
// HideTable function will display the input fields and then after the submit button will
// be clicked a new habbit will be added with the data from the input fields.
function newHabbit() {
	option = "A";
	document.getElementById("formName").value = "Name";
	document.getElementById("formTime").value = "Time";
	hideTable();
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
function hideInputs() {
	document.getElementById("tableWrapper").style.visibility ='visible';
	document.getElementById("tableWrapper").style.display ='block';
	document.getElementById("addButton").style.visibility= "visible";
	document.getElementById("addButton").style.display= "inline-block";
	document.getElementById("changeWrapper").style.display ="none";
	document.getElementById("changeWrapper").style.visibility ="hidden";
}

// Function that shows the modal pop-up for habbit selection.
function showSelectType() {
	document.getElementById("habbitTypeModal").style.display ="inline-block";
	document.getElementById("topMenuBar").style.display= "none"; 
	document.getElementById("secondMenuContainer").style.display= "none"; 
	document.getElementById("changeWrapper").style.display= "none";
}

// Function that shows the modal pop-up for delete confirmation.
function showModalDelete() {
	document.getElementById("topMenuBar").style.display= "none"; 
	document.getElementById("secondMenuContainer").style.display= "none"; 
	document.getElementById("tableWrapper").style.display= "none";
	document.getElementById("modalDeleteConfirm").style.display ="inline-block";
}

// Function that hides the modal pop-up for delete confirmation.
function hideModalDelete() {
	document.getElementById("topMenuBar").style.display= "inline"; 
	document.getElementById("secondMenuContainer").style.display= "inline"; 
	document.getElementById("tableWrapper").style.display= "inline";
	document.getElementById("modalDeleteConfirm").style.display ="none";
}

// Function that hide select type modal pop-up.
function hideSelectType() {
	document.getElementById("habbitTypeModal").style.display ="none";
	document.getElementById("topMenuBar").style.display= "block"; 
	document.getElementById("secondMenuContainer").style.display= "block"; 
	document.getElementById("changeWrapper").style.display= "block";
}


// Function that tells which button is selected.
// hide the table and show the input fields.
function sendInfo() {
	if (option == "A"){
		Add();
	}
	if (option == "E"){
		update();
	}

	hideInputs();

	// Reload the page to update the UI with new modifications.
	dataBase();
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
	}
	else {
		element.value="";
	}
}


// Function that show the objects data stored in database.
function dataBase() {

	function callback(objects) {		

		var rows = "";
		//console.log(objects);
		for(var i = 0;i < objects.length;i++) {
    		var item = objects[i];
			console.log("Item nr. " + i + " is: ", item);
			rows += "<ul id='tableRow'>" +
	  		" 	<li id='tableCheck'>" + "<input id='checked' dbkey="+item.key+" data-name="+item.value.name+" type='checkbox' onclick='check(this)'" + item.value.check+"></li>" +
			"	<li id='tableItem'>"+item.value.name+"</li>" + 
			"	<li id='tableType'>"+"<img src="+item.value.type+"></li>"+
			"	<li id='tablePic'>"+"<img src="+item.value.picture+">"+"</li>" + 
			"	<li id='tableEdit'>"+"<input id='edit' data-isEdit='true' type='image' dbkey="+item.key+" onclick='clickRowIndex(this)'src='Icons/edit.png'"+item.value.edit+" ></li>" +
			"	<li id='tableRemove'>"+"<input id='delete' data-isDelete='true' type='image' dbkey="+ item.key+" onclick='clickRowIndex(this)' src='Icons/delete.png'"+item.value.remove+"></li>" +
			"</ul>";

			document.getElementById("tbList").innerHTML = rows;
		}
	}
	database.getAllItems(callback);	
	return true;
};

//  Function that shows the fileds for editing the data selected.
function showEditScreen(indexObj){

	function updateFields(item) {		
		console.log("Got item !!! " , item);
		var rows = "";
		console.log(item);
		document.getElementById("formName").value = item.name;
		document.getElementById("formTime").value = item.time;
	}
	
	var newKey = parseInt(indexObj, 10);
	console.log("key",newKey);
	database.getItemById(newKey,updateFields);
	globalIndex = indexObj;
	hideTable();
}

// Function that make a call to the Edit function after the Edit button was clicked.
function update(){
		
	//var newKey = parseInt(document.getElementById("edit").getAttribute("dbkey"), 10);
	var newKey = parseInt(globalIndex, 10);
	console.log("Key",newKey);

	var object = {};
	var newName = document.getElementById("formName").value;
	var newTime = document.getElementById("formTime").value;
	//var newRepeat = document.getElementById("formRepeat").value;
	//object.repeat = newRepeat;
	object.name = newName;
	object.time = newTime;

	console.log("Update the item: ",newKey);
	database.updateItem(newKey, object);

}

// Function that delete an item for the database.
function Delete(indexObj){
	showModalDelete();
	//console.log(indexObj);
	//console.log("confirm instance: ", document.getElementById("confirmDelete")); 
	document.getElementById("confirmDelete").addEventListener("click",function() {
		console.log("Delete item with id: ", indexObj);
		database.deleteItem(parseInt(indexObj, 10), dataBase);
	});
	document.getElementById("cancelDelete").addEventListener("click",function(){
		//do notting
	});
};

// Function that alert which row is selected by the click.
function clickRowIndex(elem) {
    var indexObj=elem.getAttribute("dbkey");
    if (elem.id === "delete") {
    	option = "A";
    	Delete(indexObj);
    }
    if (elem.id ==="edit") {
    	option = "E";
    	showEditScreen(indexObj);
    }
};

// Update the data after select the edit button for an entry.
function updateStatusUI(item){
	pictureChoice = arr[1].src;
	console.log(item.picture + "Veche poza");
	item.picture = pictureChoice;
	console.log(item.picture + "Noua poza");
	database.updateItem(parseInt(item.id,10), item);

}

// Function that give the posibility to finish earlier a created habbit.
function check(elem){
	elem.checked = "true";
	var name = elem.getAttribute("data-name");
	alert("Congratulations you finished habbit: " + name);
	score = score + 5;
	localStorage.setItem(score, score);
	
	var index=elem.getAttribute("dbkey");
	var newKey = parseInt(index, 10);

	database.getItemById(newKey,updateStatusUI);
	setTimeout(function(){
				dataBase();	
			},500);
};

// function that counts the remain time until the habbit should be done.
function takeTime() {
	setTimeout(function(){change();},document.getElementById("formTime").value);
}

// Get the atribute selected from the list of the habbit types.
function selectedType(elem){
	console.log("selectedtype:",elem);
	var elementSelected = elem.getAttribute("data-name");
	
	// Reset a selected option from the habbit types is another is selected.
	function resetOptions(){
		var listOfOptions = ["Arts","Bills","Fitness","Games","Health","Movies","Range","Run","Social","Speed","Others"];
		for (var i = 0; i < listOfOptions.length; i++) {
			console.log("Elem",listOfOptions[i]);
			//listOfOptions[i].setAttribute("aria-selected",false);
		};
	}

	switch(elementSelected){
		case "Arts":
			habbitPictureChoice = toh[10].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
			
		break;
		case "Bills":
			habbitPictureChoice = toh[1].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Fitness":
			habbitPictureChoice = toh[2].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Games":
			habbitPictureChoice = toh[9].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Health":
			habbitPictureChoice = toh[3].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Movies":
			habbitPictureChoice = toh[8].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Range":
			habbitPictureChoice = toh[5].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Run":
			habbitPictureChoice = toh[7].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Social":
			habbitPictureChoice = toh[6].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Speed":
			habbitPictureChoice = toh[4].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		default :
			habbitPictureChoice = toh[0].src;
			resetOptions();
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
	}
}