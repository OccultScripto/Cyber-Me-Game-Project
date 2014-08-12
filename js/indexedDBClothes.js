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
				
		//Method for inserting a picture in IndexedDB; It first removes a picture if there are maximum pictures already stored;
		insertItem = function(item){
					
			// Open a transaction to the database
		    var transaction = db.transaction("data", "readwrite");
					
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
			  document.getElementById('databaseName').value=item.name;
			  document.getElementById('databasePrice').value=item.price;
			  
          };
		},
					
		//Method for getting all stored pictures from indexedDB	
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



