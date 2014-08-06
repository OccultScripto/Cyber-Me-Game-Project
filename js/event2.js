$(document).ready(function(){
	$('#datepicker').datepicker({ dateFormat: "yy-mm-dd"}).datepicker("setDate", "0");
    $('#bEvent').click(function(){
            //$('#menu').css('visibility','visible');
            $("#action-menu").show();
        });
    $("#dAdd").on("click", function(){
    	$("#action-menu").hide();
    }); 
   $("#dCancel").on("click", function(){
    	$("#action-menu").hide();
    }); 
    

	$(".msg").live('click', function(){
		jQuery('#Status').html('');
		$('#Status').append('<p>' + $(this).text()+'</div>');
   		$("#Status").show("slow").delay(4000).fadeOut(1000);
   		// utils.status.show($(this).text(),500);
		});
  
     
 
var len;
var database = {};

(function (exports) {
	
    // IndexedDB
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
        dbVersion = 1.0;
			
		//This line deletes the database - used for testing purposes
		//indexedDB.deleteDatabase("database");

    // Create/open database
    var request = indexedDB.open("database", dbVersion),
		
        db,
				
		//Method for creating the <image> objectStore in indexedDB
        createObjectStore = function (dataBase) {
            // Create an objectStore
            dataBase.createObjectStore("data", { autoIncrement : true });
        },
				
		//Method for inserting an information (data, location, message, time1, time2)
		// in IndexedDB; It first removes a picture if there are maximum pictures already stored;
		
		insertItem = function(item){
					
			// Open a transaction to the database
		    var transaction = db.transaction(["data"], "readwrite");
					
		    // Put the blob into the database
		   	var put = transaction.objectStore("data").put(item);

		},
				
		//Method for getting a picture by id
		getItemById = function(id, callback){
		  
		  callback = callback || function(){};	
		  
          // Open a transaction to the database
          var transaction = db.transaction(["data"], "readwrite");
					
          // Retrieve the file that was just stored
          transaction.objectStore("data").get(id).onsuccess = function (event) {
              var item = event.target.result;
			  callback(item);
			  
          };
       
		},
					
		//Method for getting all stored informations from indexedDB	
		getAllItems = function(callback){
		    
			callback = callback || function(){};
			var items = [];
			var dataObjectStore = db.transaction(["data"], "readwrite").objectStore("data");
            
			dataObjectStore.openCursor().onsuccess = function(event) {
				var cursor = event.target.result;
				if (cursor) {
					items.push({key: cursor.key, value: cursor.value});
					    
					    cursor.continue();
				}
				else {
						callback(items);
					  }
		   
			};
		   
		  
		},
				
		//Method for deleting the picture with the lowest id(the "older" picture) from idexedDB
		deleteItem = function(id, callback){
			
			callback = callback || function(){};		
			var request = db.transaction(["data"], "readwrite")
							.objectStore("data")
					        .delete(id);
			request.onsuccess = function(event) {
				callback();
			};
					
		};
 
    request.onerror = function (event) {
        console.log("Error creating/accessing IndexedDB database");
    };
 
    request.onsuccess = function (event) {
        db = request.result;
        
        // Get the item when the button is clicked
        $('#dAdd').click(function(){
       			var item={};
       			item.date = document.getElementById("datepicker").value ; 
		        item.location = document.getElementById("locat").value ;
		        item.message = document.getElementById("mes").value ; 
		        item.time1 = document.getElementById("hour1").value ;
		        item.time2 = document.getElementById("hour2").value ; 
        // Insert the item 
        insertItem(item);
        
		function callbac(objects){
	 		var i=objects.length-1;
			var item = objects[i];
				
				$('#Date').append('<div id="DateAppend">' + item.value.date+'</div>');
				$('#Loc').append('<div id="LocAppend">' + item.value.location+'</div>');
				$('#Mes').append('<div class="msg">' + item.value.message+'</div>');
				$('#H1').append('<div class="H1H2Append">' + item.value.time1+'</div>');
				$('#H2').append('<div class="H1H2Append">' + item.value.time2+'</div>');
				
	       
   }
   
   database.getAllItems(callbac);
   
        
        });
       
        function updateUI(dbObjects){ 
		 
		for (var j = 0; j < dbObjects.length; j++){ 
                    len=dbObjects.length;
                    
                           	 }
                          } 
	          getAllItems(updateUI); 
      
        db.onerror = function (event) {
            console.log("Error creating/accessing IndexedDB database");
        };
    };
    
    // For future use. Currently only in latest Firefox versions
    request.onupgradeneeded = function (event) {
		createObjectStore(request.result);
    };
		
	//Here we export all the methods that we need in the other parts of the application
	exports.insertItem = insertItem;
	exports.getItemById = getItemById;
	exports.getAllItems = getAllItems;
	exports.deleteItem = deleteItem;
  

})(database);

  $(window).load(function(){
 		jQuery('#showEvent').html('');
		function callback(objects){
	 		for(var i=0; i<objects.length; i++){
				var item = objects[i];
				
				$('#Date').append('<div id="DateAppend">' + item.value.date+'</div>');
				$('#Loc').append('<div id="LocAppend">' + item.value.location+'</div>');
				$('#Mes').append('<div class="msg">' + item.value.message+'</div>');
				$('#H1').append('<div class="H1H2Append">' + item.value.time1+'</div>');
				$('#H2').append('<div class="H1H2Append">' + item.value.time2+'</div>');
				
	        }
   }
   
   database.getAllItems(callback);
 
  
   });
  
});
