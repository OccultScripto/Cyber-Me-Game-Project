// Load the content of the database at first start.
document.addEventListener("DOMContentLoaded", function(event) {
	  database.currentStore = database.stores.work;
  	initializeDB(dataBase);
		document.getElementById("addButton").addEventListener("click", newHabbit);
		document.getElementById("formName").addEventListener("click", function(){clearContent(this)});
		document.getElementById("formTime").addEventListener("click", function(){clearContent(this)});
		document.getElementById("selectType").addEventListener("click", showSelectType);
		document.getElementById("submitField").addEventListener("click", sendInfo);
		$("li[role=option]").each(function(index){
			$(this).on("click", function(){
				selectedType($(this)[0]);
			});
		});
		
 });

// Declare a global variable who stores in Local Storage the actual score.
var option = ""; //A for add E for eddit;

// Variable that verify if the added habbit was completed in properly time.
 var verificareBoolean = false;

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
	object.bool = verificareBoolean;
	var dateNow = new Date();
	var currentTime = dateNow.getTime();
	console.log("Current Time:", dateNow);

	
	dateFinish = dateNow ;
	dateFinish.setHours(dateFinish.getHours() + parseInt(time, 10));
	console.log("Final Time:", dateFinish);
	object.finishTime = dateFinish;
	//alert("The data was saved.");
	database.insertItem(object);
} 

// Update the bool value form the item. If bool equals true the the item is checked as verified.
function updateTimeBool(item){
	item.bool = true;
	database.updateItem(parseInt(item.id,10), item);
}

function verificareData(objects){
	
	for (var i = 0;i < objects.length; i++) {
		var dateNow = new Date();
		var currentTime = dateNow.getTime();
		console.log("Obiectele:", objects[i]);
		console.log("Obiect Db:", objects[i].value.finishTime, "Obiect data:", dateNow);
		var s1 = objects[i].value.finishTime.toString();
		var s2 = dateNow.toString();
		var dataObiect = s1.substring(0, s1.length - 19);
		var dataCurenta = s2.substring(0, s2.length - 19);
		console.log("dataObiect", dataObiect);
		console.log("dataCurenta", dataCurenta);
		console.log("BOOL before compare:", objects[i].value.bool, objects[i].value.name);
		if ((dataObiect == dataCurenta) && (objects[i].value.bool==false)){
			//alert("AAA");
			showModalFinishHabbit(objects[i].key);
			console.log("Match date!");
			console.log("Object in date verify key:", objects[i].key);
			database.getItemById(objects[i].key,updateTimeBool);
			console.log("BOOL",objects[i].value.bool,objects[i].value.name);
		}
	}
	
}

function verifyHabbitExpirationTime(){
	
	database.getAllItems(verificareData);	
};
window.setInterval(function(){
  /// call your function here
  verifyHabbitExpirationTime();
}, 600000);
//10 min


// Function that make a call to the hideTable function after the Add button was clicked.
// HideTable function will display the input fields and then after the submit button will
// be clicked a new habbit will be added with the data from the input fields.
function newHabbit(){
	option = "A";
	document.getElementById("formName").value = "Name";
	document.getElementById("formTime").value = "Time(h)";
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


function updateFinishTrue(item){
	//item.picture = arr[1].src;
	var newItem = {};
	newItem.value.picture = arr[1].src;
	//alert(item.id);
	//alert("B"+item.picture);
	//console.log("Picture after selected done habbit:",item.picture);
	database.updateItem(parseInt(item.id,10), newItem);
	//alert("A"+item.picture);
	setTimeout(function(){
				dataBase();	
			},500);
	hideModalFinishHabbit();
}
function updatefinishFalse(item){
	pictureChoice = arr[2].src
	item.picture = pictureChoice;
	alert(item.id);
	alert("B"+item.picture);
	database.updateItem(parseInt(item.id,10), item);
	alert("A"+item.picture);
	setTimeout(function(){
				dataBase();
			},500);
	hideModalFinishHabbit();
}

function showModalFinishHabbit(key){
	document.getElementById("topMenuBar").style.display= "none"; 
	document.getElementById("secondMenuContainer").style.display= "none"; 
	document.getElementById("tableWrapper").style.display= "none";
	document.getElementById("habbitFinish").style.display ="inline-block";

	document.getElementById("confirmFinish").addEventListener("click",function() {
		database.getItemById(parseInt(key,10),updateFinishTrue);
	});
	document.getElementById("cancelFinish").addEventListener("click",function(){
		database.getItemById(parseInt(key,10),updatefinishFalse);
	});
}
// Function that hides the modal pop-up for delete confirmation.
function hideModalFinishHabbit() {
	document.getElementById("topMenuBar").style.display= "inline"; 
	document.getElementById("secondMenuContainer").style.display= "inline"; 
	document.getElementById("tableWrapper").style.display= "inline";
	document.getElementById("habbitFinish").style.display ="none";
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
	console.log(element);
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
	  		" 	<li id='tableCheck'>" + "<input role='checked' id='checked' dbkey="+item.key+" data-name="+item.value.name+" type='checkbox'" + item.value.check+"></li>" +
			"	<li id='tableItem'>"+item.value.name+"</li>" + 
			"	<li id='tableType'>"+"<img src="+item.value.type+"></li>"+
			"	<li id='tablePic'>"+"<img src="+item.value.picture+">"+"</li>" + 
			"	<li id='tableEdit'>"+"<input role='edit' id='edit' data-isEdit='true' type='image' dbkey="+item.key+" src='Icons/edit.png'"+item.value.edit+" ></li>" +
			"	<li id='tableRemove'>"+"<input role='delete' id='delete' data-isDelete='true' type='image' dbkey="+ item.key+" src='Icons/delete.png'"+item.value.remove+"></li>" +
			"</ul>";

			document.getElementById("tbList").innerHTML = rows;
			$("input[role=edit]").each(function(index){
				$(this).on("click", function(){
					clickRowIndex($(this)[0]);
				});
			});
			$("input[role=delete]").each(function(index){
				$(this).on("click", function(){
					clickRowIndex($(this)[0]);
				});
			});
			$("input[role=checked]").each(function(index){
				$(this).on("click", function(){
					check($(this)[0]);
				});
			});
		}
	}
	database.getAllItems(callback);	
	//return true;
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
	alert("Congratulations you finished task: " + name);
	score = score + 5;
	localStorage.setItem(score, score);
	
	var index=elem.getAttribute("dbkey");
	var newKey = parseInt(index, 10);
	//stopCheck(elem.key);
	database.getItemById(newKey,updateStatusUI);
	setTimeout(function(){
				dataBase();	
			},100);
	setTimeout(function(){
		location.reload();}
	,100);
	
};


function stopCheck(item){

	database.getItemById(parseInt(item,10),updateTimeBool);
	//console.log("verificare variabila bool :" , item.id);
	alert("s-a oprit");
}

// function that counts the remain time until the habbit should be done.
function takeTime() {
	setTimeout(function(){change();},document.getElementById("formTime").value);
}

// Get the atribute selected from the list of the habbit types.
function selectedType(elem){
	
	var elementSelected = elem.getAttribute("data-name");
	
	// Reset a selected option from the habbit types is another is selected.
	function resetOptions(item){

		var listOfOptions = ["Arts","Bills","Fitness","Games","Health","Movies","Range","Run","Social","Speed","Others"];
		for (var i = 0; i < listOfOptions.length; i++) {
			
			if (elem.getAttribute("data-name") == listOfOptions[i]){
				elem.setAttribute("aria-selected",false);
				
				
			} 
			
		};
	}

	switch(elementSelected){
		case "Arts":
			habbitPictureChoice = toh[10].src;
			
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
			
		break;
		case "Bills":
			habbitPictureChoice = toh[1].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Fitness":
			habbitPictureChoice = toh[2].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Games":
			habbitPictureChoice = toh[9].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Health":
			habbitPictureChoice = toh[3].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Movies":
			habbitPictureChoice = toh[8].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Range":
			habbitPictureChoice = toh[5].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Run":
			habbitPictureChoice = toh[7].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Social":
			habbitPictureChoice = toh[6].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		case "Speed":
			habbitPictureChoice = toh[4].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
		default :
			habbitPictureChoice = toh[0].src;
			elem.setAttribute("aria-selected",true);
			setTimeout(function(){resetOptions(elementSelected);},500);
			setTimeout(function(){
				hideSelectType();	
			},500);
		break;
	}
}